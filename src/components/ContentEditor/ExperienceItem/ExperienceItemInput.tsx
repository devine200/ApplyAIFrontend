import React, { useState } from "react";
import DeleteIcon from "../../../assets/icons/trash-bin.png";
import ReorderIcon from "../../../assets/icons/reorder.png";
import AIAssistIcon from "../../../assets/icons/shines.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type { ResponsibilityItem } from "../../../types";

interface ExperienceItemInputProps {
  responsibility: ResponsibilityItem;
  handleDelete: (respId: string) => void;
  handleChange: (respId: string, value: string) => void;
  handleToggleVisibility: (respId: string) => void;
}

const ExperienceItemInput = ({
  responsibility,
  handleDelete,
  handleChange,
  handleToggleVisibility,
}: ExperienceItemInputProps) => {
  const { activeSelection } = useSelector(
    (state: RootState) => state.resumeEditor
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <div
      id={responsibility?.elementID}
      className={`exp-item-input ${
        responsibility?.elementID &&
        activeSelection === responsibility.elementID
          ? "edit-selected"
          : ""
      }`}
    >
      <button className="icon-btn pointer">
        <img src={ReorderIcon} alt="reorder icon" />
      </button>
      <input type="checkbox" defaultChecked={!responsibility.isHidden} className="pointer" onClick={()=>{
        handleToggleVisibility(responsibility.elementID)
      }} />
      {!isEditing ? (
        <input
          type="text"
          className="highlight-input"
          value={responsibility?.value}
          onFocus={()=> {
            setIsEditing(true);
          }}
          onChange={(e) => {
            e.preventDefault();
            handleChange(responsibility.elementID, e.target.value);
          }}
        />
      ) : (
        <textarea
          className="highlight-input"
          defaultValue={responsibility.value}
          onBlur={(e)=> {
            setIsEditing(false);
            handleChange(responsibility.elementID, e.target.value);
          }}
        ></textarea>
      )}
      <button className="icon-btn pointer ai-assist-btn">
        <img src={AIAssistIcon} alt="ai assist icon" />
      </button>
      <button
        className="icon-btn pointer"
        onClick={() => {
          handleDelete(responsibility.elementID);
        }}
      >
        <img src={DeleteIcon} alt="detele icon" />
      </button>
    </div>
  );
};

export default ExperienceItemInput;
