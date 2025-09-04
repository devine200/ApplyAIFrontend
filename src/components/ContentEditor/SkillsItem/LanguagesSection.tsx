import React from 'react'
import SkillsLayout from './SkillsLayout'

interface LanguageSectionProps {
  languages: string[];
}

const LanguagesSection = ({ languages }: LanguageSectionProps) => {
  return (
    <SkillsLayout categoryName="Languages" hasBottomLine={true} addBtn={{name: "Language"}}>
      <div className="language-section">
        {languages.map((language => <span className="language-items">{language}</span>))}
      </div>
    </SkillsLayout>
  )
}

export default LanguagesSection