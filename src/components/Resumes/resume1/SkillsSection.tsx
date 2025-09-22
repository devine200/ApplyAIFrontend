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
    <section className="section" aria-label="skills">
      <h2
        className="editable-section"
        onClick={() => {
          handleEditSection(skills.elementID);
        }}
      >
        Skills
      </h2>
      {!skills.isSkillsHidden &&
        skills.skills.map(({ categoryName, skills, elementID }) => (
          <div
            className="skill-section editable-section"
            key={uuidv4()}
            onClick={(e) => {
              e.stopPropagation();
              handleEditSection(elementID);
            }}
          >
            <span className="topic">{categoryName}:</span>
            <ul className="skills">
              {skills.map((skill) => (
                <li key={uuidv4()}>{skill},</li>
              ))}
            </ul>
          </div>
        ))}

      {skills.languages.length > 0 && !skills.isLanguageHidden && (
        <div
          className="skill-section editable-section"
          onClick={(e) => {
            e.stopPropagation();
            handleEditSection(skills.languagesElementID);
          }}
        >
          <span className="topic">Languages:</span>
          <ul className="skills">
            {skills.languages.map((language) => (
              <li key={uuidv4()}>{language},</li>
            ))}
          </ul>
        </div>
      )}
      {skills.interests && !skills.isInterestsHidden && (
        <div
          className="skill-section editable-section"
          onClick={(e) => {
            e.stopPropagation();
            handleEditSection(skills.interestsElementID);
          }}
        >
          <span className="topic">Interests:</span>
          <p className="skills">{skills.interests}</p>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
