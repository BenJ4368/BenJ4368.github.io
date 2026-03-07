const myName = "Benjamin Gaertner";
const typingAnimDelay = 0; // 2000
const typingSpeed = 1; // 75
const output = document.getElementById('name');

// Name typing animation
function typingName(text, i) {
	if (i < text.length) {
		output.innerHTML += text.charAt(i);
		setTimeout(() => typingName(text, i + 1), typingSpeed);
	}
}

// Brick appearing animation
function brickAppreaing() {
    const bricks = document.querySelectorAll('.brick');
	
    bricks.forEach((brick, index) => {
        // Bricks must be at opacity 0 and sclaled down to 0.8 at the start, from the CSS
        setTimeout(() => {
            brick.style.opacity = '1';
            brick.style.transform = 'scale(1)';
            brick.style.transition = 'all 0.4s cubic-bezier(0.1, 0.8, 0.3, 1.2)';
        }, 100 * index);
    });
}

// Brick expanding function
function brickExpanding() {
    const grid = document.querySelector('.bento-grid');
    const bricks = document.querySelectorAll('.brick');
    
    bricks.forEach((brick) => {

        brick.addEventListener('click', function(e) {
            // clicked on close button, do not open the brick
            if (e.target.classList.contains('close-btn')) return;
            // if brick isnt already expanded, open it
            if (!brick.classList.contains('expanded')) {
                grid.classList.add('has-expanded');
                brick.classList.add('expanded');
            }
        });

        const closeBtn = brick.querySelector('.close-btn');
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // prevent the click event from bubbling up to the brick
            brick.classList.remove('expanded');
            grid.classList.remove('has-expanded');
        });
    });
}

// Contact Form handling with EmailJS
function contactFromHandler() {
    const btn = document.getElementById('submit-contact');
    const status = document.getElementById('contact-status');
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        // Get the date and time of sending
        const now = new Date();
        const dateStr = now.toLocaleDateString('fr-FR');
        const timeStr = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        // Set hidden inputs to the date and time values
        // Because they are in the form, they will be sent with the email and can be used in the EmailJS template
        document.getElementById('from-date').value = dateStr;
        document.getElementById('from-time').value = timeStr;

        e.preventDefault();
        btn.disabled = true;
        btn.textContent = 'Envoi en cours...';
        emailjs.sendForm("contact-portfolio","portfoliomessagetemplate", form)
            .then(() => {
                status.textContent = 'Message envoyé avec succès !';
                status.style.color = 'green';
                form.reset();
            })
            .catch((error) => {
                status.textContent = 'Erreur lors de l\'envoi du message.';
                status.style.color = 'red';
                console.error('EmailJS error:', error);
            })
            .finally(() => {
                btn.disabled = false;
                btn.textContent = 'Envoyer';
            });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    output.classList.add('cursor-blink')
    setTimeout(() => {
        typingName(myName, 0);
    }, typingAnimDelay);
    setTimeout(() => {
        brickAppreaing();
        brickExpanding();
        contactFromHandler();
    }, typingAnimDelay + myName.length * typingSpeed + 500);
});
