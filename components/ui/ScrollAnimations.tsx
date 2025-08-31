'use client';

import { useEffect } from 'react';

export function ScrollAnimations() {
  useEffect(() => {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}