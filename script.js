// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const closeDrawerBtn = document.getElementById('close-drawer');
const drawerLinks = document.querySelectorAll('.drawer-link');
const body = document.body;

// Toggle mobile drawer
function toggleDrawer() {
    mobileDrawer.classList.toggle('open');
    body.classList.toggle('drawer-open');
}

// Close mobile drawer
function closeDrawer() {
    mobileDrawer.classList.remove('open');
    body.classList.remove('drawer-open');
}

// Event listeners
mobileMenuBtn.addEventListener('click', toggleDrawer);
closeDrawerBtn.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);

// Close drawer when clicking a link
drawerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        closeDrawer();

        // Smooth scroll to section
        setTimeout(() => {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 300); // Wait for drawer close animation
    });
});

// Smooth scroll for desktop nav links
const navLinks = document.querySelectorAll('.desktop-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Close drawer on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
    }
});
