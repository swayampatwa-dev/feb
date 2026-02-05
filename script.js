// DOM Elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageArea = document.getElementById('messageArea');
const mainContent = document.getElementById('mainContent');
const successMessage = document.getElementById('successMessage');
const confettiContainer = document.getElementById('confettiContainer');
const envelopeContainer = document.getElementById('envelopeContainer');
const envelopeFlap = document.getElementById('envelopeFlap');
const letter = document.getElementById('letter');
const finalCelebration = document.getElementById('finalCelebration');

// State Management
let noClickCount = 0;
let isEscaping = false;

// Cute messages for NO button clicks
const cuteMessages = [
    "Think again 😌",
    "Are you serious? 😏", 
    "Dil se socho 💗",
    "Last chance 😭",
    "Please na baby 🥺",
    "I'll be sad 😢",
    "Just say yes please 🙏",
    "You're breaking my heart 💔"
];

// Initialize event listeners
function initializeApp() {
    yesBtn.addEventListener('click', handleYesClick);
    noBtn.addEventListener('click', handleNoClick);
    noBtn.addEventListener('mouseenter', handleNoHover);
    
    // For mobile devices
    noBtn.addEventListener('touchstart', handleNoHover);
}

// Handle YES button click with envelope animation
function handleYesClick() {
    // Create massive confetti effect
    createMassiveConfetti();
    
    // Hide main content and show success message
    mainContent.style.display = 'none';
    successMessage.classList.add('show');
    
    // Start envelope animation sequence
    setTimeout(() => {
        startEnvelopeAnimation();
    }, 500);
}

// Start the envelope opening animation sequence
function startEnvelopeAnimation() {
    // Show envelope container
    envelopeContainer.classList.add('show');
    
    // Create extra confetti during envelope reveal
    createExtraConfetti();
    
    // Open envelope flap after 1 second
    setTimeout(() => {
        envelopeFlap.classList.add('open');
        
        // Slide up letter after flap opens
        setTimeout(() => {
            letter.classList.add('slide-up');
            
            // Create heart explosion when letter appears
            createHeartExplosion();
        }, 1000);
    }, 1500);
    
    // Transition to final celebration after 6 seconds
    setTimeout(() => {
        transitionToFinalCelebration();
    }, 7000);
}

// Transition to final celebration screen
function transitionToFinalCelebration() {
    envelopeContainer.style.display = 'none';
    finalCelebration.classList.add('show');
    
    // Create ultimate celebration effects
    createUltimateCelebration();
}

// Create massive confetti effect
function createMassiveConfetti() {
    const colors = ['#ff6b9d', '#ff8787', '#ffc0cb', '#ffb6c1', '#ff1493', '#e91e63'];
    const shapes = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            
            if (Math.random() > 0.2) {
                confetti.className = 'confetti heart';
                confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            } else {
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            }
            
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.fontSize = (Math.random() * 2 + 1) + 'rem';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Create extra confetti for envelope reveal
function createExtraConfetti() {
    const shapes = ['💕', '💖', '💗'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti heart';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 0.3 + 's';
            confetti.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 100);
    }
}

// Create heart explosion effect
function createHeartExplosion() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'explosion-heart-effect';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.transform = 'translate(-50%, -50%)';
        heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        heart.style.zIndex = '1001';
        heart.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = Math.random() * 300 + 200;
        
        document.body.appendChild(heart);
        
        // Animate explosion
        let startTime = null;
        function animateExplosion(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 1000;
            
            if (progress < 2) {
                const x = Math.cos(angle) * velocity * progress;
                const y = Math.sin(angle) * velocity * progress + (progress * progress * 100);
                const opacity = 1 - (progress / 2);
                
                heart.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
                heart.style.opacity = opacity;
                
                requestAnimationFrame(animateExplosion);
            } else {
                heart.remove();
            }
        }
        
        requestAnimationFrame(animateExplosion);
    }
}

// Create ultimate celebration effects
function createUltimateCelebration() {
    // Continuous confetti rain
    setInterval(() => {
        createCelebrationConfetti();
    }, 2000);
    
    // Floating hearts from bottom
    setInterval(() => {
        createFloatingHeartFromBottom();
    }, 1500);
    
    // Screen flash effect
    createScreenFlash();
}

