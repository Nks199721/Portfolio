
document.getElementById("open-resume-link").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from navigating immediately
    
     var confirmation = confirm("Are you sure you want to open the resume?");
     if (confirmation) {
        window.location.href = this.getAttribute("href"); // Navigate to the resume link if "Yes" is selected
     }
})