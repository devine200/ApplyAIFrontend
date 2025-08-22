import React from "react";
import SettingsIcon from "../../assets/icons/gears.png";
import SuggestIcon from "../../assets/icons/shines.png";

const AIHelperBtn = () => {
  return (
    <div className="ai-helper-btns">
      <button className="ai-settings icon-btn pointer">
        <img src={SettingsIcon} alt="ai-setting" />
        <span>AI Settings</span>
      </button>
      <button className="ai-suggest icon-btn pointer">
        <img src={SuggestIcon} alt="ai-suggest" />
        <span>Rewrite with AI Suggestions</span>
      </button>
    </div>
  );
};

export default AIHelperBtn;
