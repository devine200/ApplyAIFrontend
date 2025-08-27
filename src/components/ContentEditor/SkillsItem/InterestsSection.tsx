import React from "react";
import SkillsLayout from "./SkillsLayout";

const InterestsSection = () => {
  return (
    <SkillsLayout categoryName="Interests" hasBottomLine={false}>
        <div className="interest-section">
            <input type="text" className="highlight-input" placeholder="Write your interests" />
        </div>
    </SkillsLayout>
  );
};

export default InterestsSection;
