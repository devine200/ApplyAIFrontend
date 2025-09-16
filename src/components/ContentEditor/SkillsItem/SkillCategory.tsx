import React, { useState } from "react";
import SkillItems from "./SkillItems";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import DeleteIcon from "../../../assets/icons/trash-bin.png";
import {
  addCategoryItem,
  updateCategoryName,
} from "../../../store/ContentEditor/contentEditor";

interface SkillCategorySectionProps {
  skills: string[];
  categoryName: string;
  elemID?: string;
  handleCategoryItemDelete: (catId: string, itemIdx: number) => void;
  handleCategoryDelete: (catId: string) => void;
}

const SkillCategory = ({
  categoryName,
  skills,
  elemID,
  handleCategoryItemDelete,
  handleCategoryDelete
}: SkillCategorySectionProps) => {
  const { activeSelection } = useSelector(
    (state: RootState) => state.resumeEditor
  );
  const dispatch = useDispatch();

  const [newCategoryItem, setNewCategoryItem] = useState<string | undefined>();

  return (
    <div
      id={elemID}
      className={`skill-category-section ${
        elemID && activeSelection === elemID ? "edit-selected" : ""
      }`}
    >
      <div className="category-name-form">
        <label htmlFor="skill-category-name">Category Name</label>
        <div className="skill-category-input">
          <input
            type="text"
            id="skill-category-name"
            className="highlight-input"
            placeholder={categoryName}
            defaultValue={categoryName}
            onChange={(e) => {
              dispatch(
                updateCategoryName({ catId: elemID!, value: e.target.value })
              );
            }}
          />
          <button 
            className="icon-btn pointer" 
            onClick={() => {
              handleCategoryDelete(elemID!);
            }}>
            <img src={DeleteIcon} alt="delete-icon" />
          </button>
        </div>
      </div>
      <div className="add-skill-form">
        <input
          className="highlight-input"
          type="text"
          value={newCategoryItem}
          placeholder={"New " + categoryName}
          onChange={(e) => {
            setNewCategoryItem(e.target.value);
          }}
        />
        <button
          className="pointer"
          onClick={() => {
            if (newCategoryItem === undefined || newCategoryItem === "") return;
            dispatch(
              addCategoryItem({ catId: elemID!, value: newCategoryItem })
            );
            setNewCategoryItem("");
          }}
        >
          Add {categoryName}
        </button>
      </div>
      <div className="skills-holder">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <SkillItems
              handleDelete={() => {
                handleCategoryItemDelete(elemID!, index);
              }}
              skill={skill}
              key={uuidv4()}
            />
          ))
        ) : (
          <p>No items added.</p>
        )}
      </div>
    </div>
  );
};

export default SkillCategory;
