var employmentCounter = 0;
var educationCounter = 0;
var skillCounter = 0;
var linkCounter = 0;

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
    for (let index = 0; index < resume.length; index++) {
      const element = resume[index];
      const name = element.section.name;
      if (arrCustomSections.includes(name)) {
        switch (name) {
          case "hobbies":
            addHobbiesSection();
            break;
          case "internship-history":
            addInternshipsSection();
            break;
          default:
            break;
        }
      }
      if (arrMultipleItemHolder.includes(name)) {
        setLoopedRecords(element, getElementTypeFrom(name));
      } else {
        setDetails(element);
      }
    }
  }
}

function setLoopedRecords(records, type) {
  for (let index = 0; index < records.children.length; index++) {
    const element = records.children[index];
    switch (type) {
      case ElementTypeEnum.EMPLOYMENT:
        addEmploymentTypeItem("employment");
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
      case ElementTypeEnum.INTERNSHIP:
        addEmploymentTypeItem("internship");
        break;
      case ElementTypeEnum.HOBBIES:
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
