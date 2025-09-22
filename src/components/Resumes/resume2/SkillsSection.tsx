import React from "react";
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
    <>
      <h2 className="editable-section" style={{ color: colorStyle }}>
        Skills
      </h2>
      {skills.skills.map(({ categoryName, skills, elementID }) => (
        <p
          className="editable-section"
          onClick={(e) => {
            e.stopPropagation();
            handleEditSection(elementID);
          }}
        >
          <strong>{categoryName}:</strong> {skills.join(", ")}
        </p>
      ))}
      <p
        className="editable-section"
        onClick={() => {
          handleEditSection(skills.languagesElementID);
        }}
      >
        <strong>Languages:</strong> {skills.languages.join(", ")}
      </p>
      <p
        className="editable-section"
        onClick={() => {
          handleEditSection(skills.interestsElementID);
        }}
      >
        <strong>Interests:</strong> {skills.interests}
      </p>
    </>
  );
};

export default SkillsSection;
