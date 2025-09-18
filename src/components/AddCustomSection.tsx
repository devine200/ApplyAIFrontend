import React from "react";
import { useDispatch } from "react-redux";
import { createCustomSection } from "../store/ContentEditor/contentEditor";


const AddCustomSection = () => {
  const dispatch = useDispatch();
  const handleAddSection = () => {
    dispatch(createCustomSection());
  }
  return (
    <div className="add-custom-section">
      <button className="pointer" onClick={handleAddSection}>Add Custom Section</button>
    </div>
  );
};

export default AddCustomSection;
