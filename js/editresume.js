var employmentCounter = 0;
var parser = new DOMParser();

var arrCollapsibles = document.getElementsByClassName("collapsible");
addCollapsibleAction(arrCollapsibles);

createEditorFrom(document.querySelector("#professional-summary-editor"));

createEditorFrom(document.querySelector("#education-editor"));

function updateJobTitleOnEnter(inputField) {
  var jobTitle = document.querySelector(
    "#job-title-" + inputField.getAttribute("data-index")
  );
  jobTitle.innerHTML = inputField.value;
}

function addEmployment() {
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
          <p class="subtitle" id="job-title">Job Title</p>
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
                    onkeyup="javascript:updateJobTitleOnEnter(this)"
                  />
                </div>
              </div>
            </td>
            <td class="pt-20 pl-20 pr-20">
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

  var jobTitle = employmentHTML.querySelector("#job-title");
  jobTitle.id = "job-title" + "-" + employmentCounter;

  var jobTitleInput = employmentHTML.querySelector("#employment-job-title");
  jobTitleInput.dataset.index = employmentCounter;
  jobTitleInput.id = "employment-job-title" + "-" + employmentCounter;

  const employment = employmentHTML.documentElement.childNodes[1].innerHTML;

  employmentContainer.insertAdjacentHTML("beforeend", employment);

  createEditorFrom(historyEditor);

  expandOrCollapse(employmentHistory.children[0], false);

  var deleteJob = document.querySelector("#delete-job");
  deleteJob.dataset.index = employmentCounter;
  deleteJob.id = "delete-job-" + employmentCounter;
  deleteJob.addEventListener(`click`, deleteEmployment);

  var employerName = document.querySelector("#employer-name");
  employerName.name = "employer-name-" + employmentCounter;
  employerName.id = "employer-name-" + employmentCounter;

  var employerName = document.querySelector("#employment-start-date");
  employerName.name = "employment-start-date-" + employmentCounter;
  employerName.id = "employment-start-date-" + employmentCounter;

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

function setEmploymentIsCurrentJob(event) {
  var employmentEndDate = document.querySelector(
    "#employment-end-date-" + event.target.getAttribute("data-index")
  );

  employmentEndDate.disabled = event.target.checked == true;
}

function deleteEmployment(event) {
  var jobTitle = document.querySelector(
    "#job-title-" + event.target.getAttribute("data-index")
  );
  let confirmation =
    jobTitle.innerHTML + " job will be deleted. Click OK to confirm.";

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

  parent = parent.parentElement;
  setParentHeight(parent, content, "employment-container");

  parent = parent.parentElement;
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

function createEditorFrom(element) {
  element = document.querySelector("#" + element.id);
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
  }).catch((error) => {
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
