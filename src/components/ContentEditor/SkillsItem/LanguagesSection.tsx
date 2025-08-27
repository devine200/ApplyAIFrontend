import React from 'react'
import SkillsLayout from './SkillsLayout'

const LanguagesSection = () => {
  return (
    <SkillsLayout categoryName="Languages" hasBottomLine={true} addBtn={{name: "Language"}}>
      <div className="language-section">
        <span className="language-items">
          Danish
        </span>
        <span className="language-items">
          English
        </span>
        <span className="language-items">
          French
        </span>
      </div>
    </SkillsLayout>
  )
}

export default LanguagesSection