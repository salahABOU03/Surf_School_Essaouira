// MOBILE MENU LOGIC
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const desktopNav = document.querySelector('.desktop-nav');
const body = document.body;

// Create mobile menu dynamically if it doesn't exist
function initMobileMenu() {
    if (window.innerWidth <= 768) {
        // Simple toggle for the existing desktop nav on mobile
        mobileMenuBtn.addEventListener('click', () => {
            desktopNav.style.display = desktopNav.style.display === 'block' ? 'none' : 'block';
            desktopNav.style.position = 'absolute';
            desktopNav.style.top = '100%';
            desktopNav.style.left = '0';
            desktopNav.style.width = '100%';
            desktopNav.style.background = 'white';
            desktopNav.style.padding = '20px';
            desktopNav.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
            
            const ul = desktopNav.querySelector('ul');
            ul.style.flexDirection = 'column';
            ul.style.gap = '15px';
        });
    }
}

// PRICING TAB LOGIC
function switchTab(type) {
    const privateTab = document.getElementById('private-pricing');
    const groupTab = document.getElementById('group-pricing');
    const btns = document.querySelectorAll('.tab-btn');

    btns.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-tab="${type}"]`).classList.add('active');

    if (type === 'private') {
        privateTab.style.display = 'block';
        groupTab.style.display = 'none';
    } else {
        privateTab.style.display = 'none';
        groupTab.style.display = 'block';
    }
}

// HEADER SCROLL EFFECT
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// SMOOTH SCROLL FOR ALL LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                desktopNav.style.display = 'none';
            }
        }
    });
});

// REVEAL ON SCROLL
function reveal() {
    var reveals = document.querySelectorAll("section");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// REVIEWS SCROLL
function scrollReviews(direction) {
    const carousel = document.getElementById('review-carousel');
    if (carousel) {
        const scrollAmount = carousel.offsetWidth / 1.5;
        carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}

// Initial call
initMobileMenu();
window.addEventListener('resize', initMobileMenu);

