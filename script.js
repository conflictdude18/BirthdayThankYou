document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const nameInput = document.getElementById('nameInput');
    const thankButton = document.getElementById('thankButton');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const personalThankYou = document.getElementById('personalThankYou');
    const resetButton = document.getElementById('resetButton');
    const confettiContainer = document.querySelector('.confetti-container');
    const floatingHearts = document.querySelector('.floating-hearts');
    
    // Create confetti
    function createConfetti() {
        const colors = ['#ff6b6b', '#ffa5a5', '#ffd166', '#06d6a0', '#118ab2', '#073b4c', '#f15bb5', '#fee440'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            // Random properties
            const size = Math.floor(Math.random() * 10) + 5;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 3 + 2;
            
            // Apply styles
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.backgroundColor = color;
            confetti.style.left = `${left}%`;
            confetti.style.animationDuration = `${animationDuration}s`;
            
            // Add to container
            confettiContainer.appendChild(confetti);
            
            // Remove after animation completes
            setTimeout(() => {
                confetti.remove();
            }, animationDuration * 1000);
        }
    }
    
    // Create floating hearts
    function createHearts() {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            
            // Random properties
            const left = Math.random() * 100;
            const delay = Math.random() * 2;
            const size = Math.floor(Math.random() * 20) + 15;
            
            // Apply styles
            heart.style.left = `${left}%`;
            heart.style.fontSize = `${size}px`;
            heart.style.animationDelay = `${delay}s`;
            
            // Add to container
            floatingHearts.appendChild(heart);
            
            // Remove after animation completes
            setTimeout(() => {
                heart.remove();
            }, 5000 + (delay * 1000));
        }
    }
    
    // Show thank you message
    function showThankYouMessage(name) {
        // Hide form, show message
        document.querySelector('.form-container').classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        
        // Personalize message
        const messages = [
            `Thank you so much, ${name}! You made my day special!`,
            `I appreciate your wishes, ${name}! You're awesome!`,
            `Your message means a lot, ${name}! Thank you!`,
            `Thanks for remembering, ${name}! You're the best!`,
            `I'm so grateful for your wishes, ${name}! ❤️`
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        personalThankYou.textContent = randomMessage;
        
        // Create more confetti and hearts
        createConfetti();
        createHearts();
        
        // Animate the thank you message
        animateThankYou();
    }
    
    // Animate thank you message
    function animateThankYou() {
        const text = personalThankYou.textContent;
        personalThankYou.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                personalThankYou.textContent += text[i];
            }, i * 50);
        }
    }
    
    // Reset form
    function resetForm() {
        nameInput.value = '';
        thankYouMessage.classList.add('hidden');
        document.querySelector('.form-container').classList.remove('hidden');
        nameInput.focus();
    }
    
    // Event listeners
    thankButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            showThankYouMessage(name);
        } else {
            alert('Please enter your name first!');
            nameInput.focus();
        }
    });
    
    resetButton.addEventListener('click', resetForm);
    
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            thankButton.click();
        }
    });
    
    // Initial confetti and hearts
    createConfetti();
    createHearts();
    
    // Periodic animations
    setInterval(createConfetti, 5000);
    setInterval(createHearts, 3000);
    
    // Focus on input when page loads
    nameInput.focus();
});