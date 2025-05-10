# Navigation Bar Fade Effect - Manual Fix Guide

If the automatic methods aren't working, follow these step-by-step instructions to manually implement the navigation bar fade effect.

## Step 1: Add CSS to your styles.css file
```css
/* Navigation Bar Fade Effect */
.header {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 9999 !important;
    background-color: white !important;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
    transition: transform 0.3s ease !important;
}

.header.nav-hidden {
    transform: translateY(-100%) !important;
}

body {
    padding-top: 80px !important; /* Adjust based on your header height */
}
```

## Step 2: Add JavaScript to your main.js file
```javascript
// Navigation Bar Fade Effect
document.addEventListener('DOMContentLoaded', function() {
    console.log('Navbar fade script initialized');
    
    // Get the header element
    const header = document.querySelector('.header');
    if (!header) {
        console.error('Header element not found!');
        return;
    }
    
    // Variables to track scrolling
    let lastScrollY = window.scrollY;
    
    // Function to update header visibility
    function updateHeaderVisibility() {
        const currentScrollY = window.scrollY;
        
        // Show header when at the top
        if (currentScrollY < 50) {
            header.classList.remove('nav-hidden');
        } 
        // Hide when scrolling down, show when scrolling up
        else {
            if (currentScrollY > lastScrollY) {
                // Scrolling DOWN - hide header
                header.classList.add('nav-hidden');
            } else {
                // Scrolling UP - show header
                header.classList.remove('nav-hidden');
            }
        }
        
        // Update last scroll position
        lastScrollY = currentScrollY;
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        window.requestAnimationFrame(updateHeaderVisibility);
    });
    
    // Initial check
    updateHeaderVisibility();
});
```

## Step 3: Ensure JavaScript is properly linked
Make sure you have this line before the closing </body> tag in your HTML:
```html
<script src="js/main.js"></script>
```

## Step 4: Test in different browsers
The effect should work in modern browsers like Chrome, Firefox, Safari, and Edge.

## Troubleshooting
- If the header doesn't hide when scrolling down, check browser console for errors
- If the header position looks off, adjust the body padding-top value
- If transitions aren't smooth, ensure no other CSS is conflicting with the transition property
