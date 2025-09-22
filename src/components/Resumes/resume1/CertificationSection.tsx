import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface CertificationSectionProps {
    handleEditSection: (elemId: string) => void;
}

const CertificationSection = ({handleEditSection}:CertificationSectionProps) => {
    const {certification} = useSelector((state: RootState) => state.contentEditor)
  return (
    certification.content && (
      <section className="section" aria-label="education">
        <h2
          className="editable-section"
          onClick={() => {
            handleEditSection(certification.elementID);
          }}
        >
          {certification.title}
        </h2>
        <div
          className="edu-section editable-section"
          onClick={() => {
            handleEditSection(certification.contentElementID);
          }}
          dangerouslySetInnerHTML={{ __html: certification.content! }}
        ></div>
      </section>
    )
  );
};

export default CertificationSection;
