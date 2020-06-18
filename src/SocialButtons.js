import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialButtons = () => {
  return (
    <div className="Social-container">
      <div className="Social-box">
        <SocialIcon url="https://www.linkedin.com/in/scottkutler/" />
      </div>

      <div className="Social-box">
        <SocialIcon url="https://www.facebook.com/scottkutler" />
      </div>
      <div className="Social-box">
        <SocialIcon url="https://www.github.com/skut21x-ga" />
      </div>
    </div>
  );
};

export default SocialButtons;
