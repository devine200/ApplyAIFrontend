import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface CertificationSectionProps {
    handleEditSection: (elemId: string) => void;
    colorStyle: string;
}

const CertificationSection = ({handleEditSection, colorStyle}:CertificationSectionProps) => {
    const {certification} = useSelector((state: RootState) => state.contentEditor)
  return (
    certification.content && (
      <div className="education">
        <div
          className="section-title editable-section"
          onClick={() => {
            handleEditSection(certification.elementID);
          }}
          style={{color: colorStyle}}
        >
          {certification.title}
        </div>
        <div
          className="editable-section"
          key={uuidv4()}
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
