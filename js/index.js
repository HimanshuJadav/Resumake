var params = new URLSearchParams(document.location.search);

function getParam(param) {
  return params.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  var paramTemplate = getParam("template");
  var templateH1 = document.querySelector("#template");
  if (templateH1) {
    templateH1.textContent = paramTemplate;
  } else {
    console.log("Template H1 is not available.");
  }
});
