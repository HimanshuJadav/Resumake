// Employment
function addEmployment() {
  const employmentContainer = document.querySelector(".section__list");

  employmentCounter += 1;
  const employmentHTML = new DOMParser().parseFromString(
    `<div class="section__list-item">
    <div class="one-line">
      <div class="name" id="employment-job-title"></div>
      <span class="separator"></span>
      <div class="name" id="employer-name"></div>
    </div>
    <div class="one-line">
      <div id="employment-city"></div>
      ,&nbsp;
      <div id="employment-country"></div>
      <span class="separator"></span>
      <div id="employment-start-date"></div>
      &nbsp;-&nbsp;
      <div id="employment-end-date"></div>
    </div>
    <div id="employment-history"></div>
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
    <div class="one-line">
      <div class="name" id="education-degree"></div>
      <span class="separator"></span>
      <div class="name" id="education-school"></div>
    </div>
    <div class="one-line">
      <div id="education-city"></div>
      ,&nbsp;
      <div id="education-country"></div>
      <span class="separator"></span>
      <div id="education-start-date"></div>
      &nbsp;-&nbsp;
      <div id="education-end-date"></div>
    </div>
    <div id="education-history"></div>
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
      <div class="left"><div class="name" id="skill-label">Javascript</div></div>
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

function setSkillRating(index, value) {
  for (let counter = 1; counter <= value; counter++) {
    var skillCheckbox = document.querySelector(
      "#checkbox-" + counter + "-skill-" + (index + 1)
    );
    skillCheckbox.checked = true;
  }
}

// Links
function addLink() {
  const linkContainer = document.querySelector(".links");

  linkCounter += 1;
  const linkHTML = new DOMParser().parseFromString(
    `<div class="section__list-item">
              <div class="one-line">
                <div class="name" id="link-label"></div>:&nbsp;
                <a class="name" id="link-url"></a>
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

function getMargins() {
  return 1;
}

function printableMedia(totalPages, startingPt) {
  return [];
}
