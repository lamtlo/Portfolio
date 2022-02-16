import React from "react";
import CircularProgress from "./CircularProgress";

const skillsContent = [
  { skillClass: "p80", skillPercent: "80", skillName: "PYTHON / DJANGO / FLASK" },
  { skillClass: "p25", skillPercent: "25", skillName: "JAVASCRIPT / JQUERY / REACT" },
  { skillClass: "p65", skillPercent: "65", skillName: "POWER BI / TABLEAU" },
  { skillClass: "p55", skillPercent: "55", skillName: "R PROGRAMMING" },
  { skillClass: "p40", skillPercent: "40", skillName: "C / C++" },
  { skillClass: "p25", skillPercent: "25", skillName: "NGINX" },
  { skillClass: "p45", skillPercent: "45", skillName: "HEROKU / DOCKER" },
  { skillClass: "p55", skillPercent: "55", skillName: "SQL / POSTGRESQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i} align="center">
          {/* <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div> */}

          <CircularProgress
            size={120}
            strokeWidth={10}
            percentage={val.skillPercent}
          />

          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
