// ===========================
// NAVIGATION FUNCTIONALITY
// ===========================

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

// Add shadow to navbar on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(26, 54, 93, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 4px rgba(26, 54, 93, 0.05)';
    }
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

// Intersection Observer for scroll animations
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

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.ism-card, .research-card, .blog-entry, .project-card, .highlight-item, .about-content, .resume-content'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// INTERACTIVE ELEMENTS
// ===========================

// Add click handlers for research cards
document.querySelectorAll('.view-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const cardTitle = this.closest('.research-card').querySelector('h3').textContent;
        alert(`${cardTitle} section will be available with future content updates.`);
    });
});

// Add click handlers for blog "Read More" toggle
document.querySelectorAll('.read-more-toggle').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const blogEntry = this.closest('.blog-entry');
        const excerpt = blogEntry.querySelector('.blog-excerpt');
        const fullContent = blogEntry.querySelector('.blog-full-content');

        if (fullContent.style.display === 'none') {
            // Show full content
            excerpt.style.display = 'none';
            fullContent.style.display = 'block';
            this.innerHTML = 'Show Less <i class="fas fa-arrow-up"></i>';
        } else {
            // Show excerpt
            excerpt.style.display = 'block';
            fullContent.style.display = 'none';
            this.innerHTML = 'Read Full Entry <i class="fas fa-arrow-right"></i>';
        }
    });
});

// Add click handlers for project links
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Detailed project pages will be added as work progresses!');
    });
});

// Add click handler for final product button
const finalProductBtn = document.querySelector('.final-product-btn');
if (finalProductBtn) {
    finalProductBtn.addEventListener('click', function() {
        alert('Final product documentation will be available upon project completion!');
    });
}

// Resume download buttons - removed alert handlers to allow downloads

// ===========================
// PAGE TRANSITIONS
// ===========================

// Fade in on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log('%c ISM Portfolio Website ', 'background: #1a365d; color: #f5e6d3; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Multi-Page Navigation Active ', 'color: #1a365d; font-size: 12px; font-weight: bold;');
console.log('%c Developed for Independent Study Mentorship ', 'color: #5a6d7f; font-size: 12px;');
