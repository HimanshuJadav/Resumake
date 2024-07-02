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
  exportResume();
});

function exportResume() {
  const { jsPDF } = window.jspdf;

  let doc = new jsPDF("p", "pt", "a4");
  let pdfjs = document.querySelector(".container");

  doc.html(pdfjs, {
    callback: function (doc) {
      doc.save("resume.pdf");
    },
  });
}

function loadResume() {
  // Load Resume From Local Storage
  const resumeJSON = localStorage.resume;
  var resume;
  if (resumeJSON != null) {
    resume = JSON.parse(resumeJSON);
    setDetails(resume[1]);
    setDetails(resume[2]);
    setLoopedRecords(resume[3], ElementTypeEnum.EMPLOYMENT);
    setLoopedRecords(resume[4], ElementTypeEnum.EDUCATION);
    setLoopedRecords(resume[5], ElementTypeEnum.SKILLS);
    setLoopedRecords(resume[6], ElementTypeEnum.LINKS);
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
      }
      if (key.startsWith("rating")) {
        for (let counter = 1; counter <= value; counter++) {
          var skillCheckbox = document.querySelector(
            "#checkbox-" + counter + "-skill-" + (index + 1)
          );
          skillCheckbox.checked = true;
        }
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

// Employment
function addEmployment() {
  const employmentContainer = document.querySelector(".section__list");

  employmentCounter += 1;
  const employmentHTML = new DOMParser().parseFromString(
    `<div class="section__list-item">
      <div class="left">
        <div class="name" id="employer-name">KlowdBox</div>
        <div class="one-line"><div id="employment-city"></div>,&nbsp;
        <div id="employment-country"></div></div>
        <div class="one-line">
        <div id="employment-start-date"></div>&nbsp;-&nbsp;
        <div id="employment-end-date"></div>
        </div>
      </div>
      <div class="right">
        <div class="name" id="employment-job-title"></div>
        <div id="employment-history"></div>
      </div>
    </div>`,
    "text/html"
  );
  var elementContainer = employmentHTML.querySelector(".section__list-item");
  elementContainer.id = "employment-item-" + employmentCounter;

  const employment = employmentHTML.documentElement.childNodes[1].innerHTML;

  employmentContainer.insertAdjacentHTML("beforeend", employment);

  var employmentJobTitle = document.querySelector("#employment-job-title");
  employmentJobTitle.id = "employment-job-title-" + employmentCounter;

  var employerName = document.querySelector("#employer-name");
  employerName.id = "employer-name-" + employmentCounter;

  var employmentStartDate = document.querySelector("#employment-start-date");
  employmentStartDate.id = "employment-start-date-" + employmentCounter;

  var employmentEndDate = document.querySelector("#employment-end-date");
  employmentEndDate.id = "employment-end-date-" + employmentCounter;

  var employmentCountry = document.querySelector("#employment-country");
  employmentCountry.id = "employment-country-" + employmentCounter;

  var employmentCity = document.querySelector("#employment-city");
  employmentCity.id = "employment-city-" + employmentCounter;

  var employmentHistory = document.querySelector("#employment-history");
  employmentHistory.id = "employment-history-" + employmentCounter;
}

// Education
function addEducation() {
  const educationContainer = document.querySelector(".education-container");

  educationCounter += 1;
  const educationHTML = new DOMParser().parseFromString(
    `<div class="section__list-item">
          <div class="left">
            <div class="name" id="education-school">KlowdBox</div>
            <div class="one-line">
              <div id="education-city"></div>,&nbsp;
              <div id="education-country"></div>
            </div>
            <div class="one-line">
              <div id="education-start-date"></div>&nbsp;-&nbsp;
              <div id="education-end-date"></div>
            </div>
          </div>
          <div class="right">
            <div class="name" id="education-degree"></div>
            <div id="education-history"></div>
          </div>
        </div>`,
    "text/html"
  );
  var elementContainer = educationHTML.querySelector(".section__list-item");
  elementContainer.id = "education-item-" + educationCounter;

  const education = educationHTML.documentElement.childNodes[1].innerHTML;

  educationContainer.insertAdjacentHTML("beforeend", education);

  var educationJobTitle = document.querySelector("#education-degree");
  educationJobTitle.id = "education-degree-" + educationCounter;

  var employerName = document.querySelector("#education-school");
  employerName.id = "education-school-" + educationCounter;

  var educationStartDate = document.querySelector("#education-start-date");
  educationStartDate.id = "education-start-date-" + educationCounter;

  var educationEndDate = document.querySelector("#education-end-date");
  educationEndDate.id = "education-end-date-" + educationCounter;

  var educationCountry = document.querySelector("#education-country");
  educationCountry.id = "education-country-" + educationCounter;

  var educationCity = document.querySelector("#education-city");
  educationCity.id = "education-city-" + educationCounter;

  var educationHistory = document.querySelector("#education-history");
  educationHistory.id = "education-history-" + educationCounter;
}

// Skills
function addSkill() {
  const skillContainer = document.querySelector(".skills");

  skillCounter += 1;
  const skillHTML = new DOMParser().parseFromString(
    `<div class="skills__item">
      <div class="left"><div class="skill-label name" id="skill-label">Javascript</div></div>
      <div class="right">
            <input id="skill-checkbox-1" type="checkbox" checked />
            <label for="skill-checkbox-1" id="skill-checkbox-label-1"></label>
            <input id="skill-checkbox-2" type="checkbox" checked />
            <label for="skill-checkbox-2" id="skill-checkbox-label-2"></label>
            <input id="skill-checkbox-3" type="checkbox" />
            <label for="skill-checkbox-3" id="skill-checkbox-label-3"></label>
            <input id="skill-checkbox-4" type="checkbox" />
            <label for="skill-checkbox-4" id="skill-checkbox-label-4"></label>
            <input id="skill-checkbox-5" type="checkbox" />
            <label for="skill-checkbox-5" id="skill-checkbox-label-5"></label>
        </div>
    </div>`,
    "text/html"
  );
  var elementContainer = skillHTML.querySelector(".skills__item");
  elementContainer.id = "skill-item-" + skillCounter;

  const skill = skillHTML.documentElement.childNodes[1].innerHTML;

  skillContainer.insertAdjacentHTML("beforeend", skill);

  var skillLabel = document.querySelector("#skill-label");
  skillLabel.id = "skill-label-" + skillCounter;

  for (let index = 1; index <= 5; index++) {
    var skillCheckbox = document.querySelector("#skill-checkbox-" + index);
    skillCheckbox.id = "checkbox-" + index + "-skill-" + skillCounter;
    skillCheckbox.checked = false;

    var skillCheckboxLabel = document.querySelector(
      "#skill-checkbox-label-" + index
    );
    skillCheckboxLabel.id =
      "checkbox-label-" + index + "-skill-" + skillCounter;
    skillCheckboxLabel.for =
      "checkbox-label-" + index + "-skill-" + skillCounter;
  }
}

// Links
function addLink() {
  const linkContainer = document.querySelector(".links");

  linkCounter += 1;
  const linkHTML = new DOMParser().parseFromString(
    `<div class="section__list-item">
              <div class="left">
                <div class="link-label name" id="link-label">KlowdBox</div>
              </div>
              <div class="right">
                <a class="link-url name" id="link-url">Fr developer</a>
              </div>
            </div>`,
    "text/html"
  );
  var elementContainer = linkHTML.querySelector(".section__list-item");
  elementContainer.id = "link-item-" + linkCounter;

  const link = linkHTML.documentElement.childNodes[1].innerHTML;

  linkContainer.insertAdjacentHTML("beforeend", link);

  var linkJobTitle = document.querySelector("#link-label");
  linkJobTitle.id = "link-label-" + linkCounter;

  var linkURL = document.querySelector("#link-url");
  linkURL.id = "link-url-" + linkCounter;
}
