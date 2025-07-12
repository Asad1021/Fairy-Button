document.querySelector('.cool-btn').addEventListener('click', function(e) {
  // Create multiple stars for burst effect
  for (let i = 0; i < 12; i++) {
    createStar(e, this);
  }
});



function createStar(e, button) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  // Random direction and distance for each star
  const angle = (Math.PI * 2 * Math.random());
  const distance = 60 + Math.random() * 80; // Random distance 60-140px
  
  const x = Math.cos(angle) * distance + 'px';
  const y = Math.sin(angle) * distance + 'px';
  
  // Set CSS custom properties for animation
  star.style.setProperty('--x', x);
  star.style.setProperty('--y', y);
  
  // Position star at click location
  const rect = button.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;
  
  star.style.left = clickX + 'px';
  star.style.top = clickY + 'px';
  
  // Add random delay for staggered effect
  star.style.animationDelay = Math.random() * 100 + 'ms';
  
  button.appendChild(star);
  
  // Remove star after animation completes
  star.addEventListener('animationend', () => {
    star.remove();
  });
}


// Existing button click star burst code
document.querySelector('.cool-btn').addEventListener('click', function(e) {
  for (let i = 0; i < 12; i++) {
    createStar(e, this);
  }
});

function createStar(e, button) {
  const star = document.createElement('div');
  star.classList.add('star');
  
  const angle = (Math.PI * 2 * Math.random());
  const distance = 60 + Math.random() * 80;
  
  const x = Math.cos(angle) * distance + 'px';
  const y = Math.sin(angle) * distance + 'px';
  
  star.style.setProperty('--x', x);
  star.style.setProperty('--y', y);
  
  const rect = button.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;
  
  star.style.left = clickX + 'px';
  star.style.top = clickY + 'px';
  star.style.animationDelay = Math.random() * 100 + 'ms';
  
  button.appendChild(star);
  
  star.addEventListener('animationend', () => {
    star.remove();
  });
}

// NEW: Sparkle trail effect
document.addEventListener('mousemove', function(e) {
  const button = document.querySelector('.cool-btn');
  const rect = button.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  // Check if cursor is inside button bounds
  if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
    // Cursor is on button, don't create sparkles
    return;
  } else {
    // Cursor is outside button, create sparkles
    createSparkle(x, y);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('page-sparkle');
  sparkle.style.left = x + 'px';
  sparkle.style.top = y + 'px';
  
  // Add random delay for more natural effect
  sparkle.style.animationDelay = Math.random() * 100 + 'ms';
  
  document.body.appendChild(sparkle);

  sparkle.addEventListener('animationend', () => {
    sparkle.remove();
  });
}
