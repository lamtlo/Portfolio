import React from "react";

const educationContent = [
  {
    year: "2015",
    degree: "ENGINEERING DEGREE",
    institute: "OXFORD UNIVERSITY",
    details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        adipisicing elit`,
  },
  {
    year: "2012",
    degree: "MASTER DEGREE",
    institute: "KIEV UNIVERSITY",
    details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        elit, tempor incididunt`,
  },
  {
    year: "2017 - 2021",
    degree: "BACHELOR DEGREE ",
    institute: "ST. OLAF COLLEGE",
    details: `Bachelor of Art in Computer Science and Mathematics`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
