import React from "react";

const experienceContent = [
  {
    year: "2020",
    position: "Suicide Rate Data Analysis Project",
    details: ["Performed exploratory data analysis using PowerBI data visualization to find 6 most relevant and impactful predictors for the data model.",
      "Investigated the data of more than 100 countries in 2015 and 2016 to discover the relationship between mental health facility densities and suicide rates of men and women",
    ],
  },
  {
    year: "2020",
    position: "Alcohol and Happiness Research Project",
    details: ["Designed an R script to clean empty values while retaining more than 80% of the data",
      "Examined the data of 122 countries in 2016 using R and linear regression to learn the relationship between alcohol consumption and happiness levels of citizens",
    ],
  },
  {
    year: "2019 - 2020",
    position: "Web Development Project",
    details: ["Maintained the Quiz Game web-app for professor Epstein to use in a 60-student musicology course",
      "Increased the test coverage by 50%, refactored the code base, and added features according to professors requests",
      "Resolved server-related issues and database problems during usage of the app including modifying Heroku deployment pipeline and adjusting NGINX configurations",
    ],
  },
  {
    year: "2020",
    position: "Video Game Strategy Analysis Research",
    details: ["Analyzed the data of more than 200,000 matches using R and compared between 10 different models, such as tree-based methods, KNN, and LDA, for drafting strategy of a multiplayer online game"
    ],
  },
];

const Experience = () => {
  return (
    <ul style={{columns: 2}}>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            {/* <span className="place open-sans-font">{val.compnayName}</span> */}
          </h5>
          {/* <p className="open-sans-font">{val.details}</p> */}
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

export default Experience;
