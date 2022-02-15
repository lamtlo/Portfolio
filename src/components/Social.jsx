import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/lam-lo-877b4414a/",
  },
  { iconName: "fa fa-kaggle", link: "https://twitter.com/" },
  {
    iconName: "fa fa-github",
    link: "https://github.com/lamtlo/",
  },
  { iconName: "fa fa-skype", link: "https://join.skype.com/invite/sxyTctSV9yB0" },
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
