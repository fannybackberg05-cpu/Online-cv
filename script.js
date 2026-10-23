document.addEventListener('DOMContentLoaded', () => {

    // 1. Language Toggle Button Logic (Switches back to Swedish when clicked)
    const langBtn = document.getElementById('lang-btn');
    langBtn.addEventListener('click', () => {
        // Placeholder toggle action or alert if Swedish version isn't hosted separately yet
        alert("Portfolio is currently displayed in English. (You can link back to a Swedish version or implement full multi-language translation here!)");
    });

    // 2. Interactive 3D Tilt & Mouse-Glow Effect on Cards
    const cards = document.querySelectorAll('.interactive-card');

    cards.forEach(card => {
        const glow = card.querySelector('.glow-effect');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  

            if (glow) {
                glow.style.left = `${x}px`;
                glow.style.top = `${y}px`;
            }

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8; 
            const rotateY = ((x - centerX) / centerX) * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // 3. Smooth Fade-In Animation on Scroll
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

});

const hamburgerBtn = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', navLinks.classList.contains('active'));
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}