// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Form handling
function handleContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            };
            
            // For GitHub Pages, you can integrate with services like Formspree, EmailJS, or Netlify Forms
            // Here's a simple mailto fallback
            const subject = encodeURIComponent('Contact from ElioPet Scanner Website');
            const body = encodeURIComponent(
                `Name: ${formData.name || 'Not provided'}\n` +
                `Email: ${formData.email}\n\n` +
                `Message:\n${formData.message}`
            );
            
            // Option 1: Simple mailto (will open email client)
            window.location.href = `mailto:hello@eliopet.com?subject=${subject}&body=${body}`;
            
            // Option 2: If you want to use a form service like Formspree:
            // Uncomment below and add your Formspree endpoint
            /*
            try {
                const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    alert('Thank you! Your message has been sent.');
                    form.reset();
                } else {
                    alert('Sorry, there was an error sending your message. Please try emailing directly.');
                }
            } catch (error) {
                alert('Sorry, there was an error. Please try emailing directly at hello@eliopet.com');
            }
            */
        });
    }
}

// Smooth scroll for navigation links
function handleSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for actual hash links (not just "#")
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav if any
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Add scroll-based navbar background
function handleNavbarScroll() {
    const nav = document.querySelector('.nav-container');
    
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.backdropFilter = 'blur(10px)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
            } else {
                nav.style.background = 'transparent';
                nav.style.boxShadow = 'none';
            }
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    handleContactForm();
    handleSmoothScroll();
    handleNavbarScroll();
});
