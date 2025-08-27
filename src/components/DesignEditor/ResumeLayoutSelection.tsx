import React from "react";
import ResumeImage from "../../assets/icons/resume.png";
import CheckIcon from "../../assets/icons/check.png";

export interface ColorOption {
  color: string;
  isActive: boolean;
}

interface ResumeLayoutSelectionProps {
  index: number;
  colorOptions?: [ColorOption, ColorOption, ColorOption, ColorOption];
  isActive?: boolean;
  templateName: string;
  templateImg: string;
  onSelect?: (index: number) => void;
  onColorSelect?: (index: number) => void;
}

const ResumeLayoutSelection = ({
  index,
  templateName,
  templateImg,
  isActive,
  colorOptions,
  onSelect,
  onColorSelect,
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
          {colorOptions.map(({color, isActive}, index) => (
            <button
              className={`color-selection pointer ${isActive ? "active-color" : ""}`}
              style={{ background: color }}
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
