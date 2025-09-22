import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface ProfessionalSummarySectionProps {
  handleEditSection: (elemId: string) => void;
}

const ProfessionalSummarySection = ({
  handleEditSection,
}: ProfessionalSummarySectionProps) => {
  const { professionalSummary } = useSelector(
    (state: RootState) => state.contentEditor
  );
  return (
    <div className="grid section">
      <div className="left">
        <span
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalSummary.elementID);
          }}
        >
          {professionalSummary.title}
        </span>
      </div>
      <div
        className="editable-section"
        onClick={() => {
          handleEditSection(professionalSummary.contentElementID);
        }}
        dangerouslySetInnerHTML={{ __html: professionalSummary.content! }}
        >
      </div>
    </div>
  );
};

export default ProfessionalSummarySection;
