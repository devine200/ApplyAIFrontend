import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface ProfessionalExperienceSectionProps {
    handleEditSection: (elemId: string) => void;
    colorStyle: string;
}

const ProfessionalExperienceSection = ({handleEditSection, colorStyle}:ProfessionalExperienceSectionProps) => {
    const {professionalExperiences} = useSelector((state: RootState) => state.contentEditor)
  return (
    <>
      <h2
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalExperiences.elementID);
          }}
          style={{color: colorStyle}}
        >
          {professionalExperiences.title}
        </h2>

        {professionalExperiences.experiences.map(
          ({
            jobTitle,
            company,
            duration,
            responsibilities,
            jobTitleElementID,
            elementID,
          }) => {
            return (
              <div
                className="job editable-section"
                key={uuidv4()}
                onClick={() => {
                  handleEditSection(elementID);
                }}
              >
                <div className="row job-header">
                  <div className="left">
                    <strong>{company}</strong>
                    <br />
                    <em
                      className="editable-section"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditSection(jobTitleElementID);
                      }}
                    >
                      {jobTitle}
                    </em>
                  </div>
                  <div className="right">
                    <strong>City, Country</strong>
                    <br />
                    <em>{duration}</em>
                  </div>
                </div>
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
    </>
  );
};

export default ProfessionalExperienceSection;
