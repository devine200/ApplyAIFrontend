import React from "react";
import { EditorTabEnum } from "../types";

import EditContentIcon from "../assets/icons/tab-edit.png";
import ActiveEditContentIcon from "../assets/icons/active-tab-edit.png";
import EditDesignIcon from "../assets/icons/tab-style.png";
import ActiveEditDesignIcon from "../assets/icons/active-tab-style.png";

interface EditorTabProps {
  activeTab: EditorTabEnum;
  onTabChange: (tab: EditorTabEnum) => void;
}

const EditorTab = ({ activeTab, onTabChange }: EditorTabProps) => {
  return (
    <div className="editor-tab">
      <div className="tabs-holder">
        <button
          className={`icon-btn pointer tab-btn ${activeTab === EditorTabEnum.CONTENT ? "active-tab-btn" : ""}`}
          onClick={() => {
            if (activeTab !== EditorTabEnum.CONTENT) {
              onTabChange(EditorTabEnum.CONTENT);
            }
          }}
        >
          <img
            src={
              activeTab === EditorTabEnum.CONTENT
                ? ActiveEditContentIcon
                : EditContentIcon
            }
            alt="edit content icon"
          />
          <span>Edit Content</span>
        </button>
        <button
          className={`icon-btn pointer tab-btn ${activeTab === EditorTabEnum.DESIGN ? "active-tab-btn" : ""}`}
          onClick={() => {
            if (activeTab !== EditorTabEnum.DESIGN) {
              onTabChange(EditorTabEnum.DESIGN);
            }
          }}
        >
          <img
            src={
              activeTab === EditorTabEnum.DESIGN
                ? ActiveEditDesignIcon
                : EditDesignIcon
            }
            alt="edit design icon"
          />
          <span>Edit Design</span>
        </button>
      </div>
    </div>
  );
};

export default EditorTab;
