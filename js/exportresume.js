var employmentCounter = 0;
var educationCounter = 0;
var skillCounter = 0;
var linkCounter = 0;
const ElementTypeEnum = {
  EMPLOYMENT: "employment",
  LINKS: "links",
  EDUCATION: "education",
  SKILLS: "skills",
};

document.addEventListener("DOMContentLoaded", function () {
  loadResume();
  setTimeout(exportResume, 500);
});

function exportResume() {
  var element = document.querySelector(".container");
  const margin = getMargins();
  var opt = {
    margin: margin,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, scrollY: 0 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    pagebreak: { mode: ["css"] },
  };
  var startingPt = 0;

  html2pdf()
    .set(opt)
    .from(element)
    .toImg()
    .get("img")
    .then(function (img) {
      const remaining = img.height % 2371;
      const ptPerIn = 202.65;
      startingPt = remaining / ptPerIn;
    })
    .toPdf()
    .get("pdf")
    .then(function (pdf) {
      var totalPages = pdf.internal.getNumberOfPages();
      const printableMediaInfo = printableMedia(totalPages, startingPt);
      printableMediaInfo.forEach((element) => {
        pdf.setPage(element.page);
        pdf.addImage(
          element.image,
          "PNG",
          element.printRect.x,
          element.printRect.y,
          element.printRect.width,
          element.printRect.height
        );
      });
    })
    .save()
    .catch((error) => {
      console.error(error);
    });
}

function loadResume() {
  // Load Resume From Local Storage
  const resumeJSON = localStorage.resume;
  var resume;
  if (resumeJSON != null) {
    resume = JSON.parse(resumeJSON);
    setDetails(resume[0]);
    setDetails(resume[1]);
    setLoopedRecords(resume[2], ElementTypeEnum.EMPLOYMENT);
    setLoopedRecords(resume[3], ElementTypeEnum.EDUCATION);
    setLoopedRecords(resume[4], ElementTypeEnum.SKILLS);
    setLoopedRecords(resume[5], ElementTypeEnum.LINKS);
  }
}

function setLoopedRecords(records, type) {
  for (let index = 0; index < records.children.length; index++) {
    const element = records.children[index];
    switch (type) {
      case ElementTypeEnum.EMPLOYMENT:
        addEmployment();
        break;
      case ElementTypeEnum.LINKS:
        addLink();
        break;
      case ElementTypeEnum.EDUCATION:
        addEducation();
        break;
      case ElementTypeEnum.SKILLS:
        addSkill();
        break;
      default:
        console.error("Unknown type: " + type);
    }

    const keys = Object.keys(element);
    keys.forEach((key) => {
      const value = element[key];
      const keyParts = key.split("-");
      if (isNaN(keyParts[keyParts.length - 1])) {
        key = key + "-" + (index + 1);
      } else {
        keyParts[keyParts.length - 1] = index + 1;
        key = keyParts.join("-");
      }
      const HTMLElement = document.querySelector("#" + key);
      if (HTMLElement != null) {
        HTMLElement.innerHTML = value;
        if (key.startsWith("link-url")) {
          HTMLElement.href = value;
        }
        if (value == "") {
          HTMLElement.remove();
        } else {
          // Remove element if it has br only - CKEditor
          var arrChildren = HTMLElement.children;
          if (arrChildren.length > 0) {
            arrChildren = arrChildren[0].children;
            if (arrChildren.length == 1) {
              if (arrChildren[0].nodeName.toLowerCase() == "br") {
                HTMLElement.remove();
              }
            }
          }
        }
      }
      if (key.startsWith("rating")) {
        setSkillRating(index, value);
      }
    });
  }
}

function setDetails(details) {
  const keys = Object.keys(details.section);
  keys.forEach((key) => {
    const value = details.section[key];
    const HTMLElement = document.querySelector("." + key);
    if (HTMLElement != null) {
      HTMLElement.innerHTML = value;
    }
  });
}
