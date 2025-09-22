import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import TextEditor from './TextEditor/TextEditor'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { updateCertificationContent } from '../../store/ContentEditor/contentEditor'
import { openHeaderEditModal } from '../../store/ResumeEditor/resumeEditor'

const CertificationForm = () => {
  const dispatch = useDispatch();
  const {isEditable, title, isDraggable, elementID, content, contentElementID} = useSelector((state: RootState) => state.contentEditor.certification);
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
  
    dispatch(updateCertificationContent(updatedValue ? value : updatedValue));
  }

  const handleEditTitle = () => {
    dispatch(openHeaderEditModal({title, editType: elementID}))
  }

  return (
    <ContentEditor onEditTitle={handleEditTitle} name={elementID} isEditable={isEditable} title={title} isDraggable={isDraggable}>
        <div
        id={contentElementID}
        className={contentElementID === activeSelection ? "edit-selected" : ""}>
            <TextEditor value={content!} handleChange={handleTextChange} hasOptions={true} height={"150px"} />
        </div>
    </ContentEditor>
  )
}

export default CertificationForm