import React from 'react'

interface AddCategoryBtnProps {
    categoryName: string;
    onAdd?: ()=> void;
}

const AddCategoryBtn = ({categoryName, onAdd}: AddCategoryBtnProps) => {
  return (
    <div className="category-btn-holder">
        <button className="icon-btn pointer" onClick={onAdd ? onAdd : ()=>{}}>
            <span>+</span>
            <span>Add {categoryName}</span>
        </button>
    </div>
  )
}

export default AddCategoryBtn