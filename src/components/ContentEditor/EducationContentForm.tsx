import React from "react";
import ContentEditor from "./ContentEditor";
import AddSection from "./AddSection";
import EducationContentItem from "./EducationContentItem";

const EducationContentForm = () => {
  return (
    <ContentEditor isEditable={true} title="Education" isDraggable={true}>
      <div>
        <AddSection
          title="Have more than one major or minor?"
          description="lorem"
          btnName="Add Education"
        />
        <EducationContentItem />
      </div>
    </ContentEditor>
  );
};

export default EducationContentForm;
