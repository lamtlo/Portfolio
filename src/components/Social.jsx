import React from "react";

const SocialShare = [
  {
    iconName: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/lam-lo-877b4414a/",
  },
  { iconName: "fa-brands fa-kaggle", link: "https://www.kaggle.com/lamtlo" },
  {
    iconName: "fa-brands fa-github",
    link: "https://github.com/lamtlo/",
  },
  { iconName: "fa-brands fa-skype", link: "https://join.skype.com/invite/sxyTctSV9yB0" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
