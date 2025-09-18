import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import TextEditor from './TextEditor/TextEditor'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { deleteCustomSection, updateCustomSectionContent } from '../../store/ContentEditor/contentEditor'

interface CustomSectionFormProps {
    idx: number;
}

const CustomSectionForm = ({idx}: CustomSectionFormProps) => {
  const dispatch = useDispatch();
  const {customSections} = useSelector((state: RootState) => state.contentEditor);
  const {isEditable, title, isDraggable, elementID, content, contentElementID} = customSections[idx];
  const {activeSelection} = useSelector((state: RootState) => state.resumeEditor);
  
  const handleTextChange = (value: string) => {
    const parser = new DOMParser();
    const elem = parser.parseFromString(value, "text/html");
    const body = elem.querySelector("body");

    let updatedValue = ""
    for(const child of body!.children) {
      console.log(child.textContent)
      if(child.textContent !== ""){
        updatedValue += child.textContent;
      }
    }
  
    dispatch(updateCustomSectionContent({sectId: elementID, value: updatedValue ? value : updatedValue}));
  }

  const handleDelete = ()=> {
    dispatch(deleteCustomSection(elementID))
  }

  return (
    <ContentEditor name={elementID} isEditable={isEditable} title={title} isDraggable={isDraggable} onDelete={handleDelete}>
        <div
        id={contentElementID}
        className={contentElementID === activeSelection ? "edit-selected" : ""}>
            <TextEditor value={content!} handleChange={handleTextChange} hasOptions={true} height={"150px"} />
        </div>
    </ContentEditor>
  )
}

export default CustomSectionForm