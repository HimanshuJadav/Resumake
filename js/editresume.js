var employmentCounter = 0;
var educationCounter = 0;
var skillCounter = 0;
var linkCounter = 0;
var parser = new DOMParser();

var arrCollapsibles = document.getElementsByClassName("collapsible");
addCollapsibleAction(arrCollapsibles);
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getCurrentMonth(element) {
  var today = new Date();
  element.placeholder = month[today.getMonth()] + " " + today.getFullYear();
}

// Employment
function addEmploymentTypeItem(type, employmentDescription, shouldExpand) {
  const employmentHistory = document.querySelector("." + type + "-history");
  const employmentContainer = document.querySelector("." + type + "-container");
  const typeCounter = employmentContainer.children.length + 1;
  const typeHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="element-container">
    <div
      class="collapsible flex-center clear-bg"
      onclick="javascript:collapsibleClickEvent(this)"
    >
      <div class="collapsible-child flex-center full-width">
        <p class="subtitle pl-20" id="employment-title-label">Job Title</p>
        <img
          class="collapsed-arrow accessory-icon mr-10"
          src="./images/arrow-collapse.png"
          alt="collapsed"
        />
      </div>
      <img
        class="accessory-icon pl-10"
        id="delete-job"
        src="./images/delete.png"
        alt="delete"
      />
    </div>
    <div class="collapsible-content">
      <table>
        <tr>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">Job Title</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="employment-title-input"
                  id="employment-title-input"
                  onkeyup="javascript:updateTitleOnEnter(this)"
                  placeholder="Job title"
                  title="Enter job title"
                  required
                />
              </div>
            </div>
          </td>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">Employer</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="employer-name"
                  id="employer-name"
                  placeholder="Employer name"
                  title="Enter employer name"
                  required
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">Start Date</div>
              <div class="mt-10">
                <input
                  class="height-30 full-width"
                  type="month"
                  name="employment-start-date"
                  id="employment-start-date"
                  pattern="(January|Jan|February|Feb|March|Mar|April|Apr|May|June|Jun|July|Jul|August|Aug|September|Sep|October|Oct|November|Nov|December|Dec)(-| )\\d{4}"
                  required
                />
              </div>
            </div>
          </td>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">
                End Date
                <input
                  type="checkbox"
                  id="is-current-employment"
                  name="is-current-employment"
                  value="is-current-employment"
                  title="Is it your current job?"
                />
                <label
                  for="is-current-employment-label"
                  id="is-current-employment-label"
                >
                  I currently work here.</label
                >
              </div>
              <div class="mt-10">
                <input
                  class="height-30 full-width"
                  type="month"
                  name="employment-end-date"
                  id="employment-end-date"
                  pattern="(January|Jan|February|Feb|March|Mar|April|Apr|May|June|Jun|July|Jul|August|Aug|September|Sep|October|Oct|November|Nov|December|Dec)(-| )\\d{4}"
                  required
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">Country</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="employment-country"
                  id="employment-country"
                  placeholder="Employment country"
                  title="Enter employment country"
                  required
                />
              </div>
            </div>
          </td>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">City</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="employment-city"
                  id="employment-city"
                  placeholder="Employment city"
                  title="Enter employment city"
                  required
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="pt-20 pr-20" colspan="2">
            <div class="full-width pb-10">Description</div>
            <textarea
              id="employment-history-editor"
              placeholder="e.g. Collaborated with the product owner/client to architect change requests and defining project
          development and usability flows."
            ></textarea>
          </td>
        </tr>
      </table>
    </div>
  </div>`,
    "text/html"
  );
  var elementContainer = typeHTML.querySelector(".element-container");
  elementContainer.id = type + "-container-" + typeCounter;

  var historyEditor = typeHTML.querySelector("#employment-history-editor");
  historyEditor.id = type + "-history-editor-" + typeCounter;

  var jobTitle = typeHTML.querySelector("#employment-title-label");
  jobTitle.id = type + "-title-label" + "-" + typeCounter;

  var jobTitleInput = typeHTML.querySelector("#employment-title-input");
  jobTitleInput.dataset.type = type;
  jobTitleInput.dataset.index = typeCounter;
  jobTitleInput.id = type + "-title-input" + "-" + typeCounter;
  jobTitleInput.name = type + "-title-input" + "-" + typeCounter;

  const employment = typeHTML.documentElement.childNodes[1].innerHTML;

  employmentContainer.insertAdjacentHTML("beforeend", employment);

  createEditorFrom(historyEditor, employmentDescription);
  if (shouldExpand != false) {
    expandOrCollapse(employmentHistory.children[0], false);
  }

  var deleteJob = document.querySelector("#delete-job");
  deleteJob.dataset.type = type;
  deleteJob.dataset.index = typeCounter;
  deleteJob.id = "delete-" + type + "-" + typeCounter;
  deleteJob.addEventListener(`click`, deleteItem);

  var employerName = document.querySelector("#employer-name");
  employerName.name = type + "-employer-name-" + typeCounter;
  employerName.id = type + "-employer-name-" + typeCounter;

  var employmentStartDate = document.querySelector("#employment-start-date");
  employmentStartDate.name = type + "-start-date-" + typeCounter;
  employmentStartDate.id = type + "-start-date-" + typeCounter;
  employmentStartDate.parentElement.addEventListener(
    "load",
    getCurrentMonth(employmentStartDate)
  );

  var employmentEndDate = document.querySelector("#employment-end-date");
  employmentEndDate.name = type + "-end-date-" + typeCounter;
  employmentEndDate.id = type + "-end-date-" + typeCounter;
  employmentEndDate.parentElement.addEventListener(
    "load",
    getCurrentMonth(employmentEndDate)
  );

  var employmentIsCurrentJob = document.querySelector("#is-current-employment");
  employmentIsCurrentJob.id = "is-current-" + type + "-" + typeCounter;
  employmentIsCurrentJob.dataset.index = typeCounter;
  employmentIsCurrentJob.dataset.type = type;
  employmentIsCurrentJob.name = "is-current-" + type + "-" + typeCounter;
  employmentIsCurrentJob.value = "is-current-" + type + "-" + typeCounter;
  employmentIsCurrentJob.addEventListener(`change`, setEmploymentIsCurrentJob);

  var employmentIsCurrentJobLabel = document.querySelector(
    "#is-current-employment-label"
  );
  employmentIsCurrentJobLabel.for =
    "is-current-" + type + "-label-" + typeCounter;
  employmentIsCurrentJobLabel.id =
    "is-current-" + type + "-label-" + typeCounter;

  var employmentCountry = document.querySelector("#employment-country");
  employmentCountry.name = type + "-country-" + typeCounter;
  employmentCountry.id = type + "-country-" + typeCounter;

  var employmentCity = document.querySelector("#employment-city");
  employmentCity.name = type + "-city-" + typeCounter;
  employmentCity.id = type + "-city-" + typeCounter;

  const employmentItems = document.querySelectorAll(
    "." + type + "-container .element-container"
  );

  employmentItems.forEach(function (employmentItem) {
    employmentItem.addEventListener("dragstart", dragStart);
    employmentItem.addEventListener("dragenter", dragEnter);
    employmentItem.addEventListener("dragover", dragOver);
    employmentItem.addEventListener("dragleave", dragLeave);
    employmentItem.addEventListener("drop", drop);
    employmentItem.addEventListener("dragend", dragEnd);
  });
}

// Education
function addEducation(educationDescription, shouldExpand) {
  const type = "education";
  const educationHistory = document.querySelector("." + type + "-history");
  const educationContainer = document.querySelector("." + type + "-container");

  educationCounter += 1;
  const educationHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="element-container">
    <div
      class="collapsible flex-center clear-bg"
      onclick="javascript:collapsibleClickEvent(this)"
    >
      <div class="collapsible-child flex-center full-width">
        <p class="subtitle pl-20" id="education-title">Education Title</p>
        <img
          class="collapsed-arrow accessory-icon mr-10"
          src="./images/arrow-collapse.png"
          alt="collapsed"
        />
      </div>
      <img
        class="accessory-icon pl-10"
        id="delete-education"
        src="./images/delete.png"
        alt="delete"
      />
    </div>
    <div class="collapsible-content">
      <table>
        <tr>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">Degree</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="education-degree"
                  id="education-degree"
                  onkeyup="javascript:updateTitleOnEnter(this)"
                  placeholder="Education degree"
                  title="Enter education degree"
                  required
                />
              </div>
            </div>
          </td>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">School</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="education-school"
                  id="education-school"
                  placeholder="School name"
                  title="Enter school name"
                  required
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">Start Date</div>
              <div class="mt-10">
                <input
                  class="height-30 full-width"
                  type="month"
                  name="education-start-date"
                  id="education-start-date"
                  pattern="(January|Jan|February|Feb|March|Mar|April|Apr|May|June|Jun|July|Jul|August|Aug|September|Sep|October|Oct|November|Nov|December|Dec)(-| )\\d{4}"
                  required
                />
              </div>
            </div>
          </td>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">End Date</div>
              <div class="mt-10">
                <input
                  class="height-30 full-width"
                  type="month"
                  name="education-end-date"
                  id="education-end-date"
                  pattern="(January|Jan|February|Feb|March|Mar|April|Apr|May|June|Jun|July|Jul|August|Aug|September|Sep|October|Oct|November|Nov|December|Dec)(-| )\\d{4}"
                  required
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">Country</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="education-country"
                  id="education-country"
                  placeholder="Education country"
                  title="Enter education country"
                  required
                />
              </div>
            </div>
          </td>
          <td class="pt-20 pr-20">
            <div>
              <div class="full-width">City</div>
              <div class="mt-10">
                <input
                  class="full-width height-30"
                  type="text"
                  name="education-city"
                  id="education-city"
                  placeholder="Education city"
                  title="Enter education city"
                  required
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="pt-20 pr-20" colspan="2">
            <div class="full-width pb-10">Description</div>
            <textarea
              id="education-history-editor"
              placeholder="e.g. Graduated with High Honors."
            ></textarea>
          </td>
        </tr>
      </table>
    </div>
  </div>`,
    "text/html"
  );
  var elementContainer = educationHTML.querySelector(".element-container");
  elementContainer.id = type + "-container-" + educationCounter;

  var historyEditor = educationHTML.querySelector(
    "#" + type + "-history-editor"
  );
  historyEditor.id = type + "-history-editor-" + educationCounter;

  var educationTitle = educationHTML.querySelector("#" + type + "-title");
  educationTitle.id = type + "-title" + "-" + educationCounter;

  var jobTitleInput = educationHTML.querySelector("#" + type + "-degree");
  jobTitleInput.dataset.type = type;
  jobTitleInput.dataset.index = educationCounter;
  jobTitleInput.id = type + "-degree" + "-" + educationCounter;

  const education = educationHTML.documentElement.childNodes[1].innerHTML;

  educationContainer.insertAdjacentHTML("beforeend", education);

  createEditorFrom(historyEditor, educationDescription);
  if (shouldExpand != false) {
    expandOrCollapse(educationHistory.children[0], false);
  }

  var deleteEducation = document.querySelector("#delete-" + type);
  deleteEducation.dataset.index = educationCounter;
  deleteEducation.dataset.type = type;
  deleteEducation.id = "delete-" + type + "-" + educationCounter;
  deleteEducation.addEventListener(`click`, deleteItem);

  var educationSchool = document.querySelector("#education-school");
  educationSchool.name = "education-school-" + educationCounter;
  educationSchool.id = "education-school-" + educationCounter;

  var educationStartDate = document.querySelector("#education-start-date");
  educationStartDate.name = "education-start-date-" + educationCounter;
  educationStartDate.id = "education-start-date-" + educationCounter;
  educationStartDate.parentElement.addEventListener(
    "load",
    getCurrentMonth(educationStartDate)
  );

  var educationEndDate = document.querySelector("#education-end-date");
  educationEndDate.name = "education-end-date-" + educationCounter;
  educationEndDate.id = "education-end-date-" + educationCounter;
  educationEndDate.parentElement.addEventListener(
    "load",
    getCurrentMonth(educationEndDate)
  );

  var educationCountry = document.querySelector("#education-country");
  educationCountry.name = "education-country-" + educationCounter;
  educationCountry.id = "education-country-" + educationCounter;

  var educationCity = document.querySelector("#education-city");
  educationCity.name = "education-city-" + educationCounter;
  educationCity.id = "education-city-" + educationCounter;

  const educationItems = document.querySelectorAll(
    ".education-container .element-container"
  );

  educationItems.forEach(function (educationItem) {
    educationItem.addEventListener("dragstart", dragStart);
    educationItem.addEventListener("dragenter", dragEnter);
    educationItem.addEventListener("dragover", dragOver);
    educationItem.addEventListener("dragleave", dragLeave);
    educationItem.addEventListener("drop", drop);
    educationItem.addEventListener("dragend", dragEnd);
  });
}

