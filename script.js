document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.hidden-element');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight) {
                element.classList.add('visible');
            }
        });
    }
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

  