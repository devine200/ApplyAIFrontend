import React from "react";
import "../../styles/Resume/resume4.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ResumeProps } from "../../types";
import HeaderSection from "./resume4/HeaderSection";
import ProfessionalSummarySection from "./resume4/ProfessionalSummarySection";
import EducationSection from "./resume4/EducationSection";
import CertificationSection from "./resume4/CertificationSection";
import ProfessionalExperienceSection from "./resume4/ProfessionalExperienceSection";
import OutsideExperienceSection from "./resume4/OutsideExperienceSection";
import SkillsSection from "./resume4/SkillsSection";
import CustomSection from "./resume4/CustomSection";

const Resume4 = ({
  handleEditSection,
  getDesignField,
  resumeTemplate,
}: ResumeProps) => {
  const {
    header,
    professionalSummary,
    education,
    professionalExperiences,
    outsideExperiences,
    skills,
    certification,
    customSections,
    sectionSequenceIds
  } = useSelector((state: RootState) => state.contentEditor);

  /* Extracting design styles */
  const {
    contentFormatFields,
    textFormatFields,
    layoutFields,
    templateSelection,
  } = resumeTemplate;
  const skillLayoutStyle =
    getDesignField(contentFormatFields[1]) !== "listed" ? "not-listed" : "";
  const bulletIconStyle = `list-${
    getDesignField(contentFormatFields[0]).toLowerCase().split(" ")[1]
  }`;
  const fontFamilyStyle = getDesignField(textFormatFields[0]);
  const fontSizeStyle = `fs${getDesignField(textFormatFields[1])}`;
  const lineHeightStyle = getDesignField(textFormatFields[2]);
  const nameCapitalizedStyle =
    getDesignField(textFormatFields[3]) === "true" ? "uppercase" : "capitalize";

  const headerAlignStyle = `${getDesignField(
    layoutFields[0]
  ).toLowerCase()}-align`;
  const colorStyle =
    templateSelection.colors![templateSelection.selectedColorIdx!];

  const renderLayoutSequence = (sectId: string) => {
    switch (sectId) {
      case header.elementID:
        return React.createElement(HeaderSection, {
          handleEditSection,
          nameCapitalizedStyle,
          colorStyle,
        });
      case professionalSummary.elementID:
        return React.createElement(ProfessionalSummarySection, {
          handleEditSection,
          colorStyle,
        });
      case education.elementID:
        return React.createElement(EducationSection, {
          handleEditSection,
          colorStyle,
        });
      case certification.elementID:
        return React.createElement(CertificationSection, {
          handleEditSection,
          colorStyle,
        });
      case professionalExperiences.elementID:
        return React.createElement(ProfessionalExperienceSection, {
          handleEditSection,
          colorStyle,
        });
      case outsideExperiences.elementID:
        return React.createElement(OutsideExperienceSection, {
          handleEditSection,
          colorStyle,
        });
      case skills.elementID:
        return React.createElement(SkillsSection, {
          handleEditSection,
          colorStyle,
        });
      default:
        for (const customSection of customSections) {
          if (customSection.elementID === sectId) {
            return React.createElement(CustomSection, {
              content: customSection.content!,
              title: customSection.title,
              elementID: customSection.elementID,
              contentElementID: customSection.contentElementID,
              handleEditSection,
              colorStyle,
            });
          }
        }
    }
  };

  return (
    <div
      className={`container page resume4 ${fontSizeStyle} ${skillLayoutStyle} ${bulletIconStyle} ${headerAlignStyle}`}
      style={{
        fontFamily: fontFamilyStyle,
        lineHeight: lineHeightStyle,
      }}
    >
      {renderLayoutSequence(sectionSequenceIds[0])}

      <div className="main">
        {sectionSequenceIds.slice(1).map(renderLayoutSequence)}
      </div>
    </div>
  );
};

export default Resume4;
