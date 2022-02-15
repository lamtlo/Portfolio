import React from "react";

const personalInfoContent = [
  { meta: "Full Name", metaInfo: "Lam T. Lo" },
  { meta: "Friends Call Me", metaInfo: "Teddy" },
  { meta: "Age", metaInfo: new Date().getFullYear() - 1999},
  { meta: "Nationality", metaInfo: "Vietnamese" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "442 Webster St, Palo ALto, CA" },
  { meta: "Phone", metaInfo: "(507) 703-2093" },
  { meta: "Email", metaInfo: "lamtlo820@gmail.com" },
  { meta: "Langages", metaInfo: "English, Vietnamese" },
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
