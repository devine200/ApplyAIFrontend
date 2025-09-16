import React from "react";
import SkillsLayout from "./SkillsLayout";
import type { SkillItem } from "../../../types";
import SkillCategory from "./SkillCategory";
import {
  addCategory,
  deleteCategory,
  deleteCategoryItem,
  toggleSkillsVisibility,
} from "../../../store/ContentEditor/contentEditor";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";

interface SkillsSectionProps {
  skills: SkillItem[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const { isSkillsHidden } = useSelector(
    (state: RootState) => state.contentEditor.skills
  );
  const dispatch = useDispatch();

  const handleCategoryItemDelete = (catId: string, itemIdx: number) => {
    dispatch(deleteCategoryItem({ catId, itemIdx }));
  };

  const handleAddSkills = () => {
    dispatch(addCategory());
  }

  const handleCategoryDelete = (catId:string) => {
    dispatch(deleteCategory(catId))
  }

  return (
    <SkillsLayout
      isHidden={isSkillsHidden!}
      onToggleVisibility={() => {
        dispatch(toggleSkillsVisibility());
      }}
      categoryName={"Skills"}
      addBtn={{ name: "Category" }}
      hasBottomLine={true}
      handleAddCategory={handleAddSkills}
    >
      {skills.map(({ categoryName, skills, elementID }) => (
        <SkillCategory
          handleCategoryItemDelete={handleCategoryItemDelete}
          handleCategoryDelete={handleCategoryDelete}
          elemID={elementID}
          categoryName={categoryName}
          skills={skills}
        />
      ))}
    </SkillsLayout>
  );
};

export default SkillsSection;
