import React from "react";

const educationContent = [
  {
    year: "2017 - 2021",
    degree: "BACHELOR DEGREE ",
    institute: "ST. OLAF COLLEGE",
    details: ["Bachelor of Art in Computer Science and Mathematics",
      "Statistics and Data Science Concentration",
      "6th place Konhauser Mathematical Problem Fest 2020",
      "10th place Mathematical Association of America - North Central Section Team Competition 2018",
    ],
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
          <ul>
            {val.details.map((description, j) => (
              <li key={j}>
                <p className="open-sans-font">{description}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Education;
