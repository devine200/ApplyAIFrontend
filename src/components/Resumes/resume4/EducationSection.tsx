import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface EducationSectionProps {
  handleEditSection: (elemId: string) => void;
  colorStyle: string;
}

const EducationSection = ({
  handleEditSection,
  colorStyle,
}: EducationSectionProps) => {
  const { education } = useSelector((state: RootState) => state.contentEditor);
  return (
    <div className="education">
      <div
        className="section-title editable-section"
        onClick={() => {
          handleEditSection(education.elementID);
        }}
        style={{ color: colorStyle }}
      >
        {education.title}
      </div>
      {education.certifications.map(
        ({ school, course, degree, duration, relevantCourses, elementID }) => (
          <div
            className="editable-section"
            key={uuidv4()}
            onClick={(e) => {
              e.stopPropagation();
              handleEditSection(elementID);
            }}
          >
            <p>
              <strong>{school}</strong> <span>{duration}</span>
            </p>
            <p>
              {degree}, {course}
            </p>
            {relevantCourses && <p>{relevantCourses}</p>}
          </div>
        )
      )}
    </div>
  );
};

export default EducationSection;
