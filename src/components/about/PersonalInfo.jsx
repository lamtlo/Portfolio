import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Lam" },
  { meta: "last name", metaInfo: "Lo" },
  { meta: "Age", metaInfo: "22 Years" },
  { meta: "Nationality", metaInfo: "Vietnamese" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "442 Webster St, Palo ALto, CA" },
  { meta: "phone", metaInfo: "(507) 703-2093" },
  { meta: "Email", metaInfo: "lamtlo820@gmail.com" },
  { meta: "langages", metaInfo: "English, Vietnamese" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