// Create celebration confetti
function createCelebrationConfetti() {
    const colors = ['#ff6b9d', '#ff8787', '#ffc0cb', '#ff1493'];
    const shapes = ['❤️', '💕', '💖', '💗'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti heart';
        confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Create floating hearts from bottom
function createFloatingHeartFromBottom() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart-bottom';
    heart.textContent = ['❤️', '💕', '💖', '💗'][Math.floor(Math.random() * 4)];
    heart.style.position = 'fixed';
    heart.style.bottom = '-50px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    heart.style.zIndex = '1000';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'floatUpFromBottom 4s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create screen flash effect
function createScreenFlash() {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.background = 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,182,193,0.4) 50%, transparent 70%)';
    flash.style.zIndex = '999';
    flash.style.pointerEvents = 'none';
    flash.style.animation = 'screenFlash 1s ease-out forwards';
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
        flash.remove();
    }, 1000);
}

// Handle NO button click
function handleNoClick() {
noClickCount++;
    
if (noClickCount === 1) {
// First click - show "Think again" message and enable escaping
showMessage("Think again 😌");
isEscaping = true;
        
// Add shake animation to NO button
noBtn.style.animation = 'shake 0.5s';
setTimeout(() => {
noBtn.style.animation = '';
}, 500);
} else if (noClickCount === 2) {
// Second click - show final message and move button away
showMessage("Ab NO option available nahi hai 😈");
moveNoButton();
}
}

// Handle NO button hover (for escape functionality)
function handleNoHover(event) {
    if (isEscaping) {
        event.preventDefault();
        moveNoButton();
    }
}

// Move NO button to random position
function moveNoButton() {
    const button = noBtn;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // Calculate random position within viewport
    const maxX = viewportWidth - buttonWidth - 20;
    const maxY = viewportHeight - buttonHeight - 20;
    
    const randomX = Math.random() * maxX + 10;
    const randomY = Math.random() * maxY + 10;
    
    // Add escaping class for smooth transitions
    button.classList.add('escaping');
    
    // Apply new position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.position = 'fixed';
    button.style.transform = 'translate(0, 0)';
}

// Show message in message area
function showMessage(message) {
    messageArea.innerHTML = `<div class="message-text">${message}</div>`;
    
    // Add bounce animation
    const messageElement = messageArea.querySelector('.message-text');
    messageElement.style.animation = 'bounceIn 0.5s ease-out';
}

// Create floating hearts for celebration (legacy function)
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart celebration';
    heart.textContent = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.opacity = '0.7';
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Add additional animations and styles
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .floating-heart.celebration {
        position: fixed;
        top: -50px;
        z-index: 1001;
        animation: floatUp 4s ease-out forwards;
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.7;
        }
        90% {
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes floatUpFromBottom {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.8;
        }
        90% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-120vh) rotate(-360deg);
            opacity: 0;
        }
    }
    
    @keyframes screenFlash {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    .explosion-heart-effect {
        animation: explodeOut 2s ease-out forwards;
    }
    
    @keyframes explodeOut {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Handle window resize for responsive NO button
window.addEventListener('resize', () => {
    if (isEscaping && noBtn.classList.contains('escaping')) {
        // Ensure NO button stays within viewport on resize
        const button = noBtn;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        
        const currentX = parseInt(button.style.left) || 0;
        const currentY = parseInt(button.style.top) || 0;
        
        // Adjust position if button is outside viewport
        if (currentX + buttonWidth > viewportWidth) {
            button.style.left = (viewportWidth - buttonWidth - 20) + 'px';
        }
        if (currentY + buttonHeight > viewportHeight) {
            button.style.top = (viewportHeight - buttonHeight - 20) + 'px';
        }
    }
});

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Add keyboard support for accessibility
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        if (document.activeElement === yesBtn) {
            event.preventDefault();
            handleYesClick();
        } else if (document.activeElement === noBtn) {
            event.preventDefault();
            handleNoClick();
        }
    }
});

// Add focus management for better accessibility
yesBtn.setAttribute('tabindex', '0');
noBtn.setAttribute('tabindex', '0');
yesBtn.setAttribute('role', 'button');
noBtn.setAttribute('role', 'button');
yesBtn.setAttribute('aria-label', 'Yes, I will be your Valentine');
noBtn.setAttribute('aria-label', 'No, I will not be your Valentine');
