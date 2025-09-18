import React from "react";
import ContentEditor from "./UtilComponents/ContentEditor";
import TextEditor from "./TextEditor/TextEditor";
import AIHelperBtn from "./UtilComponents/AIHelperBtn";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { updateProfessionalSummaryContent } from "../../store/ContentEditor/contentEditor";

const ProfessionalSummaryForm = () => {
  const dispatch = useDispatch();
  const { isEditable, title, elementID, content, contentElementID } = useSelector(
    (state: RootState) => state.contentEditor.professionalSummary
  );

  const { activeSelection } = useSelector(
    (state: RootState) => state.resumeEditor
  );

  const handleTextChange = (value: string) => {
    dispatch(updateProfessionalSummaryContent(value))
  }

  return (
    <ContentEditor name={elementID} isEditable={isEditable} title={title}>
      <div
        id={contentElementID}
        className={contentElementID === activeSelection ? "edit-selected" : ""}
      >
        <TextEditor value={content} handleChange={handleTextChange} hasOptions={true}/>
      </div>
      <AIHelperBtn />
    </ContentEditor>
  );
};

export default ProfessionalSummaryForm;
