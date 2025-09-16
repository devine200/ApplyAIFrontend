import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import SkillsSection from './SkillsItem/SkillsSection'
import LanguagesSection from './SkillsItem/LanguagesSection'
import InterestsSection from './SkillsItem/InterestsSection'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

const SkillsForm = () => {
  const { skills, languages, interests, elementID, languagesElementID, interestsElementID } = useSelector((state: RootState) => state.contentEditor.skills)
  return (
    <ContentEditor name={elementID} isEditable={false} isDraggable={true} title="Skills & Interests">
        <SkillsSection skills={skills} />
        <LanguagesSection elemID={languagesElementID} languages={languages} />
        <InterestsSection elemID={interestsElementID} interests={interests} />
    </ContentEditor>
  )
}

export default SkillsForm