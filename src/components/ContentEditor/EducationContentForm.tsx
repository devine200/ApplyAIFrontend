import React from "react";
import { v4 as uuidv4 } from 'uuid';
import ContentEditor from "./UtilComponents/ContentEditor";
import AddSection from "./UtilComponents/AddSection";
import EducationContentItem from "./EducationContentItem";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const EducationContentForm = () => {
  const { title, certifications, addSectionParams, isEditable, isDraggable, elementID } = useSelector((state: RootState) => state.contentEditor.education)

  return (
    <ContentEditor name={elementID} isEditable={isEditable} title={title} isDraggable={isDraggable}>
      <div>
        <AddSection
          key={uuidv4()}
          title={addSectionParams!.question}
          description={addSectionParams!.description}
          btnName={addSectionParams!.btnName}
        />
        {certifications.map(({school, course, relevantCourses, elementID}) => <EducationContentItem school={school} course={course} relevantCourses={relevantCourses} elemID={elementID} />)}
      </div>
    </ContentEditor>
  );
};

export default EducationContentForm;
