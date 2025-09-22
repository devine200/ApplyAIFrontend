import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface HeaderSectionProps {
  handleEditSection: (elemId: string) => void;
  nameCapitalizedStyle: string;
  marginSizeStyle: string;
  colorStyle: string;
}

const HeaderSection = ({
  handleEditSection,
  nameCapitalizedStyle,
  marginSizeStyle,
  colorStyle,
}: HeaderSectionProps) => {
  const { header, name } = useSelector(
    (state: RootState) => state.contentEditor
  );
  return (
    <div
      className="header"
      style={{
        paddingLeft: marginSizeStyle,
        paddingRight: marginSizeStyle,
        background: colorStyle,
      }}
    >
      <h1 style={{ textTransform: nameCapitalizedStyle }}>{name}</h1>
      <p
        className="editable-section contact-section"
        onClick={() => {
          console.log("clicking");
          handleEditSection(header.elementID);
        }}
      >
        <a key={uuidv4()}>{header.location.value} |</a>

        {header.contactInfos
          .filter(({ isHidden }) => !isHidden)
          .map((contact) => {
            return (
              <a key={uuidv4()}>
                {!header.showFullUrls
                  ? contact.name.toLowerCase() === "email" ||
                    contact.name.toLowerCase() === "phone number"
                    ? contact.value
                    : contact.name
                  : contact.value}{" "}
                |
              </a>
            );
          })}
      </p>
    </div>
  );
};

export default HeaderSection;
