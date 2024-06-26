var employmentCounter = 0;
var educationCounter = 0;
var skillCounter = 0;
var linkCounter = 0;
var parser = new DOMParser();
const ElementTypeEnum = {
  EMPLOYMENT: "employment",
  LINKS: "links",
  EDUCATION: "education",
  SKILLS: "skills",
};

var arrCollapsibles = document.getElementsByClassName("collapsible");
addCollapsibleAction(arrCollapsibles);

// Employment
function addEmployment(employmentDescription) {
  const type = "employment";
  const employmentHistory = document.querySelector(".employment-history");
  const employmentContainer = document.querySelector(".employment-container");

  employmentCounter += 1;
  const employmentHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="full-width element-container">
      <div
        class="full-width pl-20 collapsible flex-center clear-bg"
        onclick="javascript:collapsibleClickEvent(this)"
      >
        <div class="collapsible-child flex-center full-width">
          <p class="subtitle" id="employment-title">Job Title</p>
          <img
            class="collapsed-arrow accessory-icon mr-10"
            src="./images/arrow-collapse.png"
            alt="collapsed"
          />
        </div>
        <img
          class="accessory-icon pl-10 pr-20"
          id="delete-job"
          src="./images/delete.png"
          alt="delete"
        />
      </div>
      <div class="collapsible-content">
        <table>
          <tr>
            <td class="pl-20 pr-20">
              <div>
                <div class="full-width">Job Title</div>
                <div class="mt-10">
                  <input
                    class="full-width height-30"
                    type="text"
                    name="employment-job-title"
                    id="employment-job-title"
                    onkeyup="javascript:updateTitleOnEnter(this)"
                  />
                </div>
              </div>
            </td>
            <td class="pl-20 pr-20">
              <div>
                <div class="full-width">Employer</div>
                <div class="mt-10">
                  <input
                    class="full-width height-30"
                    type="text"
                    name="employer-name"
                    id="employer-name"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="pt-20 pl-20 pr-20">
              <div>
                <div class="full-width">Start Date</div>
                <div class="mt-10">
                  <input
                    class="height-30 full-width"
                    type="month"
                    name="employment-start-date"
                    id="employment-start-date"
                  />
                </div>
              </div>
            </td>
            <td class="pt-20 pl-20 pr-20">
              <div>
                <div class="full-width">
                  End Date
                  <input
                    type="checkbox"
                    id="employment-is-current-job"
                    name="employment-is-current-job"
                    value="employment-is-current-job"
                  />
                  <label
                    for="employment-is-current-job-label"
                    id="employment-is-current-job-label"
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
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="pt-20 pl-20 pr-20">
              <div>
                <div class="full-width">Country</div>
                <div class="mt-10">
                  <input
                    class="full-width height-30"
                    type="text"
                    name="employment-country"
                    id="employment-country"
                  />
                </div>
              </div>
            </td>
            <td class="pt-20 pl-20 pr-20">
              <div>
                <div class="full-width">City</div>
                <div class="mt-10">
                  <input
                    class="full-width height-30"
                    type="text"
                    name="employment-city"
                    id="employment-city"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="pt-20 pl-20 pr-20" colspan="2">
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
  var elementContainer = employmentHTML.querySelector(".element-container");
  elementContainer.id = "employment-container-" + employmentCounter;

  var historyEditor = employmentHTML.querySelector(
    "#employment-history-editor"
  );
  historyEditor.id = "employment-history-editor-" + employmentCounter;

  var jobTitle = employmentHTML.querySelector("#employment-title");
  jobTitle.id = "employment-title" + "-" + employmentCounter;

  var jobTitleInput = employmentHTML.querySelector("#employment-job-title");
  jobTitleInput.dataset.type = type;
  jobTitleInput.dataset.index = employmentCounter;
  jobTitleInput.id = "employment-job-title" + "-" + employmentCounter;

  const employment = employmentHTML.documentElement.childNodes[1].innerHTML;

  employmentContainer.insertAdjacentHTML("beforeend", employment);

  createEditorFrom(historyEditor, employmentDescription);

  expandOrCollapse(employmentHistory.children[0], false);

  var deleteJob = document.querySelector("#delete-job");
  deleteJob.dataset.type = type;
  deleteJob.dataset.index = employmentCounter;
  deleteJob.id = "delete-job-" + employmentCounter;
  deleteJob.addEventListener(`click`, deleteItem);

  var employerName = document.querySelector("#employer-name");
  employerName.name = "employer-name-" + employmentCounter;
  employerName.id = "employer-name-" + employmentCounter;

  var employmentStartDate = document.querySelector("#employment-start-date");
  employmentStartDate.name = "employment-start-date-" + employmentCounter;
  employmentStartDate.id = "employment-start-date-" + employmentCounter;

  var employmentEndDate = document.querySelector("#employment-end-date");
  employmentEndDate.name = "employment-end-date-" + employmentCounter;
  employmentEndDate.id = "employment-end-date-" + employmentCounter;

  var employmentIsCurrentJob = document.querySelector(
    "#employment-is-current-job"
  );
  employmentIsCurrentJob.id = "employment-is-current-job-" + employmentCounter;
  employmentIsCurrentJob.dataset.index = employmentCounter;
  employmentIsCurrentJob.name =
    "employment-is-current-job-" + employmentCounter;
  employmentIsCurrentJob.value =
    "employment-is-current-job-" + employmentCounter;
  employmentIsCurrentJob.addEventListener(`change`, setEmploymentIsCurrentJob);

  var employmentIsCurrentJobLabel = document.querySelector(
    "#employment-is-current-job-label"
  );
  employmentIsCurrentJobLabel.for =
    "employment-is-current-job-label-" + employmentCounter;
  employmentIsCurrentJobLabel.id =
    "employment-is-current-job-label-" + employmentCounter;

  var employmentCountry = document.querySelector("#employment-country");
  employmentCountry.name = "employment-country-" + employmentCounter;
  employmentCountry.id = "employment-country-" + employmentCounter;

  var employmentCity = document.querySelector("#employment-city");
  employmentCity.name = "employment-city-" + employmentCounter;
  employmentCity.id = "employment-city-" + employmentCounter;
  // var arrCollapsibles = employmentHTML.getElementsByClassName("collapsible");
  // addCollapsibleAction(arrCollapsibles);

  const employmentItems = document.querySelectorAll(
    ".employment-container .element-container"
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
function addEducation() {
  const type = "education";
  const educationHistory = document.querySelector("." + type + "-history");
  const educationContainer = document.querySelector("." + type + "-container");

  educationCounter += 1;
  const educationHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="full-width element-container">
      <div
        class="full-width pl-20 collapsible flex-center clear-bg"
        onclick="javascript:collapsibleClickEvent(this)"
      >
        <div class="collapsible-child flex-center full-width">
          <p class="subtitle" id="education-title">Education Title</p>
          <img
            class="collapsed-arrow accessory-icon mr-10"
            src="./images/arrow-collapse.png"
            alt="collapsed"
          />
        </div>
        <img
          class="accessory-icon pl-10 pr-20"
          id="delete-education"
          src="./images/delete.png"
          alt="delete"
        />
      </div>
      <div class="collapsible-content">
          <table>
            <tr>
              <td class="pl-20 pr-20">
                <div>
                  <div class="full-width">Degree</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="education-degree"
                      id="education-degree"
                      onkeyup="javascript:updateTitleOnEnter(this)"
                    />
                  </div>
                </div>
              </td>
              <td class="pl-20 pr-20">
                <div>
                  <div class="full-width">School</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="education-school"
                      id="education-school"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="pt-20 pl-20 pr-20">
                <div>
                  <div class="full-width">Start Date</div>
                  <div class="mt-10">
                    <input
                      class="height-30 full-width"
                      type="month"
                      name="education-start-date"
                      id="education-start-date"
                    />
                  </div>
                </div>
              </td>
              <td class="pt-20 pl-20 pr-20">
                <div>
                  <div class="full-width">End Date</div>
                  <div class="mt-10">
                    <input
                      class="height-30 full-width"
                      type="month"
                      name="education-end-date"
                      id="education-end-date"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="pt-20 pl-20 pr-20">
                <div>
                  <div class="full-width">Country</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="education-country"
                      id="education-country"
                    />
                  </div>
                </div>
              </td>
              <td class="pt-20 pl-20 pr-20">
                <div>
                  <div class="full-width">City</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="education-city"
                      id="education-city"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="pt-20 pl-20 pr-20" colspan="2">
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

  createEditorFrom(historyEditor);

  expandOrCollapse(educationHistory.children[0], false);

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

  var educationEndDate = document.querySelector("#education-end-date");
  educationEndDate.name = "education-end-date-" + educationCounter;
  educationEndDate.id = "education-end-date-" + educationCounter;

  var educationCountry = document.querySelector("#education-country");
  educationCountry.name = "education-country-" + educationCounter;
  educationCountry.id = "education-country-" + educationCounter;

  var educationCity = document.querySelector("#education-city");
  educationCity.name = "education-city-" + educationCounter;
  educationCity.id = "education-city-" + educationCounter;
  // var arrCollapsibles = employmentHTML.getElementsByClassName("collapsible");
  // addCollapsibleAction(arrCollapsibles);

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
function addSkill() {
  const type = "skill";
  const skillHistory = document.querySelector(".skills");
  const skillContainer = document.querySelector("." + type + "-container");

  skillCounter += 1;
  const skillHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="full-width element-container">
      <div
        class="full-width pl-20 collapsible flex-center clear-bg"
        onclick="javascript:collapsibleClickEvent(this)"
      >
        <div class="collapsible-child flex-center full-width">
          <p class="subtitle" id="skill-title">Skill</p>
          <img
            class="collapsed-arrow accessory-icon mr-10"
            src="./images/arrow-collapse.png"
            alt="collapsed"
          />
        </div>
        <img
          class="accessory-icon pl-10 pr-20"
          id="delete-skill"
          src="./images/delete.png"
          alt="delete"
        />
      </div>
      <div class="collapsible-content">
          <table>
            <tr>
              <td class="pl-20 pr-20">
                <div>
                  <div class="full-width">Skill</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="skill-label"
                      id="skill-label"
                      onkeyup="javascript:updateTitleOnEnter(this)"
                    />
                  </div>
                </div>
              </td>
              <td class="pl-20 pr-20">
                <div>
                  <div class="full-width">Rating</div>
                    <div class="skill-rating full-width height-30 pb-20">
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

  expandOrCollapse(skillHistory.children[0], false);

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
function addLink() {
  const type = "link";
  const linkHistory = document.querySelector(".links");
  const linkContainer = document.querySelector("." + type + "-container");

  linkCounter += 1;
  const skillHTML = new DOMParser().parseFromString(
    `<div draggable="true" class="full-width element-container">
      <div
        class="full-width pl-20 collapsible flex-center clear-bg"
        onclick="javascript:collapsibleClickEvent(this)"
      >
        <div class="collapsible-child flex-center full-width">
          <p class="subtitle" id="link-title">Link</p>
          <img
            class="collapsed-arrow accessory-icon mr-10"
            src="./images/arrow-collapse.png"
            alt="collapsed"
          />
        </div>
        <img
          class="accessory-icon pl-10 pr-20"
          id="delete-link"
          src="./images/delete.png"
          alt="delete"
        />
      </div>
      <div class="collapsible-content">
          <table>
            <tr>
              <td class="pl-20 pr-20">
                <div>
                  <div class="full-width">Link</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="text"
                      name="link-label"
                      id="link-label"
                      onkeyup="javascript:updateTitleOnEnter(this)"
                    />
                  </div>
                </div>
              </td>
              <td class="pl-20 pr-20">
                <div>
                  <div class="full-width">URL</div>
                  <div class="mt-10">
                    <input
                      class="full-width height-30"
                      type="url"
                      name="link-url"
                      id="link-url"
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

  expandOrCollapse(linkHistory.children[0], false);

  var deleteLink = document.querySelector("#delete-" + type);
  deleteLink.dataset.index = linkCounter;
  deleteLink.dataset.type = type;
  deleteLink.id = "delete-" + type + "-" + linkCounter;
  deleteLink.addEventListener(`click`, deleteItem);

  var linkURL = document.querySelector("#" + type + "-url");
  linkURL.name = type + "-url-" + linkCounter;
  linkURL.id = type + "-url-" + linkCounter;
  // var arrCollapsibles = employmentHTML.getElementsByClassName("collapsible");
  // addCollapsibleAction(arrCollapsibles);

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
    "#" + type + "-title-" + inputField.getAttribute("data-index")
  );
  title.innerHTML = inputField.value;
}

function setEmploymentIsCurrentJob(event) {
  var employmentEndDate = document.querySelector(
    "#employment-end-date-" + event.target.getAttribute("data-index")
  );

  employmentEndDate.disabled = event.target.checked == true;
}

function deleteItem(event) {
  const type = event.target.getAttribute("data-type");
  var jobTitle = document.querySelector(
    "#" + type + "-title-" + event.target.getAttribute("data-index")
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
  setPersonalDetails(resume[1]);
  // setProfessionalSummary(resume[2]);

  createEditorFrom(
    document.querySelector("#professional-summary-editor"),
    resume[2].section["professional-summary"]
  );
  setLoopedRecords(resume[3], ElementTypeEnum.EMPLOYMENT);
  setLoopedRecords(resume[4], ElementTypeEnum.EDUCATION);
  setLoopedRecords(resume[5], ElementTypeEnum.SKILLS);
  setLoopedRecords(resume[6], ElementTypeEnum.LINKS);
} else {
  createEditorFrom(document.querySelector("#professional-summary-editor"));
}

function setLoopedRecords(records, type) {
  for (let index = 0; index < records.children.length; index++) {
    const element = records.children[index];
    switch (type) {
      case ElementTypeEnum.EMPLOYMENT:
        addEmployment(element["employment-history"]);
        break;
      case ElementTypeEnum.LINKS:
        addLink();
        break;
      case ElementTypeEnum.EDUCATION:
        addEducation(element["education-history"]);
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
      let titleKey = key;
      if (key.startsWith("employment-job-title")) {
        titleKey = key.replace("employment-job-title", "employment-title");
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

function setPersonalDetails(personalDetails) {
  const keys = Object.keys(personalDetails.section);
  keys.forEach((key) => {
    const value = personalDetails.section[key];
    const HTMLElement = document.querySelector("#" + key);
    if (HTMLElement != null) {
      HTMLElement.value = value;
    }
  });
}
