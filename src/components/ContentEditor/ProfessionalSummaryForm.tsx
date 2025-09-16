import React from "react";
import ContentEditor from "./UtilComponents/ContentEditor";
import TextEditor from "./TextEditor/TextEditor";
import AIHelperBtn from "./UtilComponents/AIHelperBtn";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const ProfessionalSummaryForm = () => {
  const { isEditable, title, elementID, contentElementID } = useSelector(
    (state: RootState) => state.contentEditor.professionalSummary
  );
  const { activeSelection } = useSelector(
    (state: RootState) => state.resumeEditor
  );
  return (
    <ContentEditor name={elementID} isEditable={isEditable} title={title}>
      <div
        id={contentElementID}
        className={contentElementID === activeSelection ? "edit-selected" : ""}
      >
        <TextEditor />
      </div>
      <AIHelperBtn />
    </ContentEditor>
  );
};

export default ProfessionalSummaryForm;
