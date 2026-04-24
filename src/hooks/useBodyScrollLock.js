'use client';

import { useEffect } from 'react';

export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    // Save current scroll position
    const scrollY = window.scrollY;
    
    // Lock scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100% ';
    document.body.style.overflowY = 'scroll'; // Prevent layout shift

    return () => {
      // Restore scroll position
      const savedScrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflowY = '';
      
      const top = parseInt(savedScrollY || '0') * -1;
      if (!isNaN(top)) {
        window.scrollTo(0, top);
      }
    };
  }, [isLocked]);
}
