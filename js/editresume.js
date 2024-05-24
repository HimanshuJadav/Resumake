var employmentCounter = 0;
var parser = new DOMParser();

var arrCollapsibles = document.getElementsByClassName("collapsible");
addCollapsibleAction(arrCollapsibles);

createEditorFrom(document.querySelector("#professional-summary-editor"));

createEditorFrom(document.querySelector("#education-editor"));

function addEmployment() {
  const employmentHistory = document.querySelector(".employment-history");
  const addEmployment = document.querySelector(".add-employment");

  employmentCounter += 1;
  const className = "job";
  const employmentHTML = new DOMParser().parseFromString(
    `<div class="full-width pl-20 collapsible collapsible-child" onclick="javascript:collapsibleClickEvent(this)">
        <p class="subtitle">Job Title</p>
        <img
          class="collapsed-arrow arrow mr-30"
          src="./images/arrow-collapse.png"
          alt="collapsed"
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
                    name="employer"
                    id="employer"
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
                    type="date"
                    name="employment-start-date"
                    id="employment-start-date"
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
                    type="date"
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
      </div>`,
    "text/html"
  );
  var historyEditor = employmentHTML.querySelector(
    "#employment-history-editor"
  );
  historyEditor.id = "employment-history-editor" + "-" + employmentCounter;

  createEditorFrom(historyEditor);

  const employment = employmentHTML.documentElement.childNodes[1].innerHTML;
  addEmployment.insertAdjacentHTML("beforebegin", employment);

  expandOrCollapse(employmentHistory.children[0], false);

  // var arrCollapsibles = employmentHTML.getElementsByClassName("collapsible");
  // addCollapsibleAction(arrCollapsibles);
}

function expandOrCollapse(element, isUserAction) {
  var arrChildren = element.children;
  for (let indexChild = 0; indexChild < arrChildren.length; indexChild++) {
    const child = arrChildren[indexChild];
    var content = element.nextElementSibling;
    if (isUserAction == true) {
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
  const arrParentClassList = parent.classList["value"].split(" ");
  if (arrParentClassList.includes("collapsible-content")) {
    parent.style.maxHeight = parent.scrollHeight + content.scrollHeight + "px";
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
  target.classList.toggle("expanded");
  expandOrCollapse(target, true);
}

function createEditorFrom(element) {
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
