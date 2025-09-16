import React from "react";
import SkillsLayout from "./SkillsLayout";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { toggleInterestsVisibility, updateInterests } from "../../../store/ContentEditor/contentEditor";

interface InterestsSectionProps {
  interests: string;
  elemID: string;
}

const InterestsSection = ({interests, elemID}: InterestsSectionProps) => {
  const {activeSelection} = useSelector((state: RootState) => state.resumeEditor);
  const { isInterestsHidden } = useSelector((state: RootState) => state.contentEditor.skills);
  const dispatch = useDispatch();
  return (
    <div id={elemID} className={`${elemID && activeSelection === elemID ? "edit-selected" : ""}`}>
      <SkillsLayout onToggleVisibility={()=>{dispatch(toggleInterestsVisibility())}} isHidden={isInterestsHidden!} categoryName="Interests" hasBottomLine={false}>
          <div className="interest-section">
              <input type="text" className="highlight-input" placeholder="Write your interests" defaultValue={interests} onChange={(e)=>{dispatch(updateInterests(e.target.value))}}/>
          </div>
      </SkillsLayout>
    </div>
  );
};

export default InterestsSection;
