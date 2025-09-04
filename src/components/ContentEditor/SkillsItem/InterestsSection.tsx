import React from "react";
import SkillsLayout from "./SkillsLayout";

interface InterestsSectionProps {
  interests: string;
}

const InterestsSection = ({interests}: InterestsSectionProps) => {
  return (
    <SkillsLayout categoryName="Interests" hasBottomLine={false}>
        <div className="interest-section">
            <input type="text" className="highlight-input" placeholder="Write your interests" defaultValue={interests} />
        </div>
    </SkillsLayout>
  );
};

export default InterestsSection;
