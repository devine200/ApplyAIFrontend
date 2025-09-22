import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface HeaderSectionProps {
  handleEditSection: (elemId: string) => void;
  nameCapitalizedStyle: string;
}

const HeaderSection = ({
  handleEditSection,
  nameCapitalizedStyle,
}: HeaderSectionProps) => {
  const { header, name } = useSelector(
    (state: RootState) => state.contentEditor
  );
  return (
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
          {header.contactInfos
          .filter(({ isHidden }) => !isHidden)
          .map((contact, index) => {
            return (
              <span key={uuidv4()}>
                <a className="no-underline">
                  {!header.showFullUrls
                    ? contact.name.toLowerCase() === "email" ||
                      contact.name.toLowerCase() === "phone number"
                      ? contact.value
                      : contact.name
                    : contact.value}
                </a>
                {index < header.contactInfos.length - 1 && " | "}
              </span>
            );
          })}
        </div>
      </div>
  );
};

export default HeaderSection;
