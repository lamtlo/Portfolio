import React, { useState, useEffect, useRef, createRef } from "react";
import CircularProgress from "./CircularProgress";

const skillsContent = [
  { skillMax: "80", skillPercent: "0", skillName: "PYTHON / DJANGO / FLASK" },
  { skillMax: "25", skillPercent: "0", skillName: "JAVASCRIPT / JQUERY / REACT" },
  { skillMax: "65", skillPercent: "0", skillName: "POWER BI / TABLEAU" },
  { skillMax: "55", skillPercent: "0", skillName: "R PROGRAMMING" },
  { skillMax: "40", skillPercent: "0", skillName: "C / C++" },
  { skillMax: "25", skillPercent: "0", skillName: "NGINX" },
  { skillMax: "45", skillPercent: "0", skillName: "HEROKU / DOCKER" },
  { skillMax: "55", skillPercent: "0", skillName: "SQL / POSTGRESQL" },
];

const Skills = () => {
  const arrLength = skillsContent.length;
  const [elRefs, setElRefs] = useState([]);

  const [progress, setProgress] = useState(Array(arrLength).fill(0));
  let new_progress = JSON.parse(JSON.stringify(progress));

  useEffect(() => {
    setElRefs((elRefs) =>
      Array(arrLength)
        .fill()
        .map((_, i) => elRefs[i] || createRef()),
    );

    const handleScroll = () => {
      const currentBottom = window.innerHeight;
      elRefs.forEach((item, i) => {
        if (item.current.getBoundingClientRect().bottom < currentBottom) {
          new_progress[i] = skillsContent[i].skillMax;
        }
        if (item.current.getBoundingClientRect().bottom > currentBottom) {
          new_progress[i] = 0;
        }
      })
      setProgress(new_progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [progress]);

  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i} align="center" ref={elRefs[i]}>
          <CircularProgress
            size={120}
            strokeWidth={10}
            percentage={progress[i]}
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
