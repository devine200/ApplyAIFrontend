import React from "react";
import SkillsLayout from "./SkillsLayout";
import type { SkillItem } from "../../../types";
import SkillCategory from "./SkillCategory";

interface SkillsSectionProps {
  skills: SkillItem[];
}

const SkillsSection = ({skills}: SkillsSectionProps) => {

  return (
    <SkillsLayout categoryName={"Skills"} addBtn={{name: "Category"}} hasBottomLine={true}> 
      {skills.map(({categoryName, skills}) =><SkillCategory categoryName={categoryName} skills={skills} />)}
    </SkillsLayout>
  );
};

export default SkillsSection;
