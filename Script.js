document.getElementById("open-resume-link").addEventListener("click", function (event) {
    event.preventDefault();
    var confirmation = confirm("Are you sure you want to open the resume?");
    if (confirmation) {
        window.open(this.getAttribute("href"), "_blank");
    }
  });