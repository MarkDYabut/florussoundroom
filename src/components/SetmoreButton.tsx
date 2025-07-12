'use client';

import { usePathname } from 'next/navigation';

export default function SetmoreButton() {
  const pathname = usePathname();
  
  // Hide the button on the index page (route '/')
  if (pathname === '/') {
    return null;
  }

  return (
    <a 
      style={{
        position: 'fixed', 
        right: '-2px', 
        top: '25%', 
        display: 'block', 
        zIndex: 20000
      }} 
      id="Setmore_button_iframe" 
      href="https://florussoundroom.setmore.com"
    >
      <img 
        style={{border: 'none'}}
        src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png" 
        alt="Book an appointment with FLORUS SOUND ROOM using Setmore" 
      />
    </a>
  );
}
