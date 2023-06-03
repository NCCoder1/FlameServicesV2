var modal = document.getElementById("iframe-modal");
if ( window.location !== window.parent.location ) {
    showiframe()
  } else {
    modal.style.display = "none";
  }

  // Show the modal if the site is being iframed
  function showiframe() {
    modal.style.display = "flex";
  }

  function hideModal() {
    modal.style.display = "none";
  }