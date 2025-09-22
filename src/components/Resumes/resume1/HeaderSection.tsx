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
  );
};

export default HeaderSection;
