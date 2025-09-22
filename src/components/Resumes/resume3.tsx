import React from "react";
import "../../styles/Resume/resume3.css";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import type { ResumeProps } from "../../types";
import CustomSection from "./resume3/CustomSection";
import SkillsSection from "./resume3/SkillsSection";
import OutsideExperienceSection from "./resume3/OutsideExperienceSection";
import ProfessionalExperienceSection from "./resume3/ProfessionalExperienceSection";
import CertificationSection from "./resume3/CertificationSection";
import EducationSection from "./resume3/EducationSection";
import ProfessionalSummarySection from "./resume3/ProfessionalSummarySection";
import HeaderSection from "./resume3/HeaderSection";

const Resume3 = ({ handleEditSection, getDesignField, resumeTemplate  }: ResumeProps) => {
  const {
    header,
    professionalSummary,
    education,
    professionalExperiences,
    outsideExperiences,
    skills,
    certification,
    customSections,
    sectionSequenceIds,
  } = useSelector((state: RootState) => state.contentEditor);

  /* Extracting design styles */
  const { contentFormatFields, textFormatFields, layoutFields } = resumeTemplate;
  const skillLayoutStyle =
    getDesignField(contentFormatFields[1]) !== "listed"
      ? "not-listed"
      : "";
  const bulletIconStyle = `list-${
    getDesignField(contentFormatFields[0]).toLowerCase().split(" ")[1]
  }`;
  const fontFamilyStyle = getDesignField(textFormatFields[0]);
  const fontSizeStyle = `fs${getDesignField(textFormatFields[1])}`;
  const lineHeightStyle = getDesignField(textFormatFields[2]);
  const nameCapitalizedStyle =
    getDesignField(textFormatFields[3]) === "true"
      ? "uppercase"
      : "capitalize";
  const marginMetrics = {
    small: "20px",
    medium: "30px",
    large: "40px",
  };
  const marginSizeStyle = marginMetrics[getDesignField(layoutFields[1]).toLowerCase()];
  const headerAlignStyle = `${getDesignField(layoutFields[0]).toLowerCase()}-align`;

  const renderLayoutSequence = (sectId: string) => {
    switch (sectId) {
      case header.elementID:
        return React.createElement(HeaderSection, {
          handleEditSection,
          nameCapitalizedStyle,
        });
      case professionalSummary.elementID:
        return React.createElement(ProfessionalSummarySection, {handleEditSection});
      case education.elementID:
        return React.createElement(EducationSection, {handleEditSection});
      case certification.elementID:
        return React.createElement(CertificationSection, {handleEditSection});
      case professionalExperiences.elementID:
        return React.createElement(ProfessionalExperienceSection, {handleEditSection});
      case outsideExperiences.elementID:
        return React.createElement(OutsideExperienceSection, {handleEditSection});
      case skills.elementID:
        return React.createElement(SkillsSection, {handleEditSection});
      default:
        for (const customSection of customSections) {
          if (customSection.elementID === sectId) {
            return React.createElement(CustomSection, {
              content: customSection.content!,
              title: customSection.title,
              elementID: customSection.elementID,
              contentElementID: customSection.contentElementID,
              handleEditSection,
            });
          }
        }
    }
  };

  return (
    <div className={`resume3 page ${fontSizeStyle} ${skillLayoutStyle} ${bulletIconStyle} ${headerAlignStyle}`}
    style={{
      fontFamily: fontFamilyStyle,
      lineHeight: lineHeightStyle,
      paddingLeft: marginSizeStyle,
      paddingRight: marginSizeStyle,
    }}>
      {sectionSequenceIds.map(renderLayoutSequence)}
    </div>
  );
};

export default Resume3;
