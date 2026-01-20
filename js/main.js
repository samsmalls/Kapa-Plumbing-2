document.addEventListener("DOMContentLoaded", () => {

  const mainSections = document.querySelectorAll(
    '.my-header, \
     .hero-image-one, \
     .services-main, \
     .why-choose-us-container, \
     .uptodate-container, \
     .biodigester-container'
  );

  const achievementItems = document.querySelectorAll(
    '.achievements-container .achievement'
  );

  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('inview');
      } else {
        entry.target.classList.remove('inview');
      }

    });
  }, observerOptions);

  mainSections.forEach(el => observer.observe(el));
  achievementItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    observer.observe(item);
  });

});
