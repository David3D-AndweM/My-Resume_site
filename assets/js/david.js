// JavaScript to handle navbar toggle
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('navList');

    // Show/hide nav on hamburger click
    hamburger.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Show nav on hover
    document.addEventListener('mouseover', function(event) {
        if (event.target.closest('.navbar')) {
            navList.classList.add('active');
        }
    });

    // Hide nav when not hovering
    document.addEventListener('mouseout', function(event) {
        if (!event.target.closest('.navbar')) {
            navList.classList.remove('active');
        }
    });
});

 

