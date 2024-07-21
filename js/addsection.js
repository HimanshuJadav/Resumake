// Hobbies Section
function addHobbiesSection(shouldExpand) {
  const baseContainer = document.querySelector(".add-section");

  const hobbiesHTML = new DOMParser().parseFromString(
    `<section id="hobbies" class="hobbies" data-name="hobbies">
      <div class="collapsible flex-center pr-10"
      onclick="javascript:collapsibleClickEvent(this)">
        <p class="title pl-20">Hobbies</p>
        <img
          class="collapsed-arrow accessory-icon"
          src="./images/arrow-collapse.png"
          alt="collapsed"
        />
      </div>
      <div class="collapsible-content">
        <table>
          <tr>
            <td colspan="2">
              <p class="subtitle">
                What do you like?
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <textarea
                id="hobbies-editor"
                class="full-width"
                name="hobbies"
                placeholder="e.g. Skiing, Skydiving, Painting ..."
              ></textarea>
            </td>
          </tr>
        </table>
      </div>
    </section>`,
    "text/html"
  );

  var hobbies = hobbiesHTML.documentElement.childNodes[1].innerHTML;

  baseContainer.insertAdjacentHTML("beforebegin", hobbies);
  hobbies = document.querySelector(".hobbies");
  const collapsible = document.querySelector(".hobbies .collapsible");
  if (shouldExpand) {
    collapsible.classList.add("expanded");
    expandOrCollapse(hobbies.children[0], false);
  } else {
    collapsible.classList.remove("expanded");
  }
  removeAddSectionForExistingSections(ElementTypeEnum.HOBBIES);
}

// Internship Section
function addInternshipsSection(shouldExpand) {
  const baseContainer = document.querySelector(".add-section");

  const internshipHTML = new DOMParser().parseFromString(
    `<section
    id="internship-history"
    class="internship-history"
    data-name="internship-history"
  >
    <div class="collapsible flex-center pr-10"
    onclick="javascript:collapsibleClickEvent(this)">
      <p class="title pl-20">Internships</p>
      <img
        class="collapsed-arrow accessory-icon"
        src="./images/arrow-collapse.png"
        alt="collapsed"
      />
    </div>
    <div class="collapsible-content">
      <div class="internship-container"></div>
      <div class="add-internship">
        <a href="javascript:addEmploymentTypeItem('internship')">Add Internship</a>
      </div>
    </div>
  </section>`,
    "text/html"
  );

  var internships = internshipHTML.documentElement.childNodes[1].innerHTML;

  baseContainer.insertAdjacentHTML("beforebegin", internships);
  internships = document.querySelector(".internship-history");
  const collapsible = document.querySelector(
    ".internship-history .collapsible"
  );
  if (shouldExpand) {
    collapsible.classList.add("expanded");
    expandOrCollapse(internships.children[0], false);
  } else {
    collapsible.classList.remove("expanded");
  }
  removeAddSectionForExistingSections(ElementTypeEnum.INTERNSHIP);
}
