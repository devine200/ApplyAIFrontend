import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface SkillsSectionProps {
  handleEditSection: (elemId: string) => void;
  colorStyle: string;
}

const SkillsSection = ({
  handleEditSection,
  colorStyle,
}: SkillsSectionProps) => {
  const { skills } = useSelector((state: RootState) => state.contentEditor);
  return (
    <div className="skills">
      <div
        className="section-title editable-section"
        onClick={() => {
          handleEditSection(skills.elementID);
        }}
        style={{ color: colorStyle }}
      >
        Skills
      </div>
      {skills.skills.map(({ categoryName, skills, elementID }) => (
        <p
          className="skills-list editable-section"
          key={uuidv4()}
          onClick={() => {
            handleEditSection(elementID);
          }}
        >
          <strong>{categoryName}: </strong>
          {skills.join(", ")}
        </p>
      ))}
    </div>
  );
};

export default SkillsSection;
