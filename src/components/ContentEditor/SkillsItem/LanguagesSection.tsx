import React from 'react'
import SkillsLayout from './SkillsLayout'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import { deleteLanguage, toggleLanguagesVisibility } from '../../../store/ContentEditor/contentEditor';
import SkillItems from './SkillItems';

interface LanguageSectionProps {
  languages: string[];
  elemID: string;
}

const LanguagesSection = ({ languages, elemID }: LanguageSectionProps) => {
  const {activeSelection} = useSelector((state: RootState) => state.resumeEditor);
  const { isLanguageHidden } = useSelector((state: RootState) => state.contentEditor.skills);
  const dispatch = useDispatch();
  const handleDelete = (index:number) => {
    dispatch(deleteLanguage(index))
  }

  return (
    <div id={elemID} className={`${elemID && activeSelection === elemID ? "edit-selected" : ""}`}>
      <SkillsLayout isHidden={isLanguageHidden || false} onToggleVisibility={()=>{dispatch(toggleLanguagesVisibility())}} categoryName="Languages" hasBottomLine={true} addBtn={{name: "Language"}}>
        <div className="language-section">
          {languages.map(((language, index) => <SkillItems skill={language} handleDelete={()=>{handleDelete(index)}}/>))}
        </div>
      </SkillsLayout>
    </div>
  )
}

export default LanguagesSection