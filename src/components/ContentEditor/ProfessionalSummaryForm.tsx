import React, { useState } from "react";
import { Editor, EditorState, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";
import ContentEditor from "./ContentEditor";
import SettingsIcon from "../../assets/icons/gears.png";
import SuggestIcon from "../../assets/icons/shines.png";

const ProfessionalSummaryForm = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <ContentEditor isEditable={true} title="Professional Summary">
      <div
        style={{ border: "1px solid #ccc", minHeight: "150px", padding: "8px" }}
      >
        <Editor
          editorState={editorState}
          onChange={(editorState) => {
            const contentState = editorState.getCurrentContent();
            console.log(convertToRaw(contentState));
            setEditorState(editorState);
          }}
        />
      </div>
      <div className="ai-helper-btns">
        <button className="ai-settings icon-btn pointer">
          <img src={SettingsIcon} alt="ai-setting" />
          <span>AI Settings</span>
        </button>
        <button className="ai-suggest icon-btn pointer">
          <img src={SuggestIcon} alt="ai-suggest" />
          <span>Rewrite with AI Suggestions</span>
        </button>
      </div>
    </ContentEditor>
  );
};

export default ProfessionalSummaryForm;
