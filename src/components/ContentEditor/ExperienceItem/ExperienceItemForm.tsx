import React from "react";
import EditIcon from "../../../assets/icons/pen.png";
import ExperienceItemInput from "./ExperienceItemInput";
import AIHelperBtn from "../UtilComponents/AIHelperBtn";
import AddExperienceBtn from "../UtilComponents/AddExperienceBtn";
import ContentItem from "../UtilComponents/ContentItem";

const ExperienceItemForm = () => {
  return (
    <ContentItem title="Tradable">
      <div>
        <div className="exp-role">
          <h4>Lead Full-Stack Web3 Engineer</h4>
          <button className="icon-btn pointer">
            <img src={EditIcon} alt="edit icon" />
          </button>
        </div>
        <div>
          <ExperienceItemInput />
          <ExperienceItemInput />
          <ExperienceItemInput />
          <ExperienceItemInput />
          <ExperienceItemInput />
        </div>
        <AddExperienceBtn />
        <AIHelperBtn />
      </div>
    </ContentItem>
  );
};

export default ExperienceItemForm;
