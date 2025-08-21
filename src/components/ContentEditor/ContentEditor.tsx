import React, { useState } from "react";
import PenIcon from "../../assets/icons/pen.png";
import DragIcon from "../../assets/icons/drag.png";

interface ContentEditorProps {
  children: React.ReactNode;
  title: string;
  isEditable: boolean;
  isDraggable?: boolean;
}

const ContentEditor = ({
  children,
  title,
  isEditable,
  isDraggable,
}: ContentEditorProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="content-editor-children">
      <div className="content-editor-heading">
        <div className="heading-holder">
          {isDraggable && (
            <button className="content-edit pointer icon-btn drag-btn grabbable">
              <img src={DragIcon} alt="drag icon" />
            </button>
          )}
          <h2>{title}</h2>
          {isEditable && (
            <button className="content-edit pointer icon-btn">
              <img src={PenIcon} alt="edit icon" />
            </button>
          )}
        </div>
        <button
          className={`toggle-form pointer ${isOpen ? "" : "toggle-form-down"}`}
          onClick={handleToggle}
        >
          {">"}
        </button>
      </div>
      <div className={`content-editor-body ${isOpen ? "" : "content-hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default ContentEditor;
