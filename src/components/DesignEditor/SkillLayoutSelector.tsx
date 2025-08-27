import React from 'react'
import CheckIcon from '../../assets/icons/check.png'

interface SkillLayoutSelectorProps {
    isListed?: boolean;
    onSelection?: (isListed: boolean) => void;
}

const SkillLayoutSelector = ({isListed, onSelection }: SkillLayoutSelectorProps) => {
    return (
        <div>
            <div className="skill-layout-selection-item">
                <h5>Skills Layout</h5>
                <div className="sample-holder">
                    <div className="sample-body not-listed pointer" onClick={()=> {
                        if(onSelection) onSelection(false)
                    }}>
                        <div className="selection-heading">
                            <h5>Not Listed</h5>
                            <span className={`check-holder ${!isListed ? "active" : ""}`}><img src={CheckIcon} alt="check icon" /></span>
                        </div>
                        <ul>
                            <li><b>Category:</b> Skill, Skill, Skill</li>
                            <li><b>Category:</b> Skill, Skill, Skill</li>
                        </ul>
                    </div>
                    <div className="sample-body pointer" onClick={()=> {
                        if(onSelection) onSelection(true)
                    }}>
                        <div className="selection-heading">
                            <h5>Listed</h5>
                            <span className={`check-holder ${isListed ? "active" : ""}`}><img src={CheckIcon} alt="check icon" /></span>
                        </div>
                        <ul>
                            <li><b>• Category:</b> Skill, Skill, Skill</li>
                            <li><b>• Category:</b> Skill, Skill, Skill</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillLayoutSelector