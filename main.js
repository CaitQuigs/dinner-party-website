var creditsModal = document.getElementById("credits-modal");

var creditsOpen = document.getElementById("credits-open");

var creditsClose = document.getElementById("credits-close");

// When the user clicks on the link, open the modal
creditsOpen.onclick = function() {
  creditsModal.style.display = "block";
}

// When the user clicks on the close button, close the modal
creditsClose.onclick = function() {
  creditsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == creditsModal) {
        creditsModal.style.display = "none";
    }
}