export const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
    observer.observe(el);
  });
};

export const initParallax = () => {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(el => {
      const speed = el.dataset.parallax || '0.5';
      const yPos = -(scrolled * speed);
      el.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  });
};
