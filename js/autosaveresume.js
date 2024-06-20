var autoSaveCounter = 10;
const arrMultipleItemHolder = [
  "employment-history",
  "education-history",
  "skills",
  "links",
];
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
  console.log("save resume");
  const arrChildren = document.querySelector(".container").children;
  saveValues(null, arrChildren, []);
}

function saveValues(section, children, values) {
  var oldSection = section;
  var currentIndex = values.length - 1;
  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    const child = children[childIndex];
    if (child.nodeName.toLowerCase() === "section") {
      section = child.getAttribute("data-name");
      currentIndex += 1;
      values[currentIndex] = { section: { name: section }, children: [] };
      saveValues(section, child.children, values);
      console.log("section changed");
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
            section,
            currentIndex,
            values,
            child.innerHTML,
            section
          );
          return;
        }
        if (arrClassList.includes("skill-rating")) {
          console.log(child);
          var rating = child.getAttribute("data-rating");
          if (rating == null) {
            rating = 0;
          }
          values = getSaveValue(
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
      values = getSaveValue(
        section,
        currentIndex,
        values,
        child.value,
        child.name
      );
    }
  }
  localStorage.resume = JSON.stringify(values);
}

function getSaveValue(section, currentIndex, values, value, name) {
  if (arrMultipleItemHolder.includes(section)) {
    var index = values[currentIndex].children.length - 1;
    values[currentIndex].children[index][name] = value;
  } else {
    values[currentIndex].section[name] = value;
  }
}

// To stop the loop
// clearInterval(intervalId);
