import React from "react";
import "draft-js/dist/Draft.css";
import ContentEditor from "./UtilComponents/ContentEditor";
import TextEditor from "./TextEditor.tsx/TextEditor";
import AIHelperBtn from "./UtilComponents/AIHelperBtn";

const ProfessionalSummaryForm = () => {

  return (
    <ContentEditor isEditable={true} title="Professional Summary">
      <TextEditor />
      <AIHelperBtn />
    </ContentEditor>
  );
};

export default ProfessionalSummaryForm;
