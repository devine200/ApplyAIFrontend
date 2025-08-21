import React, { useState } from "react";
import PenIcon from "../../assets/icons/pen.png";


interface ContentEditorProps {
  children: React.ReactNode;
  title: string;
  isEditable: boolean;
}

const ContentEditor = ({ children, title, isEditable }: ContentEditorProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="content-editor-children">
      <div className="content-editor-heading">
        <div className="heading-holder">
          <h2>{ title }</h2>
          { isEditable && <button className="content-edit pointer"><img src={PenIcon} alt="" /></button>}
        </div>
        <button className={`toggle-form pointer ${isOpen ? "" : "toggle-form-down"}`} onClick={handleToggle}>{">"}</button>
      </div>
      <div className={`content-editor-body ${isOpen ? "" : "content-hidden"}`}>
        {children}
      </div>
    </div>);
};

export default ContentEditor;
