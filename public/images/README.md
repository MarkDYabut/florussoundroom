# Image Compression Script

A bash script that uses macOS's built-in `sips` command to compress images by resizing them to a maximum dimension of 1920px while maintaining aspect ratio.

## Usage

1. Copy the `compress-images.sh` script to the directory containing the images you want to compress
2. Navigate to that directory
3. Run the script:

```bash
cd /path/to/your/images
./compress-images.sh
```

## Features

- **Automatic backup**: Creates a timestamped backup directory before processing
- **Smart resizing**: Only resizes images larger than 1920px in either dimension
- **Maintains aspect ratio**: Images are proportionally resized
- **Multiple formats**: Supports jpg, jpeg, png, gif, bmp, tiff, webp (case insensitive)
- **Detailed output**: Shows progress and statistics
- **Safe**: Creates backups and won't overwrite without confirmation

## Requirements

- macOS (uses the `sips` command)
- Bash shell

## Example Output

```
=== Image Compression Script ===
Maximum dimension: 1920px

Found 12 image file(s) to process

Creating backup directory: backup-20250710-213956
Processing: large-photo.jpg
  Resizing from 6000x3376
  ✓ Resized to 1092x614 (94% smaller)

Processing: small-photo.jpg
  ✓ Skipping (already optimal size: 800x600)

=== Summary ===
Processed: 1 images
Skipped: 1 images
Original total size: 15MB
New total size: 2MB
Total size reduction: 87%
```

## Configuration

You can modify the `MAX_DIMENSION` variable at the top of the script to change the maximum dimension (default: 1920px).

## Safety

- Original images are always backed up to a timestamped directory
- The script will not process if no image files are found
- Individual file failures won't stop the entire process
