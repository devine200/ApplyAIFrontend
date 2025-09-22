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
      <div className="grid section editable-section">
        <div
          className="left editable-section"
          onClick={() => {
            handleEditSection(certification.elementID);
          }}
        >
          <span className="editable-section">{certification.title}</span>
        </div>
        <div
          className="editable-section"
          onClick={() => {
            handleEditSection(certification.contentElementID);
          }}
        >
          {certification.content}
        </div>
      </div>
    )
  );
};

export default CertificationSection;
