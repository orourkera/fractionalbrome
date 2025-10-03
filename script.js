(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const yearEl = document.getElementById('year');
  const carousel = document.querySelector('[data-carousel]');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!isExpanded));
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (carousel) {
    const track = carousel.querySelector('[data-carousel-track]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    const updateButtons = () => {
      if (!track) return;
      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      const currentScroll = track.scrollLeft;
      prevButton?.setAttribute('aria-disabled', String(currentScroll <= 0));
      nextButton?.setAttribute('aria-disabled', String(currentScroll >= maxScrollLeft - 1));
    };

    const scrollCarousel = (direction) => {
      if (!track) return;
      const cardWidth = track.querySelector('.property-card')?.offsetWidth || 300;
      track.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
      setTimeout(updateButtons, 350);
    };

    prevButton?.addEventListener('click', () => scrollCarousel(-1));
    nextButton?.addEventListener('click', () => scrollCarousel(1));

    track?.addEventListener('scroll', updateButtons);

    updateButtons();
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      const target = targetId && document.querySelector(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
