import React, { useState } from "react";
import BulbIcon from "../../../assets/icons/idea.png";

interface AddSectionProps {
  title: string;
  description?: string;
  btnName: string;
  handleAdd?: () => void;
}

const AddSection = ({
  title,
  description,
  btnName,
  handleAdd,
}: AddSectionProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="add-section">
        <div className="add-section-header">
            <div className="heading">
            <img src={BulbIcon} alt="hint icon" />
            <h4>{title}</h4>
            <button
                className={`icon-btn pointer ${isOpen ? "arrow-down" : ""}`}
                onClick={handleToggle}
            >
                {">"}
            </button>
            </div>
            <button
            className="pointer"
            onClick={() => {
                if (!handleAdd) return;
                handleAdd();
            }}
            >
            {btnName}
            </button>
        </div>
        <p
            className={`add-section-description ${isOpen ? "" : "content-hidden"}`}
        >
            {description}
        </p>
        </div>
    );
};

export default AddSection;
