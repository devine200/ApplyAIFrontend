import React from "react";
import DeleteIcon from "../../../assets/icons/trash-bin.png";
import ReorderIcon from "../../../assets/icons/reorder.png";
import AIAssistIcon from "../../../assets/icons/shines.png";

interface ExperienceItemInputProps {
  responsibility?: string;
}

const ExperienceItemInput = ({responsibility}: ExperienceItemInputProps) => {
  return (
    <div className="exp-item-input">
      <button className="icon-btn pointer">
        <img src={ReorderIcon} alt="reorder icon" />
      </button>
      <input type="checkbox" defaultChecked={true} className="pointer" />
      <input
        type="text"
        step={1}
        className="highlight-input"
        defaultValue={responsibility}
      />
      <button className="icon-btn pointer ai-assist-btn">
        <img src={AIAssistIcon} alt="ai assist icon" />
      </button>
      <button className="icon-btn pointer">
        <img src={DeleteIcon} alt="detele icon" />
      </button>
    </div>
  );
};

export default ExperienceItemInput;
