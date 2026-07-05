const elements = document.querySelectorAll(".service-card, .portfolio-item, .number-card, .about-text");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // anima só 1 vez (mais premium)
        }

    });
}, {
    threshold: 0.15
});

elements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});