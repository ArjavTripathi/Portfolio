import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal:not(.reveal-in)').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 0.06}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
