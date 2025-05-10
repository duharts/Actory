document.addEventListener('DOMContentLoaded', function () {
  // Ensure Lottie is available
  if (typeof lottie === 'undefined') {
    console.error('âš ï¸ Lottie not loaded. Make sure to include lottie.min.js via CDN before this script.');
    return;
  }

  const lottieContainer = document.getElementById('lottie-container');
  if (lottieContainer) {
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_rqcjx9kt.json' // working .json animation
    });
    console.log('âœ… Lottie animation loaded.');
  } else {
    console.warn('âš ï¸ #lottie-container not found.');
  }
});

