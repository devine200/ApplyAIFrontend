import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface ProfessionalExperienceSectionProps {
    handleEditSection: (elemId: string) => void;
}

const ProfessionalExperienceSection = ({handleEditSection}:ProfessionalExperienceSectionProps) => {
    const {professionalExperiences} = useSelector((state: RootState) => state.contentEditor)
  return (
    <section className="section" aria-label="experience">
      <h2
        className="editable-section"
        onClick={() => {
          handleEditSection(professionalExperiences.elementID);
        }}
      >
        {professionalExperiences.title}
      </h2>

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
              className="exp-section editable-section"
              key={uuidv4()}
              onClick={() => {
                handleEditSection(elementID);
              }}
            >
              <div className="exp-header">
                <div>
                  <div className="role">{company}</div>
                  <div
                    className="meta editable-section"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSection(jobTitleElementID);
                    }}
                  >
                    {jobTitle}
                  </div>
                </div>

                <div>
                  <div className="role">City, Country</div>
                  <div className="meta">{duration}</div>
                </div>
              </div>
              <ul>
                {responsibilities
                  .filter(({ isHidden }) => !isHidden)
                  .map(({ value, elementID }) => (
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
    </section>
  );
};

export default ProfessionalExperienceSection;
