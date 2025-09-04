import React from 'react'
import SkillItems from './SkillItems';

interface SkillCategorySectionProps {
    skills: string[];
    categoryName: string;
}

const SkillCategory = ({categoryName, skills}: SkillCategorySectionProps) => {
  return (
    <div className="skill-category-section">
        <div className="category-name-form">
          <label htmlFor="skill-category-name">Category Name</label>
          <input
            type="text"
            id="skill-category-name"
            className="highlight-input"
            placeholder="Skills"
            defaultValue="Skills"
          />
        </div>
        <div className="add-skill-form">
          <input className="highlight-input" type="text" placeholder={"New " + categoryName}/>
          <button className="pointer">Add {categoryName}</button>
        </div>
        <div className="skills-holder">
          {
              skills.length > 0 ? skills.map(skill=><SkillItems skill={skill} />) : <p>No items added.</p>
          }
        </div>
    </div>
  )
}

export default SkillCategory