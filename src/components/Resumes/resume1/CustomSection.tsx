import React from "react";

interface CustomSectionProps {
    contentElementID: string;
    elementID: string;
    content: string;
    title: string;
    handleEditSection: (elemId:string) => void;
}

const CustomSection = ({content, title, elementID, contentElementID, handleEditSection }:CustomSectionProps) => {
  return (
    <section className="section" aria-label="education">
      <h2
        className="editable-section"
        onClick={() => {
          handleEditSection(elementID);
        }}
      >
        {title}
      </h2>
      <div
        className="edu-section editable-section"
        onClick={() => {
          handleEditSection(contentElementID);
        }}
        dangerouslySetInnerHTML={{ __html: content! }}
      ></div>
    </section>
  );
};

export default CustomSection;
