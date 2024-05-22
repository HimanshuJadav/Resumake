// function viewTemplate(template) {
//   location.href = "viewtemplate.html?template=" + template;
// }
// function useTemplate(template) {
//   location.href = "editresume.html?template=" + template;
// }

// const viewButtons = document.querySelectorAll(".viewTemplate");
// viewButtons.forEach(function (viewButton) {
//   viewButton.addEventListener("click", function () {
//     const template = viewButton.getAttribute("data-template");
//     viewTemplate(template);
//   });
// });
// // Get references to all elements with class "useTemplate"
// const useButtons = document.querySelectorAll(".useTemplate");
// useButtons.forEach(function (useButton) {
//   useButton.addEventListener("click", function () {
//     const template = useButton.getAttribute("data-template");
//     useTemplate(template);
//   });
// });

var params = new URLSearchParams(document.location.search);

function getParam(param) {
  return params.get(param);
}
var paramTemplate = getParam("template");
var templateH1 = document.getElementById("template");
if (templateH1) {
  templateH1.textContent = paramTemplate;
} else {
  console.log("Template H1 is not available.");
}
