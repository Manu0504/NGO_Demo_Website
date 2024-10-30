// Smooth Scrolling for Navigation Links

// Form Validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert(`Thank you for your message, ${name}!`);
            // Optionally, clear the form
            contactForm.reset();
        }
    });
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) { // Check if both elements exist
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Optional: Close mobile menu on link click
    navMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}
