import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import TextEditor from './TextEditor/TextEditor'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { updateCertificationContent } from '../../store/ContentEditor/contentEditor'

const CertificationForm = () => {
  const dispatch = useDispatch();
  const {isEditable, title, isDraggable, elementID, content, contentElementID} = useSelector((state: RootState) => state.contentEditor.certification);
  const {activeSelection} = useSelector((state: RootState) => state.resumeEditor);
  const handleTextChange = (value: string) => {
    dispatch(updateCertificationContent(value));
  }
  return (
    <ContentEditor name={elementID} isEditable={isEditable} title={title} isDraggable={isDraggable}>
        <div
        id={contentElementID}
        className={contentElementID === activeSelection ? "edit-selected" : ""}>
            <TextEditor value={content!} handleChange={handleTextChange}/>
        </div>
    </ContentEditor>
  )
}

export default CertificationForm