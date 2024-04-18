function viewTemplate(template) {
  location.href = "viewtemplate.html?template=" + template;
}
function useTemplate(template) {
  location.href = "editresume.html?template=" + template;
}
document.getElementById("viewTemplate1").onclick = function () {
  viewTemplate("template1");
};
document.getElementById("useTemplate1").onclick = function () {
  useTemplate("template1");
};
document.getElementById("viewTemplate2").onclick = function () {
  viewTemplate("template2");
};
document.getElementById("useTemplate2").onclick = function () {
  useTemplate("template2");
};
document.getElementById("viewTemplate3").onclick = function () {
  viewTemplate("template3");
};
document.getElementById("useTemplate3").onclick = function () {
  useTemplate("template3");
};
document.getElementById("viewTemplate4").onclick = function () {
  viewTemplate("template4");
};
document.getElementById("useTemplate4").onclick = function () {
  useTemplate("template4");
};

var params = new URLSearchParams(document.location.search);

function getParam(param) {
  alert("Hi");
  return params.get(param);
}
