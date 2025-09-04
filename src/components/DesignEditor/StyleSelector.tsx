import React from "react";

interface StyleSelectorProps {
  fieldIdx: number;
  styleName: string;
  activeIndex: number;
  styleOptions?: string[];
  onSelection?: (fieldIdx: number, selectedOptionIdx: number) => void;
}

const StyleSelector = ({ fieldIdx, styleName, styleOptions, activeIndex, onSelection }: StyleSelectorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(!onSelection) return;
    const selectedIdx = styleOptions?.indexOf(e.target.value) || 0
    onSelection(fieldIdx, selectedIdx)
  }

  return (
    <div className="style-selector-section">
      <div className="style-select-form">
        <h4>{styleName}</h4>
        <select className="select" defaultValue={ styleOptions && styleOptions[activeIndex]} onChange={handleChange}>
          {styleOptions &&
            styleOptions.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default StyleSelector;
