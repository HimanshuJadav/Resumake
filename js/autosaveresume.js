var autoSaveCounter = 10;

var intervalId = window.setInterval(function () {
  const autoSaveLabel = document.querySelector(".auto-save-label");
  if (autoSaveCounter > 1) {
    autoSaveCounter -= 1;
    autoSaveLabel.innerHTML = "Auto saving in " + autoSaveCounter + " seconds.";
  } else if (autoSaveCounter == 1) {
    autoSaveCounter -= 1;
    autoSaveLabel.innerHTML = "Saving now.";
  } else {
    autoSaveCounter = 11;
    saveResume();
    autoSaveLabel.innerHTML = "Saved.";
  }
}, 1000);

function saveResumeNow() {
  const autoSaveLabel = document.querySelector(".auto-save-label");
  autoSaveCounter = 0;
  autoSaveLabel.innerHTML = "Saving now.";
}

function saveResume() {
  const arrChildren = document.querySelector(".container").children;
  saveValues(null, arrChildren, []);
}

function saveValues(section, children, values) {
  var currentIndex = values.length - 1;
  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    const child = children[childIndex];
    if (child.nodeName.toLowerCase() === "section") {
      section = child.getAttribute("data-name");
      if (section == "add-section") {
        continue;
      }
      currentIndex += 1;
      values[currentIndex] = { section: { name: section }, children: [] };
      saveValues(section, child.children, values);
    } else if (
      child.nodeName.toLowerCase() === "div" ||
      child.nodeName.toLowerCase() === "table" ||
      child.nodeName.toLowerCase() === "tbody" ||
      child.nodeName.toLowerCase() === "tr" ||
      child.nodeName.toLowerCase() === "td"
    ) {
      if (child.nodeName.toLowerCase() === "div") {
        const arrClassList = child.classList["value"].split(" ");
        if (arrClassList.includes("ck-content")) {
          values = getSaveValue(
            child,
            section,
            currentIndex,
            values,
            child.innerHTML,
            section
          );
          return;
        }
        if (arrClassList.includes("skill-rating")) {
          var rating = child.getAttribute("data-rating");
          if (rating == null) {
            rating = 0;
          }
          values = getSaveValue(
            child,
            section,
            currentIndex,
            values,
            rating,
            "rating"
          );
          return;
        }
      }
      if (child.nodeName.toLowerCase() === "table") {
        var index = values[currentIndex].children.length;
        values[currentIndex].children[index] = {};
      }
      saveValues(section, child.children, values);
    } else if (child.nodeName.toLowerCase() === "input") {
      var value = child.value;
      if (child.type === "checkbox") {
        value = child.checked;
      }
      values = getSaveValue(
        child,
        section,
        currentIndex,
        values,
        value,
        child.name
      );
    } else if (
      section.toLowerCase() === "hobbies" &&
      child.nodeName.toLowerCase() === "textarea"
    ) {
      var value = child.value;
      values = getSaveValue(
        child,
        section,
        currentIndex,
        values,
        value,
        child.name
      );
    }
  }
  localStorage.resume = JSON.stringify(values);
}

function getSaveValue(element, section, currentIndex, values, value, name) {
  if (
    element.nodeName.toLowerCase() === "input" &&
    value == "" &&
    !element.classList["value"].includes("required")
  ) {
    element.classList.add("required");
  } else if (
    name.toLowerCase() === "rating" &&
    value == "0" &&
    !element.classList["value"].includes("required")
  ) {
    element.classList.add("required");
  }
  if (arrMultipleItemHolder.includes(section)) {
    var index = values[currentIndex].children.length - 1;
    values[currentIndex].children[index][name] = value;
  } else {
    values[currentIndex].section[name] = value;
  }
}

// To stop the loop
// clearInterval(intervalId);
