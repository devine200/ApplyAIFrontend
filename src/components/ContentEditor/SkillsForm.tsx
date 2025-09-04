import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import SkillsSection from './SkillsItem/SkillsSection'
import LanguagesSection from './SkillsItem/LanguagesSection'
import InterestsSection from './SkillsItem/InterestsSection'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

const SkillsForm = () => {
  const { skills, languages, interests } = useSelector((state: RootState) => state.contentEditor.skills)
  return (
    <ContentEditor isEditable={false} isDraggable={true} title="Skills & Interests">
        <SkillsSection skills={skills} />
        <LanguagesSection languages={languages} />
        <InterestsSection interests={interests} />
    </ContentEditor>
  )
}

export default SkillsForm