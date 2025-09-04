import React from "react";
import "draft-js/dist/Draft.css";
import ContentEditor from "./UtilComponents/ContentEditor";
import TextEditor from "./TextEditor.tsx/TextEditor";
import AIHelperBtn from "./UtilComponents/AIHelperBtn";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const ProfessionalSummaryForm = () => {
  const { isEditable, title } = useSelector((state: RootState) => state.contentEditor.professionalSummary)
  return (
    <ContentEditor isEditable={isEditable} title={title}>
      <TextEditor />
      <AIHelperBtn />
    </ContentEditor>
  );
};

export default ProfessionalSummaryForm;
