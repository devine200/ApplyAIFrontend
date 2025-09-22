import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface OutsideExperienceSectionProps {
  handleEditSection: (elemId: string) => void;
  colorStyle: string;
}

const OutsideExperienceSection = ({
  handleEditSection,
  colorStyle,
}: OutsideExperienceSectionProps) => {
  const { outsideExperiences } = useSelector(
    (state: RootState) => state.contentEditor
  );
  return (
    <div className="projects">
      <div
        className="section-title editable-section"
        onClick={() => {
          handleEditSection(outsideExperiences.elementID);
        }}
        style={{ color: colorStyle }}
      >
        {outsideExperiences.title}
      </div>

      {outsideExperiences.experiences.map(
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

export default OutsideExperienceSection;
