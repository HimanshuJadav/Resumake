var params = new URLSearchParams(document.location.search);

function getParam(param) {
  return params.get(param);
}

function documentContentLoaded() {
  var paramTemplate = getParam("template");
  var templateH1 = document.querySelector("#template");
  if (templateH1) {
    templateH1.textContent = paramTemplate;
  } else {
    console.log("Template H1 is not available.");
  }

  const bgImages = document.querySelectorAll(".scaled-bg");
  let currentImageIndex = 0;
  let isAdding = true;
  const maxActive = bgImages.length;

  function rotateBackground() {
    if (isAdding) {
      bgImages[currentImageIndex].classList.add("active");
      currentImageIndex++;

      if (currentImageIndex === maxActive) {
        isAdding = false;
        currentImageIndex--;
      }
    } else {
      bgImages[currentImageIndex].classList.remove("active");
      currentImageIndex--;

      if (currentImageIndex < 0) {
        isAdding = true;
        currentImageIndex = 0;
      }
    }
  }

  // Start the rotation
  if (maxActive > 0) {
    setInterval(rotateBackground, 1000);
  }
}

// Run the initialization function immediately if the DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", documentContentLoaded);
} else {
  documentContentLoaded();
}

function selectTemplate() {
  document.querySelector("#templates").scrollIntoView({
    behavior: "smooth",
  });
}
