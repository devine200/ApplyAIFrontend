import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface EducationSectionProps {
  handleEditSection: (elemId: string) => void;
}

const EducationSection = ({ handleEditSection }: EducationSectionProps) => {
  const { education } = useSelector((state: RootState) => state.contentEditor);
  return (
    <div className="grid section editable-section">
      <div
        className="left editable-section"
        onClick={() => {
          handleEditSection(education.elementID);
        }}
      >
        <span className="editable-section">{education.title}</span>
      </div>
      {education.certifications.map(
        ({ school, course, degree, duration, relevantCourses, elementID }) => (
          <div
            key={uuidv4()}
            onClick={(e) => {
              e.stopPropagation();
              handleEditSection(elementID);
            }}
          >
            <h3>
              <span>{school}</span>
              <span className="right-align">{duration}</span>
            </h3>
            <em>
              {degree}, {course}
            </em>
            {relevantCourses && (
              <>
                <br />
                <em>{relevantCourses}</em>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default EducationSection;
