import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface ProfessionalSummarySectionProps {
  handleEditSection: (elemId: string) => void;
  colorStyle: string;
}

const ProfessionalSummarySection = ({
  handleEditSection,
  colorStyle,
}: ProfessionalSummarySectionProps) => {
  const { professionalSummary } = useSelector(
    (state: RootState) => state.contentEditor
  );
  return (
    <>
      <h2
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalSummary.elementID);
          }}
          style={{color: colorStyle}}
        >
          {professionalSummary.title}
        </h2>
        <p
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalSummary.contentElementID);
          }}
          dangerouslySetInnerHTML={{ __html: professionalSummary.content! }}
        >
        </p>
    </>
  );
};

export default ProfessionalSummarySection;
