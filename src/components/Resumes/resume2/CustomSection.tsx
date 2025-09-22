import React from "react";
import { v4 as uuidv4 } from "uuid";

interface CustomSectionProps {
  contentElementID: string;
  elementID: string;
  content: string;
  title: string;
  colorStyle: string;
  handleEditSection: (elemId: string) => void;
}

const CustomSection = ({
  content,
  title,
  elementID,
  contentElementID,
  handleEditSection,
  colorStyle,
}: CustomSectionProps) => {
  return (
    <>
      <h2
        className="editable-section"
        onClick={() => {
          handleEditSection(elementID);
        }}
        style={{ color: colorStyle }}
      >
        {title}
      </h2>
      <div
        className="row editable-section"
        key={uuidv4()}
        onClick={() => {
          handleEditSection(contentElementID);
        }}
        dangerouslySetInnerHTML={{ __html: content! }}
      ></div>
    </>
  );
};

export default CustomSection;
