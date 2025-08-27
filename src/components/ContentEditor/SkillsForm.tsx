import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import SkillsSection from './SkillsItem/SkillsSection'
import LanguagesSection from './SkillsItem/LanguagesSection'
import InterestsSection from './SkillsItem/InterestsSection'

const SkillsForm = () => {
  return (
    <ContentEditor isEditable={false} isDraggable={true} title="Skills & Interests">
        <SkillsSection />
        <LanguagesSection />
        <InterestsSection />
    </ContentEditor>
  )
}

export default SkillsForm