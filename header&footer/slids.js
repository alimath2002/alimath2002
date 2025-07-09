       
        document.getElementById('planepoints').style.height=document.getElementsByClassName('project-card').length*300+500+'px'
        if (window.pageweidth < 600) {
            document.getElementById('planepoints').style.height=document.getElementsByClassName('project-card').length*300*2.5+'px'
        }
        // Mobile navigation toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Modal functionality
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
            document.body.style.overflow = 'hidden';
            resetSlider(modalId);
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside content
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Slider functionality for each project
        const sliders = {};
        const slideIndexes = {};

        function initSlider(modalId) {
            const slider = document.querySelector(`#${modalId} .slider`);
            const slides = document.querySelectorAll(`#${modalId} .slide`);
            const dots = document.querySelectorAll(`#${modalId} .slider-dot`);
            
            sliders[modalId] = slider;
            slideIndexes[modalId] = 0;
            
            // Initialize dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => goToSlide(modalId, index));
            });
        }

        function resetSlider(modalId) {
            if (!sliders[modalId]) {
                initSlider(modalId);
            } else {
                slideIndexes[modalId] = 0;
                updateSlider(modalId);
            }
        }

        function updateSlider(modalId) {
            const slider = sliders[modalId];
            const slides = document.querySelectorAll(`#${modalId} .slide`);
            const dots = document.querySelectorAll(`#${modalId} .slider-dot`);
            
            slider.style.transform = `translateX(-${slideIndexes[modalId] * 100}%)`;
            
            // Update dots
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === slideIndexes[modalId]);
            });
        }

        function nextSlide(modalId) {
            const slides = document.querySelectorAll(`#${modalId} .slide`);
            slideIndexes[modalId] = (slideIndexes[modalId] + 1) % slides.length;
            updateSlider(modalId);
        }

        function prevSlide(modalId) {
            const slides = document.querySelectorAll(`#${modalId} .slide`);
            slideIndexes[modalId] = (slideIndexes[modalId] - 1 + slides.length) % slides.length;
            updateSlider(modalId);
        }

        function goToSlide(modalId, index) {
            slideIndexes[modalId] = index;
            updateSlider(modalId);
        }

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the data to a server
                console.log({ name, email, subject, message });
                
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            });
        }

        // Initialize all sliders when page loads
        document.addEventListener('DOMContentLoaded', () => {
            ['project1', 'project2', 'project3'].forEach(initSlider);
        });
