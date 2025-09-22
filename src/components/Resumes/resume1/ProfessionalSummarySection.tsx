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
    <section className="section" aria-label="summary">
      <h2
        className="editable-section"
        onClick={() => {
          handleEditSection(professionalSummary.elementID);
        }}
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
        {/* {professionalSummary.content} */}
      </p>
    </section>
  );
};

export default ProfessionalSummarySection;
