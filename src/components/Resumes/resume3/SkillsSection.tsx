import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface SkillsSectionProps {
    handleEditSection: (elemId: string) => void;
}

const SkillsSection = ({handleEditSection}: SkillsSectionProps) => {
    const {skills} = useSelector((state: RootState) => state.contentEditor)
  return (
    <>
      <div
        className="grid section editable-section"
        onClick={() => {
          handleEditSection(skills.elementID);
        }}
      >
        <div className="left editable-section">Skills</div>
        <div className="skills-section">
          {skills.skills.map(({ categoryName, skills, elementID }) => (
            <div
              className="editable-section"
              key={uuidv4()}
              onClick={(e) => {
                e.stopPropagation();
                handleEditSection(elementID);
              }}
            >
              <strong>{categoryName}:</strong> {skills.join(", ")}
            </div>
          ))}
        </div>
      </div>

      <div
        className="grid section editable-section"
        onClick={() => {
          handleEditSection(skills.languagesElementID);
        }}
      >
        <div className="left">Languages</div>
        <div>{skills.languages.join(", ")}</div>
      </div>
      
      <div
        className="grid section editable-section"
        onClick={() => {
          handleEditSection(skills.interestsElementID);
        }}
      >
        <div className="left">Interests</div>
        <div>{skills.interests}</div>
      </div>
    </>
  );
};

export default SkillsSection;
