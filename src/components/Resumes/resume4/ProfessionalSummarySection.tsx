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
    <div className="summary">
      <div
        className="section-title editable-section"
        onClick={() => {
          handleEditSection(professionalSummary.elementID);
        }}
        style={{ color: colorStyle }}
      >
        {professionalSummary.title}
      </div>
      <p
        className="editable-section"
        onClick={() => {
          handleEditSection(professionalSummary.contentElementID);
        }}
        dangerouslySetInnerHTML={{ __html: professionalSummary.content! }}
      >
      </p>
    </div>
  );
};

export default ProfessionalSummarySection;
