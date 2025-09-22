import React from "react";
import EditIcon from "../../../assets/icons/pen.png";
import ExperienceItemInput from "./ExperienceItemInput";
import AIHelperBtn from "../UtilComponents/AIHelperBtn";
import AddExperienceBtn from "../UtilComponents/AddExperienceBtn";
import ContentItem from "../UtilComponents/ContentItem";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import type { ResponsibilityItem } from "../../../types";
import {
  addOutsideExperienceResponsibility,
  addProfessionalExperienceResponsibility,
  deleteOutsideExperienceResponsibility,
  deleteProfessionalExperienceResponsibility,
  toggleOutsideExperienceResponsibilityVisibility,
  toggleProfessionalExperienceResponsibilityVisibility,
  updateOutsideExperienceResponsibility,
  updateProfessionalExperienceResponsibility,
} from "../../../store/ContentEditor/contentEditor";
import { openHeaderEditModal } from "../../../store/ResumeEditor/resumeEditor";

interface ExperienceItemFormProps {
  jobTitle: string;
  jobTitleElementID: string;
  company: string;
  responsibilities: ResponsibilityItem[];
  elemID: string;
  isProfessional?: boolean;
}

const ExperienceItemForm = ({
  jobTitle,
  company,
  responsibilities,
  elemID,
  jobTitleElementID,
  isProfessional,
}: ExperienceItemFormProps) => {
  const { activeSelection } = useSelector(
    (state: RootState) => state.resumeEditor
  );
  const dispatch = useDispatch();

  const handleRespDelete = (respId: string) => {
    if (isProfessional) {
      dispatch(
        deleteProfessionalExperienceResponsibility({ expId: elemID, respId })
      );
    } else {
      dispatch(
        deleteOutsideExperienceResponsibility({ expId: elemID, respId })
      );
    }
  };

  const handleRespChange = (respId: string, value: string) => {
    if (isProfessional) {
      dispatch(
        updateProfessionalExperienceResponsibility({
          expId: elemID,
          respId,
          value,
        })
      );
    } else {
      dispatch(
        updateOutsideExperienceResponsibility({ expId: elemID, respId, value })
      );
    }
  };

  const handleRespToggleVisibility = (respId: string) => {
    if (isProfessional) {
      dispatch(
        toggleProfessionalExperienceResponsibilityVisibility({
          expId: elemID,
          respId,
        })
      );
    } else {
      dispatch(
        toggleOutsideExperienceResponsibilityVisibility({
          expId: elemID,
          respId,
        })
      );
    }
  };

  const handleAddRespClick = () => {
    if (isProfessional) {
      dispatch(addProfessionalExperienceResponsibility(elemID));
    } else {
      dispatch(addOutsideExperienceResponsibility(elemID));
    }
  };

  const handleHeaderEdit = () => {
    dispatch(
      openHeaderEditModal({ title: jobTitle, editType: jobTitleElementID })
    );
  };

  return (
    <div
      id={elemID}
      className={`${
        elemID && activeSelection === elemID ? "edit-selected" : ""
      }`}
    >
      <ContentItem title={company}>
        <div>
          <div
            id={jobTitleElementID}
            className={`exp-role ${
              jobTitleElementID && activeSelection === jobTitleElementID
                ? "edit-selected"
                : ""
            }`}
          >
            <h4>{jobTitle}</h4>
            <button className="icon-btn pointer" onClick={handleHeaderEdit}>
              <img src={EditIcon} alt="edit icon" />
            </button>
          </div>
          <div>
            {responsibilities &&
              responsibilities.map((responsibility) => (
                <ExperienceItemInput
                  key={uuidv4()}
                  responsibility={responsibility}
                  handleDelete={handleRespDelete}
                  handleChange={handleRespChange}
                  handleToggleVisibility={handleRespToggleVisibility}
                />
              ))}
          </div>
          <AddExperienceBtn handleClick={handleAddRespClick} />
          <AIHelperBtn />
        </div>
      </ContentItem>
    </div>
  );
};

export default ExperienceItemForm;
