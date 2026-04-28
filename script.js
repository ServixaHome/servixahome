document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('ganesh-intro');
    const mainSite = document.getElementById('main-site');

    // 1. PREMIUM INTRO TRANSITION (Lush Fade)
    setTimeout(() => {
        // Intro ko dheere se blur karke gayab karenge
        intro.style.filter = 'blur(10px)';
        intro.style.opacity = '0';
        
        setTimeout(() => {
            intro.style.display = 'none';
            mainSite.style.opacity = '1';
            mainSite.style.transform = 'translateY(0)';
            
            // Site reveal hone ke baad animations start honge
            startScrollAnimations();
        }, 1000);
    }, 4500);

    // 2. INTERACTIVE GOLD DUST (Particles)
    const createParticles = () => {
        const container = document.getElementById('ganesh-intro');
        for (let i = 0; i < 40; i++) {
            const particle = document.createElement('div');
            particle.className = 'gold-dust';
            
            // Random positions
            const x = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 3 + 2;

            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #C8962A;
                left: ${x}vw;
                top: 100vh;
                opacity: ${Math.random()};
                border-radius: 50%;
                box-shadow: 0 0 10px #F0C040;
                animation: rise ${duration}s linear ${delay}s infinite;
            `;
            container.appendChild(particle);
        }
    };
    createParticles();

    // 3. SCROLL REVEAL (Professional Entry)
    const startScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // In elements par animation apply hoga
        document.querySelectorAll('.service-card, .hero-text, .main-logo-display').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
            observer.observe(el);
        });
    };

    // 4. MOUSE HOVER PARALLAX (Logo Move Effect)
    const logo = document.querySelector('.main-logo-display img');
    if(logo) {
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            logo.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX * 0.5}deg)`;
        });
    }

    // 5. MAGNETIC BUTTONS (Small Premium Detail)
    const btns = document.querySelectorAll('.btn-primary, .btn-secondary');
    btns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0, 0)`;
        });
    });
});

// Particle Animation CSS (Add this to your CSS file)
/* @keyframes rise {
    0% { transform: translateY(0) scale(1); opacity: 0; }
    50% { opacity: 0.8; }
    100% { transform: translateY(-100vh) scale(0); opacity: 0; }
}
*/
