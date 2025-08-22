import React from "react";
import DeleteIcon from "../../../assets/icons/trash-bin.png";
import ReorderIcon from "../../../assets/icons/reorder.png";
import AIAssistIcon from "../../../assets/icons/shines.png";

const ExperienceItemInput = () => {
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
        defaultValue="Oversaw and optimized web services, smart contracts, and websites to maintain 99.9% uptime and seamless functionality, scaling backend services to support 1,000+ users during peak traffic"
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
