import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../../styles/Resume/resume4.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ResumeProps } from "../../types";

const Resume4 = ({ handleEditSection, getDesignField, resumeTemplate  }: ResumeProps) => {
  const {
    name,
    header,
    professionalSummary,
    education,
    professionalExperiences,
    outsideExperiences,
    skills,
    certification,
  } = useSelector((state: RootState) => state.contentEditor);

  /* Extracting design styles */
  const { contentFormatFields, textFormatFields, layoutFields, templateSelection } = resumeTemplate;
  const skillLayoutStyle =
    getDesignField(contentFormatFields[1]) !== "listed"
      ? "not-listed"
      : "";
  const bulletIconStyle = `list-${
    getDesignField(contentFormatFields[0]).toLowerCase().split(" ")[1]
  }`;
  const fontFamilyStyle = getDesignField(textFormatFields[0]);
  const fontSizeStyle = `fs${getDesignField(textFormatFields[1])}`;
  const lineHeightStyle = getDesignField(textFormatFields[2]);
  const nameCapitalizedStyle =
    getDesignField(textFormatFields[3]) === "true"
      ? "uppercase"
      : "capitalize";
  const marginMetrics = {
    small: "20px",
    medium: "30px",
    large: "40px",
  };
  const marginSizeStyle = marginMetrics[getDesignField(layoutFields[1]).toLowerCase()];
  const headerAlignStyle = `${getDesignField(layoutFields[0]).toLowerCase()}-align`;
  const colorStyle = templateSelection.colors![templateSelection.selectedColorIdx!];

  return (
    <div className={`container page resume4 ${fontSizeStyle} ${skillLayoutStyle} ${bulletIconStyle} ${headerAlignStyle}`}
    style={{
      fontFamily: fontFamilyStyle,
      lineHeight: lineHeightStyle,
    }}>
      <div className="sidebar" style={{background: colorStyle}}>
        <div className="header">
          <h1 style={{ textTransform: nameCapitalizedStyle }}>{name}</h1>
          <div
            className="editable-section"
            onClick={() => {
              console.log("clicking");
              handleEditSection(header.elementID);
            }}
          >
            <p key={uuidv4()}>
              <a className="no-underline">{header.location.value}</a>
            </p>
            {header.contactInfos.map(({ name, value, link }) => {
              return (
                <p key={uuidv4()}>
                  <a className="no-underline">
                    {link && name.toLowerCase() !== "email"
                      ? link
                        ? link
                        : value
                      : value}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
        <div
          className="editable-section"
          onClick={() => {
            handleEditSection(skills.languagesElementID);
          }}
        >
          <h3>Languages</h3>
          <p>{skills.languages.join(", ")}</p>
        </div>
        <div
          className="editable-section"
          onClick={() => {
            handleEditSection(skills.interestsElementID);
          }}
        >
          <h3>Interests</h3>
          <p>{skills.interests}</p>
        </div>
      </div>

      <div className="main">
        <div className="summary">
          <div
            className="section-title editable-section"
            onClick={() => {
              handleEditSection(professionalSummary.elementID);
            }}
            style={{color: colorStyle}}
          >
            {professionalSummary.title}
          </div>
          <p
            className="editable-section"
            onClick={() => {
              handleEditSection(professionalSummary.contentElementID);
            }}
          >
            {professionalSummary.content}
          </p>
        </div>

        <div className="education">
          <div
            className="section-title editable-section"
            onClick={() => {
              handleEditSection(education.elementID);
            }}
            style={{color: colorStyle}}
          >
            {education.title}
          </div>
          {education.certifications.map(
            ({
              school,
              course,
              degree,
              duration,
              relevantCourses,
              elementID,
            }) => (
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

        {certification.content && (
          <div className="education">
            <div
              className="section-title editable-section"
              onClick={() => {
                handleEditSection(certification.elementID);
              }}
              style={{color: colorStyle}}
            >
              {certification.title}
            </div>
            <div
              className="editable-section"
              key={uuidv4()}
              onClick={() => {
                handleEditSection(certification.contentElementID);
              }}
            >
              {certification.content}
            </div>
          </div>
        )}

        <div className="experience">
          <div
            className="section-title editable-section"
            onClick={() => {
              handleEditSection(professionalExperiences.elementID);
            }}
            style={{color: colorStyle}}
          >
            {professionalExperiences.title}
          </div>

          {professionalExperiences.experiences.map(
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

        <div className="projects">
          <div
            className="section-title editable-section"
            onClick={() => {
              handleEditSection(outsideExperiences.elementID);
            }}
            style={{color: colorStyle}}
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

        <div className="skills">
          <div
            className="section-title editable-section"
            onClick={() => {
              handleEditSection(skills.elementID);
            }}
            style={{color: colorStyle}}
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
      </div>
    </div>
  );
};

export default Resume4;
