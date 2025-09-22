import React from "react";
import "../../styles/Resume/resume2.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ResumeProps } from "../../types";
import ProfessionalSummarySection from "./resume2/ProfessionalSummarySection";
import EducationSection from "./resume2/EducationSection";
import CertificationSection from "./resume2/CertificationSection";
import ProfessionalExperienceSection from "./resume2/ProfessionalExperienceSection";
import OutsideExperienceSection from "./resume2/OutsideExperienceSection";
import SkillsSection from "./resume2/SkillsSection";
import CustomSection from "./resume2/CustomSection";
import HeaderSection from "./resume2/HeaderSection";

const Resume2 = ({
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
    sectionSequenceIds,
    customSections
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
  const marginMetrics = {
    small: "20px",
    medium: "30px",
    large: "40px",
  };
  const marginSizeStyle = marginMetrics[getDesignField(layoutFields[1]).toLowerCase()];
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
          marginSizeStyle,
          colorStyle
        });
      case professionalSummary.elementID:
        return React.createElement(ProfessionalSummarySection, {handleEditSection, colorStyle});
      case education.elementID:
        return React.createElement(EducationSection, {handleEditSection, colorStyle});
      case certification.elementID:
        return React.createElement(CertificationSection, {handleEditSection, colorStyle});
      case professionalExperiences.elementID:
        return React.createElement(ProfessionalExperienceSection, {handleEditSection, colorStyle});
      case outsideExperiences.elementID:
        return React.createElement(OutsideExperienceSection, {handleEditSection, colorStyle});
      case skills.elementID:
        return React.createElement(SkillsSection, {handleEditSection, colorStyle});
      default:
        for (const customSection of customSections) {
          if (customSection.elementID === sectId) {
            return React.createElement(CustomSection, {
              content: customSection.content!,
              title: customSection.title,
              elementID: customSection.elementID,
              contentElementID: customSection.contentElementID,
              handleEditSection,
              colorStyle
            });
          }
        }
    }
  };

  return (
    <div
      className={`container resume2 page ${fontSizeStyle} ${skillLayoutStyle} ${bulletIconStyle} ${headerAlignStyle}`}
      style={{
        fontFamily: fontFamilyStyle,
        lineHeight: lineHeightStyle,
      }}
    >
      {renderLayoutSequence(sectionSequenceIds[0])}
      <div
        className="resume2-body"
        style={{
          paddingLeft: marginSizeStyle,
          paddingRight: marginSizeStyle,
        }}
      >
        {sectionSequenceIds.slice(1).map(renderLayoutSequence)}
      </div>
    </div>
  );
};

export default Resume2;
