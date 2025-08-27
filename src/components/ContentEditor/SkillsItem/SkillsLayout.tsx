import React, { useState } from "react";
import showIcon from "../../../assets/icons/view.png";
import hideIcon from "../../../assets/icons/hide.png";
import AddCategoryBtn from "./AddCategoryBtn";

export interface AddBtnParams {
    name: string;
    onAdd?: () => void;
}

interface SkillsLayoutProps {
    categoryName: string;
    addBtn?: AddBtnParams;
    hasBottomLine?: boolean;
    children: React.ReactNode;
}

const SkillsLayout = ({categoryName, addBtn, hasBottomLine, children}: SkillsLayoutProps) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const handleCategory = () => {
        setIsHidden(!isHidden)
    }
    const handleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

  return (
    <div className={`skill-section skill-layout ${hasBottomLine ? "bottom-border" : ""}`}>
      <div className="skill-section-header">
        <h4>{categoryName}</h4>
        <div>
            <button className="icon-btn pointer" onClick={handleCategory}>
                <img src={!isHidden ? showIcon : hideIcon} alt="hide icon" /> Hide {categoryName}
            </button>
            <button className={`toggle-form pointer ${isCollapsed ? "toggle-form-down" : ""}`} onClick={handleCollapse}>{">"}</button>
        </div>
      </div>
      <div className={isCollapsed ? "content-hidden" : ""}>
        {children}
        {addBtn && <AddCategoryBtn categoryName={addBtn.name} />}
      </div>
    </div>
  );
};

export default SkillsLayout;
