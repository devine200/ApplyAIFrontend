import React from "react";
import ContentEditor from "./UtilComponents/ContentEditor";
import AddSection from "./UtilComponents/AddSection";
import EducationContentItem from "./EducationContentItem";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const EducationContentForm = () => {
  const { title, certifications, addSectionParams, isEditable, isDraggable } = useSelector((state: RootState) => state.contentEditor.education)

  return (
    <ContentEditor isEditable={isEditable} title={title} isDraggable={isDraggable}>
      <div>
        <AddSection
          title={addSectionParams!.question}
          description={addSectionParams!.description}
          btnName={addSectionParams!.btnName}
        />
        {certifications.map(({school, course, relevantCourses}) => <EducationContentItem school={school} course={course} relevantCourses={relevantCourses}/>)}
      </div>
    </ContentEditor>
  );
};

export default EducationContentForm;
