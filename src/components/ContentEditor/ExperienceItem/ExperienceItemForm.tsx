import React from "react";
import EditIcon from "../../../assets/icons/pen.png";
import ExperienceItemInput from "./ExperienceItemInput";
import AIHelperBtn from "../UtilComponents/AIHelperBtn";
import AddExperienceBtn from "../UtilComponents/AddExperienceBtn";
import ContentItem from "../UtilComponents/ContentItem";

interface ExperienceItemFormProps{
  jobTitle: string;
  company: string;
  responsibilities: string[];
}

const ExperienceItemForm = ({jobTitle, company, responsibilities}: ExperienceItemFormProps) => {
  return (
    <ContentItem title={company}>
      <div>
        <div className="exp-role">
          <h4>{jobTitle}</h4>
          <button className="icon-btn pointer">
            <img src={EditIcon} alt="edit icon" />
          </button>
        </div>
        <div>
          {responsibilities && responsibilities.map((responsibility) => <ExperienceItemInput responsibility={responsibility} />)}
        </div>
        <AddExperienceBtn />
        <AIHelperBtn />
      </div>
    </ContentItem>
  );
};

export default ExperienceItemForm;
