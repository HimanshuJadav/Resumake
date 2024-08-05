const arrMultipleItemHolder = [
  "employment-history",
  "education-history",
  "skills",
  "links",
  "internship-history",
];

const arrCustomSections = ["hobbies", "internship-history"];

const ElementTypeEnum = {
  EMPLOYMENT: { name: "employment-history", value: "employment" },
  LINKS: { name: "links", value: "links" },
  EDUCATION: { name: "education-history", value: "education" },
  SKILLS: { name: "skills", value: "skills" },
  INTERNSHIP: { name: "internship-history", value: "internship" },
  HOBBIES: { name: "hobbies", value: "hobbies-editor" },
  EXTRACURRICULAR: {
    name: "extra-curricular-activities",
    value: "extra-curricular-activity",
  },
};

function getElementTypeFrom(name) {
  switch (name) {
    case ElementTypeEnum.EMPLOYMENT.name:
      return ElementTypeEnum.EMPLOYMENT;
    case ElementTypeEnum.LINKS.name:
      return ElementTypeEnum.LINKS;
    case ElementTypeEnum.EDUCATION.name:
      return ElementTypeEnum.EDUCATION;
    case ElementTypeEnum.SKILLS.name:
      return ElementTypeEnum.SKILLS;
    case ElementTypeEnum.INTERNSHIP.name:
      return ElementTypeEnum.INTERNSHIP;
    case ElementTypeEnum.HOBBIES.name:
      return ElementTypeEnum.HOBBIES;
    default:
      break;
  }
}
