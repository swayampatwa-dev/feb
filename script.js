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
const loveMusic = document.getElementById('loveMusic');
const musicToggle = document.getElementById('musicToggle');
const musicControls = document.getElementById('musicControls');

// State Management
let noClickCount = 0;
let isEscaping = false;
let isMusicPlaying = false;
let musicStarted = false;

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
    
    // Music controls
    musicToggle.addEventListener('click', toggleMusic);
    
    // Add decorative images to the website
    addDecorativeImages();
    
    // Initialize music
    initializeMusic();
    
    // Add first interaction listener to start music
    addFirstInteractionListener();
}

// Initialize music
function initializeMusic() {
    // Set volume to a comfortable level
    loveMusic.volume = 0.3;
    
    // Set music to play only 20 seconds
    loveMusic.currentTime = 0;
    
    // Add music controls styles
    musicControls.style.position = 'fixed';
    musicControls.style.bottom = '20px';
    musicControls.style.right = '20px';
    musicControls.style.zIndex = '1000';
    
    // Try to start music immediately (may be blocked by browser)
    attemptAutoStart();
}

// Attempt to auto-start music immediately
function attemptAutoStart() {
    loveMusic.play().then(() => {
        musicStarted = true;
        isMusicPlaying = true;
        updateMusicButton();
        start20SecondLoop();
        console.log('Music started automatically');
    }).catch(error => {
        console.log('Auto-start prevented, will start on first interaction');
    });
}

// Start 20-second loop
function start20SecondLoop() {
    loveMusic.addEventListener('timeupdate', function() {
        if (loveMusic.currentTime >= 20) {
            loveMusic.currentTime = 0; // Restart from beginning
        }
    });
}

// Toggle music play/pause
function toggleMusic() {
    if (!musicStarted) {
        // Start music on first interaction
        loveMusic.play().then(() => {
            musicStarted = true;
            isMusicPlaying = true;
            updateMusicButton();
            start20SecondLoop();
            showMessage("🎵 Romantic music started! Enjoy the mood 💕");
        }).catch(error => {
            console.log('Music autoplay prevented:', error);
            showMessage("Click the music button 🎵 to play romantic music!");
        });
    } else {
        if (isMusicPlaying) {
            loveMusic.pause();
            isMusicPlaying = false;
        } else {
            loveMusic.play();
            isMusicPlaying = true;
        }
        updateMusicButton();
    }
}

// Update music button appearance
function updateMusicButton() {
    const icon = musicToggle.querySelector('.music-icon');
    if (isMusicPlaying) {
        icon.textContent = '🎶';
        musicToggle.style.background = 'linear-gradient(135deg, #ff6b9d, #ff8787)';
        musicToggle.style.animation = 'musicPulse 2s ease-in-out infinite';
    } else {
        icon.textContent = '🎵';
        musicToggle.style.background = 'linear-gradient(135deg, #8b8b8b, #a9a9a9)';
        musicToggle.style.animation = 'none';
    }
}

// Add first interaction listener to start music
function addFirstInteractionListener() {
    const startMusicOnInteraction = (event) => {
        if (!musicStarted) {
            loveMusic.play().then(() => {
                musicStarted = true;
                isMusicPlaying = true;
                updateMusicButton();
                start20SecondLoop();
                showMessage("🎵 Romantic music started! Enjoy the mood 💕");
            }).catch(error => {
                console.log('Music autoplay prevented:', error);
            });
            
            // Remove the listener after first interaction
            document.removeEventListener('click', startMusicOnInteraction);
            document.removeEventListener('touchstart', startMusicOnInteraction);
            document.removeEventListener('keydown', startMusicOnInteraction);
        }
    };
    
    // Add listeners for various interactions
    document.addEventListener('click', startMusicOnInteraction);
    document.addEventListener('touchstart', startMusicOnInteraction);
    document.addEventListener('keydown', startMusicOnInteraction);
}

// Start music on YES button click
function startLoveMusic() {
    if (!musicStarted) {
        loveMusic.play().then(() => {
            musicStarted = true;
            isMusicPlaying = true;
            updateMusicButton();
            start20SecondLoop();
        }).catch(error => {
            console.log('Music play failed:', error);
        });
    }
}

