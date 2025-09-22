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
    <section className="section" aria-label="education">
      <h2
        className="editable-section"
        onClick={() => {
          handleEditSection(education.elementID);
        }}
      >
        {education.title}
      </h2>
      {education.certifications.map(
        ({ school, course, degree, duration, relevantCourses, elementID }) => (
          <div
            className="edu-section editable-section"
            key={uuidv4()}
            onClick={(e) => {
              console.log(elementID);
              e.stopPropagation();
              handleEditSection(elementID);
            }}
          >
            <div className="edu-school-info">
              <span className="school-name">{school}</span>
              <span className="meta">
                {degree}, {course}
              </span>
              {relevantCourses && (
                <span
                  dangerouslySetInnerHTML={{ __html: relevantCourses }}
                ></span>
              )}
            </div>

            <div>
              <span className="edu-duration">{duration}</span>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default EducationSection;
