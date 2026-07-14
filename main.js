// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when a link is clicked
if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Modal functionality
const modal = document.getElementById('eventModal');
const closeBtn = document.querySelector('.close');

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Open Event Modal
function openEventModal(event) {
    const modalBody = document.getElementById('modalBody');
    const eventTime = event.time || 'TBD';
    
    modalBody.innerHTML = `
        <div class="modal-event-details">
            <h2>${event.title}</h2>
            <p class="modal-category"><strong>Category:</strong> ${event.category}</p>
            <p class="modal-date"><i class="fas fa-calendar"></i> <strong>Date:</strong> ${event.date}</p>
            <p class="modal-time"><i class="fas fa-clock"></i> <strong>Time:</strong> ${eventTime}</p>
            <p class="modal-location"><i class="fas fa-map-marker-alt"></i> <strong>Location:</strong> ${event.location}</p>
            <div class="modal-description">
                <h3>Details</h3>
                <p>${event.description}</p>
            </div>
            <button class="btn btn-primary" onclick="registerEvent('${event.title}')">Register Now</button>
        </div>
    `;
    modal.style.display = 'block';
}

// Register for Event
function registerEvent(eventName) {
    alert(`You have registered for: ${eventName}`);
    modal.style.display = 'none';
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.event-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

console.log('HSHS Events - Main Script Loaded');
