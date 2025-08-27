import React from "react";
import SkillItems from "./SkillItems";
import SkillsLayout from "./SkillsLayout";

const SkillsSection = () => {
    const skills = [
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
    ]

  return (
    <SkillsLayout categoryName="Skills" addBtn={{name: "Category"}} hasBottomLine={true}> 
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
        <input className="highlight-input" type="text" placeholder="New Skill"/>
        <button className="pointer">Add Skill</button>
      </div>
      <div className="skills-holder">
        {
            skills.length > 0 ? skills.map(skill=><SkillItems skill={skill} />) : <p>No items added.</p>
        }
      </div>
    </SkillsLayout>
  );
};

export default SkillsSection;
