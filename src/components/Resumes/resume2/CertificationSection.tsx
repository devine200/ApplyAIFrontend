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
      <>
        <h2
          className="editable-section"
          onClick={() => {
            handleEditSection(certification.elementID);
          }}
          style={{color: colorStyle}}
        >
          {certification.title}
        </h2>
        <div
          className="row editable-section"
          key={uuidv4()}
          onClick={() => {
            handleEditSection(certification.contentElementID);
          }}
          dangerouslySetInnerHTML={{ __html: certification.content! }}
        >
        </div>
      </>
    )
  );
};

export default CertificationSection;
