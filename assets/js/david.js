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

    // JavaScript function to handle the download
    document.getElementById('downloadCVBtn').onclick = function() {
        // Specify the URL of the file to download
        var fileUrl = 'David_Updated_Resume.pdf';
        
        // Create a temporary anchor element
        var a = document.createElement('a');
        a.href = fileUrl;

        // Set the file name for the download
        a.download = 'David_Mwape_Resume.pdf';

        // Append the anchor element to the document body
        document.body.appendChild(a);

        // Trigger a click event to initiate the download
        a.click();

        // Remove the anchor element from the document body
        document.body.removeChild(a);
    };

