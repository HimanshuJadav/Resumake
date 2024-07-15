// Employment
function addEmployment() {
  const employmentContainer = document.querySelector(".section__list");

  employmentCounter += 1;
  const employmentHTML = new DOMParser().parseFromString(
    `<li class="section__list-item">
    <div class="one-line">
      <div class="date" id="employment-start-date"></div>
      &nbsp;-&nbsp;
      <div class="date" id="employment-end-date"></div>
    </div>
    <div class="one-line">
      <p class="semi-bold" id="employment-job-title"></p>
      <span class="separator"></span>
      <p class="semi-bold" id="employer-name"></p>
    </div>
    <div class="one-line">
      <div id="employment-city"></div>
      ,&nbsp;
      <div id="employment-country"></div>
    </div>
    <p id="employment-history"></p>
    <p></p>
  </li>`,
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
    `<li class="section__list-item">
    <div class="one-line">
      <div class="date" id="education-start-date"></div>
      &nbsp;-&nbsp;
      <div class="date" id="education-end-date"></div>
    </div>
    <div class="one-line">
      <p class="semi-bold" id="education-degree"></p>
      <span class="separator"></span>
      <p class="semi-bold" id="education-school"></p>
    </div>
    <div class="one-line">
      <div id="education-city"></div>
      ,&nbsp;
      <div id="education-country"></div>
    </div>
    <p id="education-history"></p>
  </li>
  `,
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
    `<li class="skills__item">
                <div class="skill_name" id="skill-label">HTML</div>
                <div class="skill_progress">
                  <span style="width: 80%" id="rating"></span>
                </div>
              </li>`,
    "text/html"
  );
  var elementContainer = skillHTML.querySelector(".skills__item");
  elementContainer.id = "skill-item-" + skillCounter;

  const skill = skillHTML.documentElement.childNodes[1].innerHTML;

  skillContainer.insertAdjacentHTML("beforeend", skill);

  var skillLabel = document.querySelector("#skill-label");
  skillLabel.id = "skill-label-" + skillCounter;

  var skillLabel = document.querySelector("#rating");
  skillLabel.id = "skill-rating-" + skillCounter;
}

function setSkillRating(index, value) {
  var skillCheckbox = document.querySelector("#skill-rating-" + (index + 1));
  var widthPercentage = value * 20;
  skillCheckbox.style.width = widthPercentage + "%";
}

