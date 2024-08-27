// Hobbies Section
function addHobbiesSection(shouldExpand) {
  const baseContainer = document.querySelector(".add-section");

  const hobbiesHTML = new DOMParser().parseFromString(
    `<section id="hobbies" class="hobbies" data-name="hobbies">
  <div
    class="collapsible flex-center pr-10"
  >
    <div class="flex-center">
      <p class="title pl-20">Hobbies</p>
      <img
        class="accessory-icon pl-10"
        id="delete-hobbies-section"
        src="./images/delete.svg"
        alt="delete"
      />
    </div>
    <img
      class="collapsed-arrow accessory-icon"
      src="./images/arrow-collapse.svg"
      alt="collapsed"
    />
  </div>
  <div class="collapsible-content">
    <table>
      <tr>
        <td colspan="2">
          <p class="subtitle">What do you like?</p>
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
  collapsible.addEventListener(`click`, collapsibleClickEvent);
  const arrow = document.querySelector(".hobbies .collapsed-arrow");
  if (shouldExpand) {
    arrow.classList.toggle("expanded-arrow");
    arrow.classList.toggle("collapsed-arrow");
    collapsible.classList.add("expanded");
    expandOrCollapse(hobbies.children[0], false);
  } else {
    collapsible.classList.remove("expanded");
  }
  var deleteHobbiesSection = document.querySelector("#delete-hobbies-section");
  deleteHobbiesSection.dataset.type = "hobbies";
  deleteHobbiesSection.addEventListener(`click`, deleteSectionItem);
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
    <div class="collapsible flex-center pr-10">
      <div class="flex-center">
      <p class="title pl-20">Internships</p>
      <img
        class="accessory-icon pl-10"
        id="delete-internships-section"
        src="./images/delete.svg"
        alt="delete"
      />
    </div>
      <img
        class="collapsed-arrow accessory-icon"
        src="./images/arrow-collapse.svg"
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
  collapsible.addEventListener(`click`, collapsibleClickEvent);
  const arrow = document.querySelector(".internship-history .collapsed-arrow");
  if (shouldExpand) {
    arrow.classList.toggle("expanded-arrow");
    arrow.classList.toggle("collapsed-arrow");
    collapsible.classList.add("expanded");
    expandOrCollapse(internships.children[0], false);
  } else {
    collapsible.classList.remove("expanded");
  }

  var deleteInternshipsSection = document.querySelector(
    "#delete-internships-section"
  );
  deleteInternshipsSection.dataset.type = "internship-history";
  deleteInternshipsSection.addEventListener(`click`, deleteSectionItem);

  removeAddSectionForExistingSections(ElementTypeEnum.INTERNSHIP);
}

// Extra-curricular Activities Section
function addExtraCurricularSection(shouldExpand) {
  const baseContainer = document.querySelector(".add-section");

  const extraCurricularHTML = new DOMParser().parseFromString(
    `<section
    id="extra-curricular-activities"
    class="extra-curricular-activities"
    data-name="extra-curricular-activities"
  >
    <div class="collapsible flex-center pr-10">
      <div class="flex-center">
      <p class="title pl-20">Extra-curricular Activities</p>
      <img
        class="accessory-icon pl-10"
        id="delete-extra-curricular-activities-section"
        src="./images/delete.png"
        alt="delete"
      />
    </div>
      <img
        class="collapsed-arrow accessory-icon"
        src="./images/arrow-collapse.png"
        alt="collapsed"
      />
    </div>
    <div class="collapsible-content">
      <div class="extra-curricular-activities-container"></div>
      <div class="add-extra-curricular-activity">
        <a href="javascript:addEmploymentTypeItem('extra-curricular-activity')">Add Extra-curricular activity</a>
      </div>
    </div>
  </section>`,
    "text/html"
  );

  var extraCurricular =
    extraCurricularHTML.documentElement.childNodes[1].innerHTML;

  baseContainer.insertAdjacentHTML("beforebegin", extraCurricular);
  extraCurricular = document.querySelector(".extra-curricular-activities");
  const collapsible = document.querySelector(
    ".extra-curricular-activities .collapsible"
  );
  collapsible.addEventListener(`click`, collapsibleClickEvent);
  const arrow = document.querySelector(
    ".extra-curricular-activities .collapsed-arrow"
  );
  if (shouldExpand) {
    arrow.classList.toggle("expanded-arrow");
    arrow.classList.toggle("collapsed-arrow");
    collapsible.classList.add("expanded");
    expandOrCollapse(extraCurricular.children[0], false);
  } else {
    collapsible.classList.remove("expanded");
  }

  var deleteInternshipsSection = document.querySelector(
    "#delete-extra-curricular-activities-section"
  );
  deleteInternshipsSection.dataset.type = "extra-curricular-activities";
  deleteInternshipsSection.addEventListener(`click`, deleteSectionItem);

  removeAddSectionForExistingSections(ElementTypeEnum.EXTRACURRICULAR);
}

function addHobbiesItemBackToAddSection() {
  const hobbiesHTML = `<div class="add-hobbies-section">
    <a href="javascript:addHobbiesSection(true)">Hobbies</a>
  </div>`;
  addItemBackToAddSection(hobbiesHTML);
}

function addInternshipsItemBackToAddSection() {
  const internshipsHTML = `<div class="add-internships-section">
    <a href="javascript:addInternshipsSection(true)">Internships</a>
  </div>`;
  addItemBackToAddSection(internshipsHTML);
}

function addExtraCurricularItemBackToAddSection() {
  const extraCurricularHTML = `<div class="add-extra-curricular-section">
            <a href="javascript:addExtraCurricularSection(true)">Extra-curricular Activities</a>
          </div>`;
  addItemBackToAddSection(extraCurricularHTML);
}

function addItemBackToAddSection(itemHTMLString) {
  var baseContainer = document.querySelector(
    ".add-section .collapsible-content"
  );
  if (baseContainer == null) {
    addAddSectionContainer();
    baseContainer = document.querySelector(".add-section .collapsible-content");
  }
  const itemHTML = new DOMParser().parseFromString(itemHTMLString, "text/html");

  var item = itemHTML.documentElement.childNodes[1].innerHTML;

  baseContainer.insertAdjacentHTML("beforeend", item);
}

function addAddSectionContainer() {
  const baseContainer = document.querySelector(".container");
  const addSectionHTML = new DOMParser().parseFromString(
    `<section id="add-section" class="add-section" data-name="add-section">
        <div class="collapsible flex-center pr-10">
          <p class="title pl-20">Add Section</p>
          <img
            class="collapsed-arrow accessory-icon"
            src="./images/arrow-collapse.svg"
            alt="collapsed"
          />
        </div>
        <div class="collapsible-content">
        </div>
      </section>`,
    "text/html"
  );

  var addSection = addSectionHTML.documentElement.childNodes[1].innerHTML;
  baseContainer.insertAdjacentHTML("beforeend", addSection);
  const collapsible = document.querySelector(".add-section .collapsible");
  collapsible.addEventListener(`click`, collapsibleClickEvent);
}
