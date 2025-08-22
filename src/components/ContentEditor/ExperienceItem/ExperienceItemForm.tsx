import React from 'react'
import EditIcon from '../../../assets/icons/pen.png'
import ExperienceItemInput from './ExperienceItemInput'
import AIHelperBtn from '../AIHelperBtn'
import AddExperienceBtn from '../AddExperienceBtn'

const ExperienceItemForm = () => {
  return (
    <div>
        <div className="exp-role">
            <h4>Lead Full-Stack Web3 Engineer</h4>
            <button className="icon-btn pointer"><img src={EditIcon} alt="edit icon" /></button>
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
  )
}

export default ExperienceItemForm