// Skill
function addSkill(shouldExpand) {
  const type = "skill";
  const skillHistory = document.querySelector(".skills");
  const skillContainer = document.querySelector("." + type + "-container");

  skillCounter += 1;
  const skillHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="element-container">
      <div
        class="collapsible flex-center clear-bg"
        onclick="javascript:collapsibleClickEvent(this)"
      >
        <div class="collapsible-child flex-center full-width">
          <p class="subtitle pl-20" id="skill-title">Skill</p>
          <img
            class="collapsed-arrow accessory-icon mr-10"
            src="./images/arrow-collapse.png"
            alt="collapsed"
          />
        </div>
        <img
          class="accessory-icon pl-10"
          id="delete-skill"
          src="./images/delete.png"
          alt="delete"
        />
      </div>
      <div class="collapsible-content">
          <table>
            <tr>
              <td class="pt-20 pr-20">
                <div>
                  <div class="full-width">Skill</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="skill-label"
                      id="skill-label"
                      onkeyup="javascript:updateTitleOnEnter(this)"
                      placeholder="Skill" title="Enter skill"
                      required
                    />
                  </div>
                </div>
              </td>
              <td class="pt-20 pr-20">
                <div>
                  <div>Rating</div>
                    <div class="skill-rating height-30 pb-20">
                      <span onclick="updateRating(1, this)"
                            class="rating">•
                      </span>
                      <span onclick="updateRating(2, this)"
                            class="rating">•
                      </span>
                      <span onclick="updateRating(3, this)"
                            class="rating">•
                      </span>
                      <span onclick="updateRating(4, this)"
                            class="rating">•
                      </span>
                      <span onclick="updateRating(5, this)"
                            class="rating">•
                      </span>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
    </div>`,
    "text/html"
  );
  var elementContainer = skillHTML.querySelector(".element-container");
  elementContainer.id = type + "-container-" + skillCounter;

  var skillTitle = skillHTML.querySelector("#" + type + "-title");
  skillTitle.id = type + "-title" + "-" + skillCounter;

  var skillRating = skillHTML.querySelector(".skill-rating");
  skillRating.id = "skill-rating-" + skillCounter;

  var skillTitleInput = skillHTML.querySelector("#" + type + "-label");
  skillTitleInput.dataset.type = type;
  skillTitleInput.dataset.index = skillCounter;
  skillTitleInput.id = type + "-label" + "-" + skillCounter;

  const skill = skillHTML.documentElement.childNodes[1].innerHTML;

  skillContainer.insertAdjacentHTML("beforeend", skill);
  if (shouldExpand != false) {
    expandOrCollapse(skillHistory.children[0], false);
  }

  var deleteSkill = document.querySelector("#delete-" + type);
  deleteSkill.dataset.index = skillCounter;
  deleteSkill.dataset.type = type;
  deleteSkill.id = "delete-" + type + "-" + skillCounter;
  deleteSkill.addEventListener(`click`, deleteItem);

  const skillItems = document.querySelectorAll(
    ".skill-container .element-container"
  );

  skillItems.forEach(function (skillItem) {
    skillItem.addEventListener("dragstart", dragStart);
    skillItem.addEventListener("dragenter", dragEnter);
    skillItem.addEventListener("dragover", dragOver);
    skillItem.addEventListener("dragleave", dragLeave);
    skillItem.addEventListener("drop", drop);
    skillItem.addEventListener("dragend", dragEnd);
  });
}

// Links
function addLink(shouldExpand) {
  const type = "link";
  const linkHistory = document.querySelector(".links");
  const linkContainer = document.querySelector("." + type + "-container");

  linkCounter += 1;
  const skillHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="element-container">
      <div
        class="collapsible flex-center clear-bg"
        onclick="javascript:collapsibleClickEvent(this)"
      >
        <div class="collapsible-child flex-center full-width">
          <p class="subtitle pl-20" id="link-title">Link</p>
          <img
            class="collapsed-arrow accessory-icon-child mr-10"
            src="./images/arrow-collapse.png"
            alt="collapsed"
          />
        </div>
        <img
          class="accessory-icon-child pl-10"
          id="delete-link"
          src="./images/delete.png"
          alt="delete"
        />
      </div>
      <div class="collapsible-content">
          <table>
            <tr>
              <td class="pt-20 pr-20">
                <div>
                  <div class="full-width">Link</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="link-label"
                      id="link-label"
                      onkeyup="javascript:updateTitleOnEnter(this)"
                      placeholder="Label" title="Enter link label"
                      required
                    />
                  </div>
                </div>
              </td>
              <td class="pt-20 pr-20">
                <div>
                  <div class="full-width">URL</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="url"
                      name="link-url"
                      id="link-url"
                      placeholder="https://www.example.com"
                      pattern="(https://|http://)[a-zA-Z0-9._]{7,}(/.*)?$"
                      required
                    />
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
    </div>`,
    "text/html"
  );
  var elementContainer = skillHTML.querySelector(".element-container");
  elementContainer.id = type + "-container-" + linkCounter;

  var linkTitle = skillHTML.querySelector("#" + type + "-title");
  linkTitle.id = type + "-title" + "-" + linkCounter;

  var linkTitleInput = skillHTML.querySelector("#" + type + "-label");
  linkTitleInput.dataset.type = type;
  linkTitleInput.dataset.index = linkCounter;
  linkTitleInput.id = type + "-label" + "-" + linkCounter;

  const link = skillHTML.documentElement.childNodes[1].innerHTML;

  linkContainer.insertAdjacentHTML("beforeend", link);
  if (shouldExpand != false) {
    expandOrCollapse(linkHistory.children[0], false);
  }

  var deleteLink = document.querySelector("#delete-" + type);
  deleteLink.dataset.index = linkCounter;
  deleteLink.dataset.type = type;
  deleteLink.id = "delete-" + type + "-" + linkCounter;
  deleteLink.addEventListener(`click`, deleteItem);

  var linkURL = document.querySelector("#" + type + "-url");
  linkURL.name = type + "-url-" + linkCounter;
  linkURL.id = type + "-url-" + linkCounter;

  const linkItems = document.querySelectorAll(
    ".link-container .element-container"
  );

  linkItems.forEach(function (linkItem) {
    linkItem.addEventListener("dragstart", dragStart);
    linkItem.addEventListener("dragenter", dragEnter);
    linkItem.addEventListener("dragover", dragOver);
    linkItem.addEventListener("dragleave", dragLeave);
    linkItem.addEventListener("drop", drop);
    linkItem.addEventListener("dragend", dragEnd);
  });
}