// Handle YES button click with envelope animation
function handleYesClick() {
    // Start love music
    startLoveMusic();
    
    // Create massive confetti effect
    createMassiveConfetti();
    
    // Create love image animations
    createLoveImageAnimation();
    
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

// Create massive confetti effect with flowers
function createMassiveConfetti() {
    const colors = ['#ff6b9d', '#ff8787', '#ffc0cb', '#ffb6c1', '#ff1493', '#e91e63'];
    const shapes = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞'];
    const flowers = ['🌹', '🌸', '🌺', '🌷', '🌻', '🌼', '💐', '🏵️'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            
            const random = Math.random();
            if (random < 0.3) {
                // 30% flowers
                confetti.className = 'confetti flower';
                confetti.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            } else if (random < 0.8) {
                // 50% hearts
                confetti.className = 'confetti heart';
                confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            } else {
                // 20% colored confetti
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

// Create extra confetti for envelope reveal with flowers
function createExtraConfetti() {
    const shapes = ['💕', '💖', '💗'];
    const flowers = ['🌹', '🌸', '🌺', '💐'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            
            if (Math.random() < 0.5) {
                confetti.className = 'confetti flower';
                confetti.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            } else {
                confetti.className = 'confetti heart';
                confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            }
            
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

// Create heart and flower explosion effect
function createHeartExplosion() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    const flowers = ['🌹', '🌸', '🌺', '🌷', '🌻', '🌼', '💐', '🏵️'];
    
    for (let i = 0; i < 30; i++) {
        const element = document.createElement('div');
        element.className = 'explosion-heart-effect';
        
        // Mix of hearts and flowers
        if (Math.random() < 0.5) {
            element.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        } else {
            element.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            element.classList.add('flower-explosion');
        }
        
        element.style.position = 'fixed';
        element.style.left = '50%';
        element.style.top = '50%';
        element.style.transform = 'translate(-50%, -50%)';
        element.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        element.style.zIndex = '1001';
        element.style.pointerEvents = 'none';
        
        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 300 + 200;
        
        document.body.appendChild(element);
        
        // Animate explosion
        let startTime = null;
        function animateExplosion(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / 1000;
            
            if (progress < 2) {
                const x = Math.cos(angle) * velocity * progress;
                const y = Math.sin(angle) * velocity * progress + (progress * progress * 100);
                const opacity = 1 - (progress / 2);
                
                element.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${progress * 360}deg)`;
                element.style.opacity = opacity;
                
                requestAnimationFrame(animateExplosion);
            } else {
                element.remove();
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

// Create celebration confetti with flowers
function createCelebrationConfetti() {
    const colors = ['#ff6b9d', '#ff8787', '#ffc0cb', '#ff1493'];
    const shapes = ['❤️', '💕', '💖', '💗'];
    const flowers = ['🌹', '🌸', '🌺', '🌷', '🌻', '💐'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        
        const random = Math.random();
        if (random < 0.4) {
            // 40% flowers
            confetti.className = 'confetti flower';
            confetti.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        } else {
            // 60% hearts
            confetti.className = 'confetti heart';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        }
        
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Create floating hearts and flowers from bottom
function createFloatingHeartFromBottom() {
    const hearts = ['❤️', '💕', '💖', '💗'];
    const flowers = ['🌹', '🌸', '🌺', '🌷', '🌻', '🌼'];
    
    const element = document.createElement('div');
    
    // Randomly choose between heart and flower
    if (Math.random() < 0.5) {
        element.className = 'floating-heart-bottom';
        element.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    } else {
        element.className = 'floating-flower-bottom';
        element.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    }
    
    element.style.position = 'fixed';
    element.style.bottom = '-50px';
    element.style.left = Math.random() * 100 + '%';
    element.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    element.style.zIndex = '1000';
    element.style.pointerEvents = 'none';
    element.style.animation = 'floatUpFromBottom 4s ease-out forwards';
    
    document.body.appendChild(element);
    
    setTimeout(() => {
        element.remove();
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
        // First click - show "Think again" message, crying image, and enable escaping
        showMessage("Think again 😌");
        showCryingImage();
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

// Add decorative images throughout the website
function addDecorativeImages() {
    const decorativeImages = [
        'assets/download (1).jpg',
        'assets/download (2).jpg', 
        'assets/download.jpg',
        'assets/images.jpg'
    ];
    
    // Add floating decorative images
    for (let i = 0; i < 6; i++) {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'decorative-image';
        
        const img = document.createElement('img');
        img.src = decorativeImages[i % decorativeImages.length];
        img.className = 'decorative-img';
        img.alt = 'Love Decoration';
        
        // Random positioning and animation
        imgContainer.style.left = Math.random() * 90 + 5 + '%';
        imgContainer.style.top = Math.random() * 90 + 5 + '%';
        imgContainer.style.animationDelay = Math.random() * 5 + 's';
        imgContainer.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        imgContainer.appendChild(img);
        document.body.appendChild(imgContainer);
    }
    
    // Add corner decorative images
    addCornerImages();
}

// Add decorative images to corners
function addCornerImages() {
    const corners = [
        { position: 'top-left', x: '5%', y: '5%', rotation: '-15deg' },
        { position: 'top-right', x: '85%', y: '5%', rotation: '15deg' },
        { position: 'bottom-left', x: '5%', y: '85%', rotation: '-25deg' },
        { position: 'bottom-right', x: '85%', y: '85%', rotation: '25deg' }
    ];
    
    corners.forEach((corner, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'corner-image';
        imgContainer.style.position = 'fixed';
        imgContainer.style.left = corner.x;
        imgContainer.style.top = corner.y;
        imgContainer.style.transform = `rotate(${corner.rotation})`;
        imgContainer.style.zIndex = '5';
        
        const img = document.createElement('img');
        img.src = `assets/download (${(index % 3) + 1}).jpg`;
        if (index === 3) img.src = 'assets/images.jpg';
        img.className = 'corner-img';
        img.alt = 'Corner Decoration';
        
        imgContainer.appendChild(img);
        document.body.appendChild(imgContainer);
    });
}

// Show crying image when NO is clicked
function showCryingImage() {
    const cryingImg = document.createElement('div');
    cryingImg.className = 'crying-image-overlay';
    cryingImg.innerHTML = `
        <div class="crying-image-container">
            <img src="assets/CRy.jpg" alt="Crying" class="crying-img">
            <div class="crying-text">Please don't say no! 😢</div>
        </div>
    `;
    
    document.body.appendChild(cryingImg);
    
    // Remove after 3 seconds
    setTimeout(() => {
        cryingImg.remove();
    }, 3000);
}

// Create love image animations
function createLoveImageAnimation() {
    const loveImages = [
        'assets/download (1).jpg',
        'assets/download (2).jpg', 
        'assets/download.jpg',
        'assets/images.jpg'
    ];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'love-image-animation';
            
            const img = document.createElement('img');
            img.src = loveImages[i % loveImages.length];
            img.className = 'love-img';
            img.alt = 'Love';
            
            // Random position and animation
            imgContainer.style.left = Math.random() * 80 + 10 + '%';
            imgContainer.style.top = Math.random() * 80 + 10 + '%';
            imgContainer.style.animationDelay = Math.random() * 2 + 's';
            
            imgContainer.appendChild(img);
            document.body.appendChild(imgContainer);
            
            // Remove after animation
            setTimeout(() => {
                imgContainer.remove();
            }, 4000);
        }, i * 500);
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
    
    .flower-explosion {
        animation: explodeOutFlower 2.5s ease-out forwards;
    }
    
    @keyframes explodeOutFlower {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(2) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(4) rotate(720deg);
            opacity: 0;
        }
    }
    
    .confetti.flower {
        animation: fallFlower 3s ease-out forwards;
    }
    
    @keyframes fallFlower {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    .floating-flower-bottom {
        animation: floatUpFlower 4s ease-out forwards;
    }
    
    @keyframes floatUpFlower {
        0% {
            transform: translateY(0) rotate(0deg) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 0.9;
        }
        50% {
            transform: translateY(-60vh) rotate(180deg) scale(1.2);
            opacity: 1;
        }
        90% {
            opacity: 0.9;
        }
        100% {
            transform: translateY(-120vh) rotate(540deg) scale(0.8);
            opacity: 0;
        }
    }
    
    /* Crying Image Styles */
    .crying-image-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1002;
        animation: fadeInOverlay 0.5s ease-out;
    }
    
    @keyframes fadeInOverlay {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    .crying-image-container {
        text-align: center;
        animation: cryingShake 0.5s ease-in-out infinite;
    }
    
    @keyframes cryingShake {
        0%, 100% {
            transform: translateX(0) scale(1);
        }
        25% {
            transform: translateX(-10px) scale(1.05);
        }
        75% {
            transform: translateX(10px) scale(0.95);
        }
    }
    
    .crying-img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        border: 5px solid #ff6b9d;
        box-shadow: 0 0 30px rgba(255, 107, 157, 0.5);
        object-fit: cover;
    }
    
    .crying-text {
        margin-top: 1rem;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    /* Love Image Animation Styles */
    .love-image-animation {
        position: fixed;
        z-index: 998;
        pointer-events: none;
        animation: loveImageFloat 4s ease-out forwards;
    }
    
    @keyframes loveImageFloat {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        20% {
            transform: scale(1.2) rotate(90deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        80% {
            transform: scale(0.8) rotate(270deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    .love-img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 3px solid #ff6b9d;
        box-shadow: 0 0 20px rgba(255, 107, 157, 0.7);
        object-fit: cover;
    }
    
    /* Decorative Images Styles */
    .decorative-image {
        position: fixed;
        z-index: 2;
        pointer-events: none;
        animation: decorativeFloat 8s ease-in-out infinite;
        opacity: 0.6;
        transition: all 0.3s ease;
    }
    
    .decorative-image:hover {
        opacity: 0.9;
        transform: scale(1.1);
    }
    
    @keyframes decorativeFloat {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        25% {
            transform: translateY(-20px) rotate(5deg);
        }
        50% {
            transform: translateY(-10px) rotate(-3deg);
        }
        75% {
            transform: translateY(-30px) rotate(3deg);
        }
    }
    
    .decorative-img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid rgba(255, 107, 157, 0.5);
        box-shadow: 0 0 15px rgba(255, 107, 157, 0.3);
        object-fit: cover;
        transition: all 0.3s ease;
    }
    
    .corner-image {
        animation: cornerPulse 3s ease-in-out infinite;
        opacity: 0.7;
        transition: all 0.3s ease;
    }
    
    .corner-image:hover {
        opacity: 1;
        transform: scale(1.05) rotate(var(--rotation));
    }
    
    @keyframes cornerPulse {
        0%, 100% {
            transform: scale(1) rotate(var(--rotation));
            opacity: 0.7;
        }
        50% {
            transform: scale(1.1) rotate(var(--rotation));
            opacity: 0.9;
        }
    }
    
    .corner-img {
        width: 80px;
        height: 80px;
        border-radius: 15px;
        border: 3px solid rgba(255, 107, 157, 0.6);
        box-shadow: 0 0 25px rgba(255, 107, 157, 0.4);
        object-fit: cover;
        transition: all 0.3s ease;
    }
    
    /* Responsive decorative images */
    @media (max-width: 768px) {
        .decorative-img {
            width: 40px;
            height: 40px;
        }
        
        .corner-img {
            width: 60px;
            height: 60px;
        }
    }
    
    @media (max-width: 480px) {
        .decorative-img {
            width: 30px;
            height: 30px;
        }
        
        .corner-img {
            width: 50px;
            height: 50px;
        }
    }
    
    /* Music Controls Styles */
    .music-controls {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    }
    
    .music-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #8b8b8b, #a9a9a9);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .music-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
    
    .music-btn:active {
        transform: scale(0.95);
    }
    
    .music-icon {
        font-size: 1.8rem;
        animation: none;
    }
    
    @keyframes musicPulse {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 4px 15px rgba(255, 107, 157, 0.4);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 6px 25px rgba(255, 107, 157, 0.6);
        }
    }
    
    /* Responsive music controls */
    @media (max-width: 768px) {
        .music-btn {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
        }
        
        .music-icon {
            font-size: 1.5rem;
        }
    }
    
    @media (max-width: 480px) {
        .music-btn {
            width: 45px;
            height: 45px;
            font-size: 1rem;
        }
        
        .music-icon {
            font-size: 1.3rem;
        }
        
        .music-controls {
            bottom: 15px;
            right: 15px;
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
