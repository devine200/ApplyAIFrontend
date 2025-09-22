import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import SkillsSection from './SkillsItem/SkillsSection'
import LanguagesSection from './SkillsItem/LanguagesSection'
import InterestsSection from './SkillsItem/InterestsSection'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { openHeaderEditModal } from '../../store/ResumeEditor/resumeEditor'

const SkillsForm = () => {
  const { title, skills, languages, interests, elementID, languagesElementID, interestsElementID } = useSelector((state: RootState) => state.contentEditor.skills)
  const dispatch = useDispatch();

  const handleEditTitle = () => {
    dispatch(openHeaderEditModal({title, editType: elementID}))
  }

  return (
    <ContentEditor onEditTitle={handleEditTitle} name={elementID} isEditable={false} isDraggable={true} title="Skills & Interests">
        <SkillsSection skills={skills} />
        <LanguagesSection elemID={languagesElementID} languages={languages} />
        <InterestsSection elemID={interestsElementID} interests={interests} />
    </ContentEditor>
  )
}

export default SkillsForm