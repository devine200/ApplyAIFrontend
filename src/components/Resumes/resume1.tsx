import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ResumeProps } from "../../types";

const Resume1 = ({
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
    customSections,
  } = useSelector((state: RootState) => state.contentEditor);

  /* Extracting design styles */
  const { contentFormatFields, textFormatFields, layoutFields } =
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

  return (
    <div
      className={`resume1-body page ${fontSizeStyle} ${skillLayoutStyle} ${bulletIconStyle} ${headerAlignStyle}`}
      style={{
        fontFamily: fontFamilyStyle,
        lineHeight: lineHeightStyle,
        paddingLeft: marginSizeStyle,
        paddingRight: marginSizeStyle,
      }}
    >
      <div className="sheet" role="main">
        <div className="header">
          <h1 style={{ textTransform: nameCapitalizedStyle }}>{name}</h1>
          <div
            className="contact editable-section"
            onClick={() => {
              console.log("clicking");
              handleEditSection(header.elementID);
            }}
          >
            <span className="hbr">{header.title}</span>
            {!header.location.isHidden && (
              <span className="hbr">{header.location.value}</span>
            )}
            {header.contactInfos
              .filter(({ isHidden }) => !isHidden)
              .map((contact) => (
                <span key={uuidv4()} className="hbr">
                  {!header.showFullUrls
                    ? contact.name.toLowerCase() === "email" ||
                      contact.name.toLowerCase() === "phone number"
                      ? contact.value
                      : contact.name
                    : contact.value}
                </span>
              ))}
          </div>
        </div>

        <section className="section" aria-label="summary">
          <h2
            className="editable-section"
            onClick={() => {
              handleEditSection(professionalSummary.elementID);
            }}
          >
            {professionalSummary.title}
          </h2>
          <p
            className="editable-section"
            onClick={() => {
              handleEditSection(professionalSummary.contentElementID);
            }}
            dangerouslySetInnerHTML={{ __html: professionalSummary.content! }}
          >
            {/* {professionalSummary.content} */}
          </p>
        </section>

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
            ({
              school,
              course,
              degree,
              duration,
              relevantCourses,
              elementID,
            }) => (
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
                    <span dangerouslySetInnerHTML={{ __html: relevantCourses }}></span>
                  )}
                </div>

                <div>
                  <span className="edu-duration">{duration}</span>
                </div>
              </div>
            )
          )}
        </section>

        {(certification.content) && (
          <section className="section" aria-label="education">
            <h2
              className="editable-section"
              onClick={() => {
                handleEditSection(certification.elementID);
              }}
            >
              {certification.title}
            </h2>
            <div
              className="edu-section editable-section"
              key={uuidv4()}
              onClick={() => {
                handleEditSection(certification.contentElementID);
              }}
              dangerouslySetInnerHTML={{ __html: certification.content! }}
            >
            </div>
          </section>
        )}

        <section className="section" aria-label="experience">
          <h2
            className="editable-section"
            onClick={() => {
              handleEditSection(professionalExperiences.elementID);
            }}
          >
            {professionalExperiences.title}
          </h2>

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
                  className="exp-section editable-section"
                  key={uuidv4()}
                  onClick={() => {
                    handleEditSection(elementID);
                  }}
                >
                  <div className="exp-header">
                    <div>
                      <div className="role">{company}</div>
                      <div
                        className="meta editable-section"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditSection(jobTitleElementID);
                        }}
                      >
                        {jobTitle}
                      </div>
                    </div>

                    <div>
                      <div className="role">City, Country</div>
                      <div className="meta">{duration}</div>
                    </div>
                  </div>
                  <ul>
                    {responsibilities.filter(({isHidden}) => !isHidden).map(({ value, elementID }) => (
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
        </section>

        <section className="section" aria-label="experience">
          <h2
            className="editable-section"
            onClick={() => {
              handleEditSection(outsideExperiences.elementID);
            }}
          >
            {outsideExperiences.title}
          </h2>

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
                  className="exp-section editable-section"
                  key={uuidv4()}
                  onClick={() => {
                    handleEditSection(elementID);
                  }}
                >
                  <div className="exp-header">
                    <div>
                      <div className="role">{company}</div>
                      <div
                        className="meta editable-section"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditSection(jobTitleElementID);
                        }}
                      >
                        {jobTitle}
                      </div>
                    </div>

                    <div>
                      <div className="role">City, Country</div>
                      <div className="meta">{duration}</div>
                    </div>
                  </div>
                  <ul>
                    {responsibilities.filter(({isHidden}) => !isHidden).map(({ value, elementID }) => (
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
        </section>

        <section className="section" aria-label="skills">
          <h2
            className="editable-section"
            onClick={() => {
              handleEditSection(skills.elementID);
            }}
          >
            Skills
          </h2>
          {!skills.isSkillsHidden && skills.skills.map(({ categoryName, skills, elementID }) => (
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

        {customSections.map(({title, elementID, contentElementID, content})=> 
          content && (<section className="section" aria-label="education">
            <h2
              className="editable-section"
              onClick={() => {
                handleEditSection(elementID);
              }}
            >
              {title}
            </h2>
            <div
              className="edu-section editable-section"
              key={uuidv4()}
              onClick={() => {
                handleEditSection(contentElementID);
              }}
              dangerouslySetInnerHTML={{ __html: content! }}
            >
            </div>
        </section>)
        )}
      </div>
    </div>
  );
};

export default Resume1;
