// Function to check if the site is being iframed
function isIframed() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  
  // Show the modal if the site is being iframed
  if (isIframed()) {
    var modal = document.getElementById("iframe-modal");
    modal.style.display = "flex";
  
    var redirectButton = document.getElementById("redirect-button");
    redirectButton.addEventListener("click", function() {
      modal.style.display = "none";
      modal.style.opacity = 0;
      modal.style.zIndex = -999;
    });
  }
  
  function hideModal() {
    var modal = document.getElementById("iframe-modal");
    modal.style.display = "none";
  }
  