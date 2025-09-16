import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../../styles/Resume/resume3.css";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import type { ResumeProps } from "../../types";

const Resume3 = ({ handleEditSection, getDesignField, resumeTemplate  }: ResumeProps) => {
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
  const { contentFormatFields, textFormatFields, layoutFields } = resumeTemplate;
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

  return (
    <div className={`resume3 page ${fontSizeStyle} ${skillLayoutStyle} ${bulletIconStyle} ${headerAlignStyle}`}
    style={{
      fontFamily: fontFamilyStyle,
      lineHeight: lineHeightStyle,
      paddingLeft: marginSizeStyle,
      paddingRight: marginSizeStyle,
    }}>
      <div className="header">
        <h1 style={{ textTransform: nameCapitalizedStyle }}>{name}</h1>
        <div
          className="contact editable-section"
          onClick={() => {
            console.log("clicking");
            handleEditSection(header.elementID);
          }}
        >
          <span key={uuidv4()}>
            <a className="no-underline">{header.location.value} |</a>
          </span>
          {header.contactInfos.map(({ name, value, link }, index) => {
            return (
              <span key={uuidv4()}>
                <a className="no-underline">
                  {link && name.toLowerCase() !== "email" ? name : value}
                </a>
                {index < header.contactInfos.length - 1 && " | "}
              </span>
            );
          })}
        </div>
      </div>

      <div className="grid section">
        <div className="left">
          <span
            className="editable-section"
            onClick={() => {
              handleEditSection(professionalSummary.elementID);
            }}
          >
            {professionalSummary.title}
          </span>
        </div>
        <div
          className="editable-section"
          onClick={() => {
            handleEditSection(professionalSummary.contentElementID);
          }}
        >
          {professionalSummary.content}
        </div>
      </div>

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
          ({
            school,
            course,
            degree,
            duration,
            relevantCourses,
            elementID,
          }) => (
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

      {certification.content && (
        <div className="grid section editable-section">
          <div
            className="left editable-section"
            onClick={() => {
              handleEditSection(certification.elementID);
            }}
          >
            <span className="editable-section">{certification.title}</span>
          </div>
          <div
            className="editable-section"
            onClick={() => {
              handleEditSection(certification.contentElementID);
            }}
          >
            {certification.content}
          </div>
        </div>
      )}

      <div className="grid section">
        <div className="left">
          <span
            className="editable-section"
            onClick={() => {
              handleEditSection(professionalExperiences.elementID);
            }}
          >
            {professionalExperiences.title}
          </span>
        </div>
        <div className="editable-section">
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
                  className="editable-section"
                  onClick={() => {
                    handleEditSection(elementID);
                  }}
                >
                  <h3>
                    <span>{company} </span>
                    <span className="right-align">Remote | {duration}</span>
                  </h3>
                  <p
                    className="role editable-section"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSection(jobTitleElementID);
                    }}
                  >
                    {jobTitle}
                  </p>
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
      </div>
      <div className="grid section">
        <div className="left">
          <span
            className="editable-section"
            onClick={() => {
              handleEditSection(outsideExperiences.elementID);
            }}
          >
            {outsideExperiences.title}
          </span>
        </div>
        <div>
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
                  className="editable-section"
                  onClick={() => {
                    handleEditSection(elementID);
                  }}
                >
                  <h3>
                    <span>{company} </span>
                    <span className="right-align">Remote | {duration}</span>
                  </h3>
                  <p
                    className="role editable-section"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSection(jobTitleElementID);
                    }}
                  >
                    {jobTitle}
                  </p>
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
      </div>

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
    </div>
  );
};

export default Resume3;
