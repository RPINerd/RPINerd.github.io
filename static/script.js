/**
 * Portfolio website JavaScript functionality
 * Provides smooth scrolling and active section highlighting
 */

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.sidebar nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Smooth scroll to the section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section in navigation
    const sections = document.querySelectorAll('.section');

    function highlightActiveSection() {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.sidebar nav a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`.sidebar nav a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    }

    // Initial call to highlight the active section
    highlightActiveSection();

    // Call on scroll
    window.addEventListener('scroll', highlightActiveSection);

    // Simple form submission handling (just prevent default for now)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! This form is not yet connected to a backend.');
        });
    }
});