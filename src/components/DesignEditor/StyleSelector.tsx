import React from "react";

interface StyleSelectorProps {
  styleName: string;
  activeIndex: number;
  styleOptions?: string[];
}

const StyleSelector = ({ styleName, styleOptions, activeIndex }: StyleSelectorProps) => {
  return (
    <div className="style-selector-section">
      <div className="style-select-form">
        <h4>{styleName}</h4>
        <select className="select">
          {styleOptions &&
            styleOptions.map((option, index) => (
              <option value="arial" selected={index === activeIndex} key={index}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default StyleSelector;
