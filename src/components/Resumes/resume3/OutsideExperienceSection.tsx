import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface OutsideExperienceSectionProps {
    handleEditSection: (elemId: string) => void;
}

const OutsideExperienceSection = ({handleEditSection}:OutsideExperienceSectionProps) => {
    const {outsideExperiences} = useSelector((state: RootState) => state.contentEditor)
  return (
    <div className="grid section">
      <div className="left">
        <span
          className="editable-section"
          onClick={() => {
            handleEditSection(outsideExperiences.elementID);
          }}
        >
          {outsideExperiences.title}
        </span>
      </div>
      <div>
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
                className="editable-section"
                onClick={() => {
                  handleEditSection(elementID);
                }}
              >
                <h3>
                  <span>{company} </span>
                  <span className="right-align">Remote | {duration}</span>
                </h3>
                <p
                  className="role editable-section"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditSection(jobTitleElementID);
                  }}
                >
                  {jobTitle}
                </p>
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
    </div>
  );
};

export default OutsideExperienceSection;
