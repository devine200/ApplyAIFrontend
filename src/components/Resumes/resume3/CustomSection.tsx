import React from "react";

interface CustomSectionProps {
  contentElementID: string;
  elementID: string;
  content: string;
  title: string;
  handleEditSection: (elemId: string) => void;
}

const CustomSection = ({
  content,
  title,
  elementID,
  contentElementID,
  handleEditSection,
}: CustomSectionProps) => {
  return (
    <div className="grid section editable-section">
      <div
        className="left editable-section"
        onClick={() => {
          handleEditSection(elementID);
        }}
      >
        <span className="editable-section">{title}</span>
      </div>
      <div
        className="editable-section"
        onClick={() => {
          handleEditSection(contentElementID);
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default CustomSection;
