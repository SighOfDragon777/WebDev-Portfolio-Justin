document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (name === '') {
                feedback.textContent = '❌ Please enter your name.';
                feedback.className = 'form-feedback error';
            } else if (email === '' || !email.includes('@')) {
                feedback.textContent = '❌ Please enter a valid email address (must contain @).';
                feedback.className = 'form-feedback error';
            } else {
                feedback.textContent = '✅ Thank you! I\'ll get back to you soon.';
                feedback.className = 'form-feedback success';
                form.reset();
            }
        });
    }


    const darkModeBtn = document.createElement('button');
    darkModeBtn.textContent = '🌙 Dark Mode';
    darkModeBtn.classList.add('dark-mode-toggle');
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeBtn.textContent = '☀️ Light Mode';
        } else {
            darkModeBtn.textContent = '🌙 Dark Mode';
        }
    });

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Accessibility
            const expanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', expanded);
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('✅ Website loaded! Justin Teng portfolio ready.');
});
