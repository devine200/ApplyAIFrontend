import React from "react";
import ContentEditor from "./ContentEditor";
import AddSection from "./AddSection";
import ContentItem from "./ContentItem";
import ExperienceItemForm from "./ExperienceItem/ExperienceItemForm";

const ProfessionalExperienceForm = () => {
  return (
    <ContentEditor
      isEditable={true}
      isDraggable={true}
      title="ProfessionalExperience"
    >
      <div>
        <AddSection
          title="Want to add a new experience?"
          btnName="Add Experience"
          description="Add them to your Simplify Profile. You can selectively hide/show relevant experiences for each resume you create."
        />
        <ContentItem title="Tradable">
          <div>
            <ExperienceItemForm />
          </div>
        </ContentItem> 
        <ContentItem title="Tradable">
          <div>
            <ExperienceItemForm />
          </div>
        </ContentItem> 
        <ContentItem title="Tradable">
          <div>
            <ExperienceItemForm />
          </div>
        </ContentItem> 
      </div>
    </ContentEditor>
  );
};

export default ProfessionalExperienceForm;
