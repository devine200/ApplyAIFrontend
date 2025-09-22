import React from "react";
import ContentEditorHeader from "./ContentEditor/ContentEditorHeader";
import EditorTab from "./EditorTab";
import AddCustomSection from "./AddCustomSection";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import HeaderContentForm from "./ContentEditor/HeaderContentForm";
import ProfessionalSummaryForm from "./ContentEditor/ProfessionalSummaryForm";
import EducationContentForm from "./ContentEditor/EducationContentForm";
import CertificationForm from "./ContentEditor/CertificationForm";
import ProfessionalExperienceForm from "./ContentEditor/ProfessionalExperienceForm";
import OutsideExperienceForm from "./ContentEditor/OutsideExperienceForm";
import SkillsForm from "./ContentEditor/SkillsForm";
import CustomSectionForm from "./ContentEditor/CustomSectionForm";

const ContentEditorLayout = () => {
  const {
    customSections,
    header,
    professionalSummary,
    education,
    certification,
    professionalExperiences,
    outsideExperiences,
    skills,
    sectionSequenceIds,
  } = useSelector((state: RootState) => state.contentEditor);

  const renderLayoutSequence = (sectId: string) => {
    switch (sectId) {
      case header.elementID:
        return React.createElement(HeaderContentForm);
      case professionalSummary.elementID:
        return React.createElement(ProfessionalSummaryForm);
      case education.elementID:
        return React.createElement(EducationContentForm);
      case certification.elementID:
        return React.createElement(CertificationForm);
      case professionalExperiences.elementID:
        return React.createElement(ProfessionalExperienceForm);
      case outsideExperiences.elementID:
        return React.createElement(OutsideExperienceForm);
      case skills.elementID:
        return React.createElement(SkillsForm);
      default:
        for (const customSection of customSections) {
          if (customSection.elementID === sectId) {
            return React.createElement(CustomSectionForm, {
              idx: customSections.indexOf(customSection),
            });
          }
        }
    }
  };

  return (
    <div className="layout-section content-editor-layout">
      <EditorTab />
      <ContentEditorHeader />
      {sectionSequenceIds.map(renderLayoutSequence)}
      <AddCustomSection />
    </div>
  );
};

export default ContentEditorLayout;
