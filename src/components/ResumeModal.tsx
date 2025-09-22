import React, { useState } from "react";
import CloseIcon from "../assets/icons/close";
import BulbIcon from "../assets/icons/idea.png";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { updateCertificationTitle, updateEducationTitle, updateExperienceTitle, updateJobTitle, updateOutsideExperienceTitle, updateProfessionalExperienceTitle, updateProfessionalSummaryTitle, updateSkillsTitle } from "../store/ContentEditor/contentEditor";
import { closeHeaderEditModal } from "../store/ResumeEditor/resumeEditor";

interface ResumeHeaderEditModalProps {
  title: string;
  editType: string;
}

const ResumeHeaderEditModal = ({ title, editType }: ResumeHeaderEditModalProps) => {
    const [currentTitle, setCurrentTitle] = useState<string>(title);
    const {header, professionalSummary, education, certification, professionalExperiences, outsideExperiences, skills} = useSelector((state:RootState) => state.contentEditor)
    const dispatch = useDispatch();

    const handleSave = () => {
        switch(editType) {
            case header.elementID:
                dispatch(updateJobTitle(currentTitle))
                break
            case professionalSummary.elementID:
                dispatch(updateProfessionalSummaryTitle(currentTitle));
                break
            case education.elementID:
                dispatch(updateEducationTitle(currentTitle));
                break
            case certification.elementID:
                dispatch(updateCertificationTitle(currentTitle))
                break
            case professionalExperiences.elementID:
                dispatch(updateProfessionalExperienceTitle(currentTitle));
                break
            case outsideExperiences.elementID:
                dispatch(updateOutsideExperienceTitle(currentTitle))
                break
            case skills.elementID:
                dispatch(updateSkillsTitle(currentTitle))
                break
            default:
                dispatch(updateExperienceTitle({title: currentTitle, expId: editType}));
        }

        dispatch(closeHeaderEditModal());
    }

    const handleCancel = (e:React.MouseEvent) => {
        e.stopPropagation();
        dispatch(closeHeaderEditModal())
    }

    return (
        <div className="modal-section" onClick={handleCancel}>
            <div className="modal-form" onClick={(e)=> {
                e.stopPropagation();
            }}>
                <div className="modal-header">
                <h3>Edit Title</h3>
                <button className="icon-btn pointer modal-close-btn">
                    <CloseIcon />
                </button>
                </div>
                <div className="modal-description">
                <img src={BulbIcon} alt="hint icon" />
                <p>
                    Customize the title of this resume section to fit your specific job
                    application.
                </p>
                </div>
                <div className="input-section">
                <input
                    type="text"
                    className="highlight-input"
                    defaultValue={currentTitle}
                    onChange={(e) => {
                    setCurrentTitle(e.target.value);
                    }}
                />
                </div>
                <div className="submit-btn-section">
                    <button className="pointer bordered" onClick={handleCancel}>Cancel</button>
                    <button className="pointer highlighted" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default ResumeHeaderEditModal;
