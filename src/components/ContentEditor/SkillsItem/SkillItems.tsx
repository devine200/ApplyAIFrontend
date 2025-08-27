import React from 'react'
import cancelIcon from "../../../assets/icons/close.png";

interface SkillItemsProps {
    skill: string;
}

const SkillItems = ({ skill }: SkillItemsProps) => {
  return (
    <div className="skill-item">
        <span>{ skill }</span>
        <button className="icon-btn pointer"><img src={cancelIcon} alt="delete icon" /></button>
    </div>
  )
}

export default SkillItems