function updateTitleOnEnter(inputField) {
  const type = event.target.getAttribute("data-type");
  var title = document.querySelector(
    "#" + type + "-title-label-" + inputField.getAttribute("data-index")
  );
  title.innerHTML = inputField.value;
}

function setEmploymentIsCurrentJob(event) {
  var employmentEndDate = document.querySelector(
    "#" +
      event.target.getAttribute("data-type") +
      "-end-date-" +
      event.target.getAttribute("data-index")
  );
  const isChecked = event.target.checked == true;
  if (isChecked) {
    employmentEndDate.value = "Present";
  } else {
    employmentEndDate.value = "";
  }
  employmentEndDate.disabled = isChecked;
}

function deleteItem(event) {
  const type = event.target.getAttribute("data-type");
  var jobTitle = document.querySelector(
    "#" + type + "-title-label-" + event.target.getAttribute("data-index")
  );
  let confirmation =
    jobTitle.innerHTML + " " + type + " will be deleted. Click OK to confirm.";

  if (confirm(confirmation) == true) {
    var parent = jobTitle.parentElement.parentElement;
    const sibling = parent.nextElementSibling;
    parent.remove();
    sibling.remove();
  }
  event.stopPropagation();
}

function expandOrCollapse(element, isUserAction) {
  if (element.classList["value"].includes("expanded")) {
    element.nextElementSibling.classList.add("mt-20");
  } else {
    element.nextElementSibling.classList.remove("mt-20");
  }
  var arrChildren = element.children;
  var content = element.nextElementSibling;
  if (content == null || content.nodeName.toLowerCase() != "div") {
    content = element.parentElement.nextElementSibling;
  }
  updateArrow(arrChildren, isUserAction);
  if (isUserAction == true) {
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }

  var parent = element.parentElement;
  setParentHeight(parent, content, "element-container");

  parent = parent.parentElement.parentElement;
  setParentHeight(parent, content, "collapsible-content");
}

