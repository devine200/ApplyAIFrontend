import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor';
import AddSection from './UtilComponents/AddSection';
import ExperienceItemForm from './ExperienceItem/ExperienceItemForm';

const OutsideExperienceForm = () => {
    return (
        <ContentEditor
          isEditable={true}
          isDraggable={true}
          title="Projects & Outside Experience"
        >
          <div>
            <AddSection
              title="Want to add a new experience?"
              btnName="Add Experience"
              description="Add them to your Simplify Profile. You can selectively hide/show relevant experiences for each resume you create."
            />
            <ExperienceItemForm />
          </div>
        </ContentEditor>
      );
}

export default OutsideExperienceForm