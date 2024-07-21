// Hobbies Section
function addHobbiesSection() {
  const hobbiesContainer = document.querySelector(".add-section");

  linkCounter += 1;
  const hobbiesHTML = new DOMParser().parseFromString(
    `<section id="hobbies" class="hobbies" data-name="hobbies">
      <div class="collapsible flex-center pr-10">
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

  hobbiesContainer.insertAdjacentHTML("beforebegin", hobbies);
  hobbies = document.querySelector(".hobbies");
  expandOrCollapse(hobbies.children[0], true);
}
