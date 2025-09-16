import React from 'react'
import cancelIcon from "../../../assets/icons/close.png";

interface SkillItemsProps {
    skill: string;
    handleDelete: () => void;
}

const SkillItems = ({ skill, handleDelete }: SkillItemsProps) => {
  return (
    <div className="skill-item">
        <span>{ skill }</span>
        <button className="icon-btn pointer" onClick={handleDelete}><img src={cancelIcon} alt="delete icon" /></button>
    </div>
  )
}

export default SkillItems