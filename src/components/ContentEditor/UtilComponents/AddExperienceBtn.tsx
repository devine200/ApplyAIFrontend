import React from "react";

interface AddExperienceBtnProps {
  handleClick: () => void;
}

const AddExperienceBtn = ({ handleClick }: AddExperienceBtnProps) => {
  
  return (
    <div className="add-btn-holder">
      <button
        className="add-exp-item-btn pointer"
        onClick={handleClick}
      >
        + Add Experience Item
      </button>
    </div>
  );
};

export default AddExperienceBtn;
