import React from "react";
import ContentEditor from "./UtilComponents/ContentEditor";
import AddSection from "./UtilComponents/AddSection";
import ExperienceItemForm from "./ExperienceItem/ExperienceItemForm";
import type { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { openHeaderEditModal } from "../../store/ResumeEditor/resumeEditor";

const OutsideExperienceForm = () => {
  const { isEditable, isDraggable, title, addSectionParams, experiences, elementID } =
    useSelector((state: RootState) => state.contentEditor.outsideExperiences);
  const dispatch = useDispatch();

  const handleEditTitle = () => {
    dispatch(openHeaderEditModal({title, editType: elementID}))
  }
  return (
    <ContentEditor
      name={elementID}
      isEditable={isEditable}
      isDraggable={isDraggable}
      title={title}
      onEditTitle={handleEditTitle}
    >
      <div>
        <AddSection
          title={addSectionParams!.question}
          btnName={addSectionParams!.btnName}
          description={addSectionParams!.description}
        />
        {experiences &&
          experiences.map(({ jobTitle, company, responsibilities, elementID, jobTitleElementID }) => (
            <ExperienceItemForm
              key={uuidv4()}
              jobTitle={jobTitle}
              company={company}
              responsibilities={responsibilities}
              elemID={elementID}
              jobTitleElementID={jobTitleElementID}
            />
          ))}
      </div>
    </ContentEditor>
  );
};

export default OutsideExperienceForm;
