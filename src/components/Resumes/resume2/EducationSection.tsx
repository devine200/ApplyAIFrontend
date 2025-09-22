import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface EducationSectionProps {
  handleEditSection: (elemId: string) => void;
  colorStyle: string;
}

const EducationSection = ({ handleEditSection, colorStyle }: EducationSectionProps) => {
  const { education } = useSelector((state: RootState) => state.contentEditor);
  return (
    <>
      <h2
        className="editable-section"
        onClick={() => {
          handleEditSection(education.elementID);
        }}
        style={{ color: colorStyle }}
      >
        {education.title}
      </h2>
      {education.certifications.map(
        ({ school, course, degree, duration, relevantCourses, elementID }) => (
          <div
            className="row editable-section"
            key={uuidv4()}
            onClick={(e) => {
              e.stopPropagation();
              handleEditSection(elementID);
            }}
          >
            <p>
              <strong>{school}</strong>
              <br />
              <em>
                {degree}, {course}
              </em>
              <br />
              <em>{relevantCourses && relevantCourses}</em>
            </p>
            <p className="muted">
              <em>{duration}</em>
            </p>
          </div>
        )
      )}
    </>
  );
};

export default EducationSection;
