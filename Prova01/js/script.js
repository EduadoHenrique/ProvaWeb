document.getElementById("fanForm").addEventListener("submit", function(event) {
  event.preventDefault();

  setTimeout(function() {
    document.getElementById("fanForm").reset();
    const message = document.getElementById("successMessage");
    message.style.display = "block";

    setTimeout(function() {
      message.style.display = "none";
    }, 3000);
  }, 500);
});
