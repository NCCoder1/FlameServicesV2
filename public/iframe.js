if ( window.location !== window.parent.location ) {
    showiframe()
  } else {
    // The page is not in an iframe
  }

  // Show the modal if the site is being iframed
  function showiframe() {
    var modal = document.getElementById("iframe-modal");
    modal.style.display = "flex";
  }

  function hideModal() {
    var modal = document.getElementById("iframe-modal");
    modal.style.display = "none";
  }