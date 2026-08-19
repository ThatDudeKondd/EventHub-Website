// ==========================================
// EVENTHub MAIN JAVASCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Handling
    const mobileMenuBtn = document.getElementById('mobileMenu');
    const mobilePanel = document.getElementById('mobilePanel');

    if (mobileMenuBtn && mobilePanel) {
        mobileMenuBtn.addEventListener('click', () => {
            const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenuBtn.setAttribute('aria-expanded', !expanded);
            mobilePanel.classList.toggle('active');
        });
    }

    // 2. Navbar Scrolling Effect
    const navbar = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Dynamic Year Replacement
    const yearElements = document.querySelectorAll('[data-year]');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        el.textContent = currentYear;
    });

    // 4. Reveal Animations on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll(
        '.feature-card, .event-card, .workflow-step, .doc-card, .command-terminal'
    );

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Dashboard Parallax (Desktop)
    const dashboardMockup = document.querySelector('.dashboard-mockup');
    if (dashboardMockup && window.innerWidth > 1000) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;
            dashboardMockup.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
        });
    }

    // 6. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        }
    });

    // 7. FAQ Live Search Input
    const faqSearch = document.getElementById('faqSearch');
    if (faqSearch) {
        faqSearch.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            faqItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(term)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
})