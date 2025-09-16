import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../../styles/Resume/resume2.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ResumeProps } from "../../types";

const Resume2 = ({
  handleEditSection,
  getDesignField,
  resumeTemplate,
}: ResumeProps) => {
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
  const { contentFormatFields, textFormatFields, layoutFields, templateSelection } =
    resumeTemplate;
  const skillLayoutStyle =
    getDesignField(contentFormatFields[1]) !== "listed" ? "not-listed" : "";
  const bulletIconStyle = `list-${
    getDesignField(contentFormatFields[0]).toLowerCase().split(" ")[1]
  }`;
  const fontFamilyStyle = getDesignField(textFormatFields[0]);
  const fontSizeStyle = `fs${getDesignField(textFormatFields[1])}`;
  const lineHeightStyle = getDesignField(textFormatFields[2]);
  const nameCapitalizedStyle =
    getDesignField(textFormatFields[3]) === "true" ? "uppercase" : "capitalize";
  const marginMetrics = {
    small: "20px",
    medium: "30px",
    large: "40px",
  };
  const marginSizeStyle =
    marginMetrics[getDesignField(layoutFields[1]).toLowerCase()];
  const headerAlignStyle = `${getDesignField(
    layoutFields[0]
  ).toLowerCase()}-align`;
  const colorStyle = templateSelection.colors![templateSelection.selectedColorIdx!];

  return (
    <div
      className={`container resume2 page ${fontSizeStyle} ${skillLayoutStyle} ${bulletIconStyle} ${headerAlignStyle}`}
      style={{
        fontFamily: fontFamilyStyle,
        lineHeight: lineHeightStyle,
      }}
    >
      <div
        className="header"
        style={{
          paddingLeft: marginSizeStyle,
          paddingRight: marginSizeStyle,
          background: colorStyle
        }}
      >
        <h1 style={{ textTransform: nameCapitalizedStyle }}>{name}</h1>
        <p
          className="editable-section"
          onClick={() => {
            console.log("clicking");
            handleEditSection(header.elementID);
          }}
        >
          <a key={uuidv4()}>{header.location.value} |</a>

          {header.contactInfos.map(({ name, value, link }) => {
            return (
              <a key={uuidv4()}>
                {link && name.toLowerCase() !== "email" ? name : value} |
              </a>
            );
          })}
        </p>
      </div>
      <div
        className="resume2-body"
        style={{
          paddingLeft: marginSizeStyle,
          paddingRight: marginSizeStyle,
        }}
      >
        <h2
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalSummary.elementID);
          }}
          style={{color: colorStyle}}
        >
          {professionalSummary.title}
        </h2>
        <p
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalSummary.contentElementID);
          }}
        >
          {professionalSummary.content}
        </p>

        <>
          <h2
            className="editable-section"
            onClick={() => {
              handleEditSection(education.elementID);
            }}
            style={{color: colorStyle}}
          >
            {education.title}
          </h2>
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

        {certification.content && (
          <>
            <h2
              className="editable-section"
              onClick={() => {
                handleEditSection(certification.elementID);
              }}
              style={{color: colorStyle}}
            >
              {certification.title}
            </h2>
            <div
              className="row editable-section"
              key={uuidv4()}
              onClick={() => {
                handleEditSection(certification.contentElementID);
              }}
            >
              {certification.content}
            </div>
          </>
        )}

        <h2
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalExperiences.elementID);
          }}
          style={{color: colorStyle}}
        >
          {professionalExperiences.title}
        </h2>

        {professionalExperiences.experiences.map(
          ({
            jobTitle,
            company,
            duration,
            responsibilities,
            jobTitleElementID,
            elementID,
          }) => {
            return (
              <div
                className="job editable-section"
                key={uuidv4()}
                onClick={() => {
                  handleEditSection(elementID);
                }}
              >
                <div className="row job-header">
                  <div className="left">
                    <strong>{company}</strong>
                    <br />
                    <em
                      className="editable-section"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditSection(jobTitleElementID);
                      }}
                    >
                      {jobTitle}
                    </em>
                  </div>
                  <div className="right">
                    <strong>City, Country</strong>
                    <br />
                    <em>{duration}</em>
                  </div>
                </div>
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

        <h2
          className="editable-section"
          onClick={() => {
            handleEditSection(outsideExperiences.elementID);
          }}
          style={{color: colorStyle}}
        >
          {outsideExperiences.title}
        </h2>

        {outsideExperiences.experiences.map(
          ({
            jobTitle,
            company,
            duration,
            responsibilities,
            jobTitleElementID,
            elementID,
          }) => {
            return (
              <div
                className="job editable-section"
                key={uuidv4()}
                onClick={() => {
                  handleEditSection(elementID);
                }}
              >
                <div className="row job-header">
                  <div className="left">
                    <strong>{company}</strong>
                    <br />
                    <em
                      className="editable-section"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditSection(jobTitleElementID);
                      }}
                    >
                      {jobTitle}
                    </em>
                  </div>
                  <div className="right">
                    <strong>City, Country</strong>
                    <br />
                    <em>{duration}</em>
                  </div>
                </div>
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

        <h2 className="editable-section" style={{color: colorStyle}}>Skills</h2>
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
      </div>
    </div>
  );
};

export default Resume2;
