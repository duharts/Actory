document.addEventListener('DOMContentLoaded', function () {
    // Get lottie-player element if it exists
    const lottiePlayer = document.querySelector('lottie-player');
    if (lottiePlayer) {
        // Animation is loaded by the web component automatically
        lottiePlayer.addEventListener('load', () => {
            console.log('Lottie animation loaded successfully');
        });
        
        lottiePlayer.addEventListener('error', () => {
            console.log('Error loading Lottie animation');
        });
    }
  // Ensure Lottie is available
  if (typeof lottie === 'undefined') {
    console.error('⚠️ Lottie not loaded. Make sure to include lottie.min.js via CDN before this script.');
    return;
  }

  
    console.log('✅ Lottie animation loaded.');
  } else {
    console.warn('⚠️ #lottie-container not found.');
  }
});


