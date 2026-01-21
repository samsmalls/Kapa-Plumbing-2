document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

    const animatedElements = document.querySelectorAll('.my-header, .hero-image-one, .achievement, .service-text, .why-choose-us-container, .keeping-uptodate, .bio-txt');

    animatedElements.forEach(el => {
        observer.observe(el);
    });
});