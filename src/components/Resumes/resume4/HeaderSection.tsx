import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface HeaderSectionProps {
  handleEditSection: (elemId: string) => void;
  nameCapitalizedStyle: string;
  colorStyle: string;
}

const HeaderSection = ({
  handleEditSection,
  nameCapitalizedStyle,
  colorStyle,
}: HeaderSectionProps) => {
  const { header, name, skills } = useSelector(
    (state: RootState) => state.contentEditor
  );
  return (
    <div className="sidebar" style={{ background: colorStyle }}>
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
  );
};

export default HeaderSection;
