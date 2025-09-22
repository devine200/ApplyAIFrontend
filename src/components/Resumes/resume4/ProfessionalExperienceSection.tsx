import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface ProfessionalExperienceSectionProps {
  handleEditSection: (elemId: string) => void;
  colorStyle: string;
}

const ProfessionalExperienceSection = ({
  handleEditSection,
  colorStyle,
}: ProfessionalExperienceSectionProps) => {
  const { professionalExperiences } = useSelector(
    (state: RootState) => state.contentEditor
  );
  return (
    <div className="experience">
      <div
        className="section-title editable-section"
        onClick={() => {
          handleEditSection(professionalExperiences.elementID);
        }}
        style={{ color: colorStyle }}
      >
        {professionalExperiences.title}
      </div>

      {professionalExperiences.experiences.map(
        ({
          jobTitle,
          company,
          duration,
          responsibilities,
          elementID,
          jobTitleElementID,
        }) => {
          return (
            <div
              className="job editable-section"
              key={uuidv4()}
              onClick={() => {
                handleEditSection(elementID);
              }}
            >
              <h4>
                <span
                  className="editable-section"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditSection(jobTitleElementID);
                  }}
                >
                  {company} - {jobTitle}
                </span>
                <span>{duration}</span>
              </h4>
              <ul>
                {responsibilities.map(({ value, elementID }) => (
                  <li
                    className="editable-section"
                    key={uuidv4()}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSection(elementID);
                    }}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      )}
    </div>
  );
};

export default ProfessionalExperienceSection;
