import React, { useState } from "react";
import PenIcon from "../../../assets/icons/pen.png";
import DragIcon from "../../../assets/icons/drag.png";
import ShowIcon from "../../../assets/icons/view.png";
import HideIcon from "../../../assets/icons/hide.png";
import TrashIcon from "../../../assets/icons/trash-bin.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface ContentEditorProps {
  children: React.ReactNode;
  title: string;
  isEditable: boolean;
  name?: string;
  isDraggable?: boolean;
  onDelete?: () => void;
  onSectionHidden?: () => void;
}

const ContentEditor = ({
  children,
  title,
  isEditable,
  name,
  isDraggable,
  onSectionHidden,
  onDelete,
}: ContentEditorProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSectionHidden, setIsSectionHidden] = useState<boolean>(false)
  const {activeSelection} = useSelector((state: RootState) => state.resumeEditor);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleHide = () => {
    setIsSectionHidden(!isSectionHidden)
    if (!onSectionHidden) return;
    onSectionHidden();
  };

  const handleDelete = () => {
    if (!onDelete) return;
    onDelete();
  };

  return (
    <div id={name && !isEditable ? name : ""} className={`content-editor-children ${name && name === activeSelection && !isEditable ? "edit-selected" : ""}`}>
      <div className="content-editor-heading">
        <div className={`heading-holder ${name && name === activeSelection && isEditable ? "edit-selected" : ""}`}>
          {isDraggable && (
            <button className="content-edit pointer icon-btn drag-btn grabbable">
              <img src={DragIcon} alt="drag icon" />
            </button>
          )}
          <h2 id={name && isEditable ? name : ""}>{title}</h2>
          {isEditable && (
            <button className="content-edit pointer icon-btn">
              <img src={PenIcon} alt="edit icon" />
            </button>
          )}
        </div>
        <div className="header-btn-holder">
          {onSectionHidden !== undefined ? (
            <button className="icon-btn pointer hide-btn" onClick={handleHide}>
              <img
                src={isSectionHidden ? HideIcon : ShowIcon}
                alt="visibility icon"
              />{" "}
              <span>Hide Section</span>
            </button>
          ) : (
            <></>
          )}
          {onDelete !== undefined ? (
            <button
              className="icon-btn pointer delete-btn"
              onClick={handleDelete}
            >
              <img src={TrashIcon} alt="delete icon" />
            </button>
          ) : (
            <></>
          )}
          <button
            className={`toggle-form pointer ${
              isOpen ? "" : "toggle-form-down"
            }`}
            onClick={handleToggle}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className={`content-editor-body ${isOpen ? "" : "content-hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentEditor;