// Links
function addLink() {
  const linkContainer = document.querySelector(".links");

  linkCounter += 1;
  const linkHTML = new DOMParser().parseFromString(
    `
    <li class="section__list-item">
                <div class="data">
                  <p class="semi-bold" id="link-label"></p>
                  <a id="link-url"></a>
                </div>
              </li>`,
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
  return 0;
}

function printableMedia(totalPages, startingPt) {
  const image =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAMPWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkJDQAhGQEnoTRKQjJYQWQUA62AhJgFBiDAQRO7Ko4NpFBGzoqoiCawFkrYjdRbD3xYKCsi4WbFjepIAu+8r35vvmzn//OfOfM+fOvXcGAPUTXLE4C9UAIFuUK4kK9mcmJCYxSd2ACDQBHegBSy4vR8yKjAwDsAy2fy/vbgBE1l61l2n9s/+/Fk2+IIcHABIJcQo/h5cN8UEA8CqeWJILAFHGm83MFcswrEBbAgOEeIkMpylwlQynKPA+uU1MFBviVgBUqFyuJA0AtXbIM/N4aVBDrQ9iRxFfKAJAnQmxT3b2dD7EyRBbQxsxxDJ995QfdNL+ppkypMnlpg1hxVzkRSVAmCPO4s76P9Pxv0t2lnTQhyWs1HRJSJRszjBvtzKnh8owFeJeUUp4BMRaEH8Q8uX2EKOUdGlIrMIeNeDlsGHOAANiRz43IBRiA4iDRFnhYUo+JVUYxIEYrhA0X5jLiYFYF+IlgpzAaKXNFsn0KKUvtCFVwmYp+XNcidyvzNcDaWYsS6n/Ol3AUepjagXpMfEQUyA2zxPGhUOsBrFDTmZ0qNJmXEE6O3zQRiKNksVvDnGUQBTsr9DH8lIlQVFK+5LsnMH5YlvShZxwJd6fmx4TosgP1srjyuOHc8HaBSJW7KCOICchbHAufEFAoGLuWLdAFBut1PkgzvWPUozFKeKsSKU9birICpbxphA75+RFK8ficblwQSr08VRxbmSMIk68IIM7PlIRD74ShAE2CABMIIU1BUwHGUDY1tvYC+8UPUGACyQgDQiAvZIZHBEv7xHBazQoAH9CJAA5Q+P85b0CkAf5L0Os4moPUuW9efIRmeApxNkgFGTBe6l8lGjIWxx4AhnhP7xzYeXBeLNglfX/e36Q/c6wIBOmZKSDHpnqg5bEQGIAMYQYRLTB9XEf3AsPg1c/WJ1wd9xjcB7f7QlPCR2ER4TrhE7C7WnCQsmwKCeATqgfpMxFyo+5wC2hpgvuj3tDdaiMM3B9YI87Qz8s3Bd6doEsWxm3LCvMYdp/m8EPT0NpR3Yko+QRZD+y9fCRarZqLkMqslz/mB9FrClD+WYP9Qz3z/4h+3zYhg63xJZgB7Cz2EnsPHYEawRM7DjWhF3Cjsrw0Op6Il9dg96i5PFkQh3hP/wNPllZJnMcax17HD8r+nIF+bJvNGBPF8+SCNPSc5ks+EcQMDkinsMoppOjkzMAsv+L4vP1hiH/byCMC9+5GScA8CiBZNp3jmsGwOGnANDffefMXsPXZiUAR9t5UkmegsNlFwL8SqjDN00PGAEzYA3n4wRcgRfwA4FgPIgAMSARTIXRp8N1LgEzwRywEBSDUrASrAMVYDPYBnaBvWA/aARHwElwBlwE7eA6uAtXTxd4AfrAOzCAIAgJoSF0RA8xRiwQO8QJcUd8kEAkDIlCEpFkJA0RIVJkDrIIKUVWIxXIVqQG+RU5jJxEziMdyG3kIdKDvEY+oRhKRbVRQ9QSHY26oyw0FI1Bp6Bp6Ay0AC1Cl6PlaDW6B21AT6IX0etoJ/oC7ccApooxMBPMHnPH2FgEloSlYhJsHlaClWHVWB3WDJ/zVawT68U+4kScjjNxe7iCQ/BYnIfPwOfhy/AKfBfegLfiV/GHeB/+lUAjGBDsCJ4EDiGBkEaYSSgmlBF2EA4RTsN3qYvwjkgkMohWRDf4LiYSM4izicuIG4n1xBPEDuJjYj+JRNIj2ZG8SREkLimXVEzaQNpDOk66QuoifVBRVTFWcVIJUklSEakUqpSp7FY5pnJF5ZnKAFmDbEH2JEeQ+eRZ5BXk7eRm8mVyF3mAokmxonhTYigZlIWUckod5TTlHuWNqqqqqaqH6kRVoeoC1XLVfarnVB+qfqRqUW2pbOpkqpS6nLqTeoJ6m/qGRqNZ0vxoSbRc2nJaDe0U7QHtgxpdzUGNo8ZXm69WqdagdkXtpTpZ3UKdpT5VvUC9TP2A+mX1Xg2yhqUGW4OrMU+jUuOwxk2Nfk265hjNCM1szWWauzXPa3ZrkbQstQK1+FpFWtu0Tmk9pmN0MzqbzqMvom+nn6Z3aRO1rbQ52hnapdp7tdu0+3S0dJx14nTydSp1jup0MjCGJYPDyGKsYOxn3GB8GmE4gjVCMGLpiLoRV0a81x2p66cr0C3Rrde9rvtJj6kXqJept0qvUe++Pq5vqz9Rf6b+Jv3T+r0jtUd6jeSNLBm5f+QdA9TA1iDKYLbBNoNLBv2GRobBhmLDDYanDHuNGEZ+RhlGa42OGfUY0419jIXGa42PGz9n6jBZzCxmObOV2WdiYBJiIjXZatJmMmBqZRprWmhab3rfjGLmbpZqttasxazP3Nh8gvkc81rzOxZkC3eLdIv1Fmct3ltaWcZbLrZstOy20rXiWBVY1Vrds6ZZ+1rPsK62vmZDtHG3ybTZaNNui9q62KbbVtpetkPtXO2EdhvtOkYRRnmMEo2qHnXTnmrPss+zr7V/6MBwCHModGh0eDnafHTS6FWjz47+6ujimOW43fHuGK0x48cUjmke89rJ1onnVOl0bSxtbNDY+WObxr5ytnMWOG9yvuVCd5ngstilxeWLq5urxLXOtcfN3C3Zrcrtpru2e6T7MvdzHgQPf4/5Hkc8Pnq6euZ67vf8y8veK9Nrt1f3OKtxgnHbxz32NvXmem/17vRh+iT7bPHp9DXx5fpW+z7yM/Pj++3we8ayYWWw9rBe+jv6S/wP+b9ne7Lnsk8EYAHBASUBbYFagbGBFYEPgkyD0oJqg/qCXYJnB58IIYSEhqwKuckx5PA4NZy+8W7j545vDaWGRodWhD4Ksw2ThDVPQCeMn7Bmwr1wi3BReGMEiOBErIm4H2kVOSPyt4nEiZETKyc+jRoTNSfqbDQ9elr07uh3Mf4xK2LuxlrHSmNb4tTjJsfVxL2PD4hfHd+ZMDphbsLFRP1EYWJTEikpLmlHUv+kwEnrJnVNdplcPPnGFKsp+VPOT9WfmjX16DT1adxpB5IJyfHJu5M/cyO41dz+FE5KVUofj81bz3vB9+Ov5fcIvAWrBc9SvVNXp3aneaetSetJ900vS+8VsoUVwlcZIRmbM95nRmTuzPyWFZ9Vn62SnZx9WKQlyhS1Tjeanj+9Q2wnLhZ3zvCcsW5GnyRUsiMHyZmS05SrDTfyl6TW0p+kD/N88irzPsyMm3kgXzNflH9plu2spbOeFQQV/DIbn82b3TLHZM7COQ/nsuZunYfMS5nXMt9sftH8rgXBC3YtpCzMXPh7oWPh6sK3i+IXNRcZFi0oevxT8E+1xWrFkuKbi70Wb16CLxEuaVs6dumGpV9L+CUXSh1Ly0o/L+Mtu/DzmJ/Lf/62PHV52wrXFZtWEleKVt5Y5btq12rN1QWrH6+ZsKZhLXNtydq366atO1/mXLZ5PWW9dH1neVh50wbzDSs3fK5Ir7he6V9ZX2VQtbTq/Ub+xiub/DbVbTbcXLr50xbhlltbg7c2VFtWl20jbsvb9nR73Pazv7j/UrNDf0fpji87RTs7d0Xtaq1xq6nZbbB7RS1aK63t2TN5T/vegL1NdfZ1W+sZ9aX7wD7pvue/Jv96Y3/o/pYD7gfqDlocrDpEP1TSgDTMauhrTG/sbEps6jg8/nBLs1fzod8cftt5xORI5VGdoyuOUY4VHft2vOB4/wnxid6TaScft0xruXsq4dS11omtbadDT587E3Tm1FnW2ePnvM8dOe95/vAF9wuNF10vNlxyuXTod5ffD7W5tjVcdrvc1O7R3twxruPYFd8rJ68GXD1zjXPt4vXw6x03Ym/cujn5Zuct/q3u21m3X93JuzNwd8E9wr2S+xr3yx4YPKj+w+aP+k7XzqMPAx5eehT96O5j3uMXT3KefO4qekp7WvbM+FlNt1P3kZ6gnvbnk553vRC/GOgt/lPzz6qX1i8P/uX316W+hL6uV5JX314ve6P3Zudb57ct/ZH9D95lvxt4X/JB78Ouj+4fz36K//RsYOZn0ufyLzZfmr+Gfr33LfvbNzFXwpVvBTBY0dRUAF7vBICWCPcO8HxGmaQ4/8kLojizyhH4T1hxRpQXVwB2+gEQuwCAMLhH2QSrBcRU2Mq28DF+AB07dqgOntXk50pZIcJzwBYHGWrvevESDCuKM+cPcQ9vgUzVGQxv/wWTXXuiLt0OGwAAAIplWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOShgAHAAAAEgAAAHigAgAEAAAAAQAAAAKgAwAEAAAAAQAAAAIAAAAAQVNDSUkAAABTY3JlZW5zaG90dLUiigAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAdJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6VXNlckNvbW1lbnQ+U2NyZWVuc2hvdDwvZXhpZjpVc2VyQ29tbWVudD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+ChUnYskAAAAcaURPVAAAAAIAAAAAAAAAAQAAACgAAAABAAAAAQAAAETnAcQsAAAAEElEQVQYGWJU3vbxPwMQAAAAAP//hB8/WwAAAA5JREFUY1Te9vE/AxAAADqkBZU5/rJ3AAAAAElFTkSuQmCC";
  return [
    {
      image,
      page: totalPages,
      printRect: {
        x: 0,
        y: startingPt,
        width: 2.9155,
        height: 11.7 - startingPt,
      },
    },
  ];
}
