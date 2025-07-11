#!/bin/bash

# Image Compression Script using macOS sips
# This script resizes images to have a maximum dimension of 1920px
# Usage: Run this script from the directory containing the images to compress
# Example: cd /path/to/images && ./compress-images.sh

set -e  # Exit on any error

# Configuration
MAX_DIMENSION=1920
BACKUP_DIR="backup-$(date +%Y%m%d-%H%M%S)"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Image Compression Script ===${NC}"
echo -e "${BLUE}Maximum dimension: ${MAX_DIMENSION}px${NC}"
echo ""

# Check if we're on macOS and have sips available
if ! command -v sips &> /dev/null; then
    echo -e "${RED}Error: sips command not found. This script requires macOS.${NC}"
    exit 1
fi

# Count image files
shopt -s nullglob
image_files=(*.jpg *.jpeg *.png *.gif *.bmp *.tiff *.webp *.JPG *.JPEG *.PNG *.GIF *.BMP *.TIFF *.WEBP)
if [ ${#image_files[@]} -eq 0 ]; then
    echo -e "${YELLOW}No image files found in current directory.${NC}"
    exit 0
fi

echo -e "${BLUE}Found ${#image_files[@]} image file(s) to process${NC}"
echo ""

# Create backup directory
echo -e "${YELLOW}Creating backup directory: ${BACKUP_DIR}${NC}"
mkdir -p "$BACKUP_DIR"

# Initialize counters
processed=0
skipped=0
total_original_size=0
total_new_size=0

# Process each image file
for file in "${image_files[@]}"; do
    if [ ! -f "$file" ]; then
        continue
    fi
    
    echo -e "${BLUE}Processing: ${file}${NC}"
    
    # Get original file size
    original_size=$(stat -f%z "$file" 2>/dev/null || echo 0)
    total_original_size=$((total_original_size + original_size))
    
    # Copy to backup first
    cp "$file" "$BACKUP_DIR/"
    
    # Get current dimensions
    width=$(sips -g pixelWidth "$file" 2>/dev/null | tail -1 | awk '{print $2}')
    height=$(sips -g pixelHeight "$file" 2>/dev/null | tail -1 | awk '{print $2}')
    
    # Check if we got valid dimensions
    if [[ ! "$width" =~ ^[0-9]+$ ]] || [[ ! "$height" =~ ^[0-9]+$ ]]; then
        echo -e "${RED}  Warning: Could not read dimensions for ${file}, skipping${NC}"
        continue
    fi
    
    # Only resize if either dimension is larger than MAX_DIMENSION
    if [ "$width" -gt "$MAX_DIMENSION" ] || [ "$height" -gt "$MAX_DIMENSION" ]; then
        echo -e "  ${YELLOW}Resizing from ${width}x${height}${NC}"
        
        # Resize the image
        if sips --resampleHeight "$MAX_DIMENSION" --resampleWidth "$MAX_DIMENSION" "$file" > /dev/null 2>&1; then
            # Get new dimensions and size
            new_width=$(sips -g pixelWidth "$file" 2>/dev/null | tail -1 | awk '{print $2}')
            new_height=$(sips -g pixelHeight "$file" 2>/dev/null | tail -1 | awk '{print $2}')
            new_size=$(stat -f%z "$file" 2>/dev/null || echo 0)
            
            # Calculate size reduction
            if [ "$original_size" -gt 0 ]; then
                reduction=$((100 - (new_size * 100 / original_size)))
                echo -e "  ${GREEN}✓ Resized to ${new_width}x${new_height} (${reduction}% smaller)${NC}"
            else
                echo -e "  ${GREEN}✓ Resized to ${new_width}x${new_height}${NC}"
            fi
            
            processed=$((processed + 1))
        else
            echo -e "  ${RED}✗ Failed to resize${NC}"
        fi
    else
        echo -e "  ${GREEN}✓ Skipping (already optimal size: ${width}x${height})${NC}"
        skipped=$((skipped + 1))
    fi
    
    # Get final file size for totals
    final_size=$(stat -f%z "$file" 2>/dev/null || echo 0)
    total_new_size=$((total_new_size + final_size))
    
    echo ""
done

# Summary
echo -e "${BLUE}=== Summary ===${NC}"
echo -e "${GREEN}Processed: ${processed} images${NC}"
echo -e "${YELLOW}Skipped: ${skipped} images${NC}"

# Calculate total size reduction
if [ "$total_original_size" -gt 0 ]; then
    total_reduction=$((100 - (total_new_size * 100 / total_original_size)))
    original_mb=$((total_original_size / 1024 / 1024))
    new_mb=$((total_new_size / 1024 / 1024))
    
    echo -e "${BLUE}Original total size: ${original_mb}MB${NC}"
    echo -e "${BLUE}New total size: ${new_mb}MB${NC}"
    echo -e "${GREEN}Total size reduction: ${total_reduction}%${NC}"
fi

echo -e "${YELLOW}Original images backed up to: ${BACKUP_DIR}${NC}"
echo -e "${GREEN}Compression complete!${NC}"
