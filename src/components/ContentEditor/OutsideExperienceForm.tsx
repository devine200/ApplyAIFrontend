import React from "react";
import ContentEditor from "./UtilComponents/ContentEditor";
import AddSection from "./UtilComponents/AddSection";
import ExperienceItemForm from "./ExperienceItem/ExperienceItemForm";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const OutsideExperienceForm = () => {
  const { isEditable, isDraggable, title, addSectionParams, experiences } =
    useSelector((state: RootState) => state.contentEditor.outsideExperiences);
  return (
    <ContentEditor
      isEditable={isEditable}
      isDraggable={isDraggable}
      title={title}
    >
      <div>
        <AddSection
          title={addSectionParams!.question}
          btnName={addSectionParams!.btnName}
          description={addSectionParams!.description}
        />
        {experiences &&
          experiences.map(({ jobTitle, company, responsibilities }) => (
            <ExperienceItemForm
              jobTitle={jobTitle}
              company={company}
              responsibilities={responsibilities}
            />
          ))}
      </div>
    </ContentEditor>
  );
};

export default OutsideExperienceForm;
