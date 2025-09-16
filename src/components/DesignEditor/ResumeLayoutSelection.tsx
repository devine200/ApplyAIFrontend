import React from "react";
import ResumeImage from "../../assets/icons/resume.png";
import CheckIcon from "../../assets/icons/check.png";
import { v4 as uuidv4 } from "uuid";

interface ResumeLayoutSelectionProps {
  index: number;
  colorOptions?: [string, string, string, string];
  templateName: string;
  templateImg: string;
  activeColorIdx?: number;
  isActive: boolean;
  onSelect?: (index: number) => void;
  onColorSelect?: (index: number) => void;
}

const ResumeLayoutSelection = ({
  index,
  templateName,
  templateImg,
  colorOptions,
  onSelect,
  onColorSelect,
  activeColorIdx,
  isActive,
}: ResumeLayoutSelectionProps) => {
  const handleSelect = () => {
    if (!onSelect) return;
    onSelect(index);
  };

  const handleColorSelect = (index: number) => {
    if (!onColorSelect) return;
    onColorSelect(index);
  }

  return (
    <div
      className={`layout-selection-item ${isActive ? "active-layout" : ""}`}
      onClick={handleSelect}
    >
      <h5 className="template-name">{templateName}</h5>
      <img
        src={templateImg ? templateImg : ResumeImage}
        alt="resume template image"
        className="resume-img"
      />
      {colorOptions && isActive ? (
        <div className="floating-color-selector">
          {colorOptions.map((color, index) => (
            <button
              className={`color-selection pointer ${activeColorIdx === index ? "active-color" : ""}`}
              style={{ background: color }}
              key={uuidv4()}
              onClick={()=> {
                handleColorSelect(index);
              }}
            ></button>
          ))}
        </div>
      ) : (
        <></>
      )}
      <span className="check-mark">
        <img src={CheckIcon} alt="active icon" />
      </span>
    </div>
  );
};

export default ResumeLayoutSelection;