function setParentHeight(parent, content, className) {
  const arrParentClassList = parent.classList["value"].split(" ");
  if (arrParentClassList.includes(className)) {
    parent.style.maxHeight = parent.scrollHeight + content.scrollHeight + "px";
  }
}

function updateArrow(arrChildren, isUserAction) {
  for (let indexChild = 0; indexChild < arrChildren.length; indexChild++) {
    var child = arrChildren[indexChild];
    if (isUserAction == true) {
      if (child.nodeName.toLowerCase() == "div") {
        this.updateArrow(child.children, isUserAction);
        return;
      }
      const arrClassList = child.classList["value"].split(" ");
      if (
        arrClassList.includes("collapsed-arrow") ||
        arrClassList.includes("expanded-arrow")
      ) {
        child.classList.toggle("expanded-arrow");
        child.classList.toggle("collapsed-arrow");
      }
    }
  }
}

function addCollapsibleAction(arrCollapsibles) {
  for (let index = 0; index < arrCollapsibles.length; index++) {
    const element = arrCollapsibles[index];
    element.addEventListener("click", collapsibleClickEvent);
  }
}

function collapsibleClickEvent(element) {
  var target = element.target != null ? element.target : element;
  if (target.nodeName.toLowerCase() != "div") {
    target = target.parentElement;
  }
  target.classList.toggle("expanded");
  expandOrCollapse(target, true);
}

function createEditorFrom(elementToChange, description) {
  const element = document.querySelector("#" + elementToChange.id);
  ClassicEditor.create(element, {
    removePlugins: [
      "CKFinderUploadAdapter",
      "Autoformat",
      "BlockQuote",
      "CKBox",
      "CKFinder",
      "CloudServices",
      "EasyImage",
      "Heading",
      "Image",
      "ImageCaption",
      "ImageStyle",
      "ImageToolbar",
      "ImageUpload",
      "Indent",
      "MediaEmbed",
      // "Paragraph",
      "PasteFromOffice",
      "PictureEditing",
      "Table",
      "TableToolbar",
      "TextTransformation",
    ],
  })
    .then((newEditor) => {
      if (description != undefined) {
        newEditor.setData(description);
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

//   var plugins = ClassicEditor.builtinPlugins.map(
//     (plugin) => plugin.pluginName
//   );
//   console.log(plugins);
//   [
//     "Essentials",
//     "CKFinderUploadAdapter",
//     "Autoformat",
//     "Bold",
//     "Italic",
//     "BlockQuote",
//     "CKBox",
//     "CKFinder",
//     "CloudServices",
//     "EasyImage",
//     "Heading",
//     "Image",
//     "ImageCaption",
//     "ImageStyle",
//     "ImageToolbar",
//     "ImageUpload",
//     "Indent",
//     "Link",
//     "List",
//     "MediaEmbed",
//     "Paragraph",
//     "PasteFromOffice",
//     "PictureEditing",
//     "Table",
//     "TableToolbar",
//     "TextTransformation",
//   ];

//DRAG AND DROP SWAP

var draggedItem = null;

function dragStart(e) {
  draggedItem = this;
  e.dataTransfer.effectAllowed = "move";
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}

function dragEnter(e) {
  // this.classList.add("dragover");
}

function dragLeave(e) {
  // this.classList.remove("dragover");
}

function drop(e) {
  e.stopPropagation();

  if (draggedItem != this) {
    const span = document.createElement("span");
    const $container = draggedItem.parentElement;
    $container.insertBefore(span, draggedItem);
    $container.insertBefore(draggedItem, this.nextSibling);
    $container.insertBefore(this, span);
    span.remove();
  }
}

function dragEnd(e) {
  // const arrChildren = draggedItem.parentElement.children;
  // for (const child in arrChildren) {
  //   if (Object.hasOwnProperty.call(arrChildren, child)) {
  //     arrChildren[child].classList.remove("dragover");
  //   }
  // }
}

// Update Rating
function updateRating(n, rating) {
  const parent = rating.parentElement;
  parent.dataset.rating = n;
  const arrChildren = parent.children;
  removeRating(arrChildren);
  for (let indexChild = 0; indexChild < n; indexChild++) {
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    arrChildren[indexChild].className = "rating " + cls;
  }
}

// To remove the pre-applied rating
function removeRating(arrChildren) {
  for (let indexChild = 0; indexChild < arrChildren.length; indexChild++) {
    arrChildren[indexChild].className = "rating";
  }
}

// Load Resume From Local Storage
const resumeJSON = localStorage.resume;
var resume;
if (resumeJSON != null) {
  resume = JSON.parse(resumeJSON);
  setDetails(resume[0]);

  createEditorFrom(
    document.querySelector("#professional-summary-editor"),
    resume[1].section["professional-summary"]
  );
  for (let index = 2; index < resume.length; index++) {
    const element = resume[index];
    const name = element.section.name;
    if (arrCustomSections.includes(name)) {
      switch (name) {
        case ElementTypeEnum.HOBBIES.name:
          addHobbiesSection(false);
          setHobbies(element);
          removeAddSectionForExistingSections(ElementTypeEnum.HOBBIES);
          break;
        case ElementTypeEnum.INTERNSHIP.name:
          addInternshipsSection(false);
          removeAddSectionForExistingSections(ElementTypeEnum.INTERNSHIP);
          break;
        default:
          break;
      }
    }
    if (arrMultipleItemHolder.includes(name)) {
      setLoopedRecords(element, getElementTypeFrom(name));
    }
  }
} else {
  createEditorFrom(document.querySelector("#professional-summary-editor"));
}

function setLoopedRecords(records, type) {
  for (let index = 0; index < records.children.length; index++) {
    const element = records.children[index];
    switch (type) {
      case ElementTypeEnum.EMPLOYMENT:
        addEmploymentTypeItem(
          "employment",
          element["employment-history"],
          false
        );
        break;
      case ElementTypeEnum.LINKS:
        addLink(false);
        break;
      case ElementTypeEnum.EDUCATION:
        addEducation(element["education-history"], false);
        break;
      case ElementTypeEnum.SKILLS:
        addSkill(false);
        break;
      case ElementTypeEnum.INTERNSHIP:
        addEmploymentTypeItem(
          "internship",
          element["internship-history"],
          false
        );
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
      let titleKey = key;
      if (key.startsWith(type.value + "-title-input")) {
        titleKey = key.replace(
          type.value + "-title-input",
          type.value + "-title-label"
        );
      } else if (key.startsWith("education-degree")) {
        titleKey = key.replace("education-degree", "education-title");
      } else if (key.startsWith("skill-label")) {
        titleKey = key.replace("skill-label", "skill-title");
      } else if (key.startsWith("link-label")) {
        titleKey = key.replace("link-label", "link-title");
      }
      const HTMLElement = document.querySelector("#" + key);
      if (HTMLElement != null) {
        HTMLElement.value = value;
        if (HTMLElement.type == "checkbox") {
          HTMLElement.checked = value;
          var event = new Event("change");
          HTMLElement.dispatchEvent(event);
        }
      }
      if (titleKey !== key) {
        const titleHTMLElement = document.querySelector("#" + titleKey);
        if (titleHTMLElement != null) {
          titleHTMLElement.innerHTML = value;
        }
      }
      if (key.startsWith("rating")) {
        titleKey = "skill-rating-" + (index + 1);
        const HTMLElement = document.querySelector("#" + titleKey);
        const arrChildren = HTMLElement.children;
        if (arrChildren.length > 0) {
          updateRating(value, HTMLElement.children[0]);
        }
      }
    });
  }
}

function setDetails(details) {
  const keys = Object.keys(details.section);
  keys.forEach((key) => {
    const value = details.section[key];
    const HTMLElement = document.querySelector("#" + key);
    if (HTMLElement != null) {
      HTMLElement.value = value;
    }
  });
}

function setHobbies(details) {
  const HTMLElement = document.querySelector(
    "#" + ElementTypeEnum.HOBBIES.value
  );
  if (HTMLElement != null) {
    HTMLElement.innerHTML = details.section.hobbies;
  }
}

function removeAddSectionForExistingSections(type) {
  switch (type) {
    case ElementTypeEnum.HOBBIES:
      const hobbies = document.querySelector(
        ".add-section .collapsible-content .add-hobbies-section"
      );
      if (hobbies != null) {
        hobbies.remove();
      }
      break;
    case ElementTypeEnum.INTERNSHIP:
      const internships = document.querySelector(
        ".add-section .collapsible-content .add-internships-section"
      );
      if (internships != null) {
        internships.remove();
      }
      break;
    default:
      break;
  }
  const parent = document.querySelector(".add-section .collapsible-content");
  if (parent != null && parent.children.length == 0) {
    parent.parentElement.remove();
  }
}

//Download
function download() {
  var paramTemplate = getParam("template");
  window.location.href = "/resumetemplates/" + paramTemplate + ".html";
}
