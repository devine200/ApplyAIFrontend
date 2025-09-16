import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import TextEditor from './TextEditor/TextEditor'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

const CertificationForm = () => {
  const {isEditable, title, isDraggable, elementID, contentElementID} = useSelector((state: RootState) => state.contentEditor.certification);
  const {activeSelection} = useSelector((state: RootState) => state.resumeEditor);
  return (
    <ContentEditor name={elementID} isEditable={isEditable} title={title} isDraggable={isDraggable}>
        <div
        id={contentElementID}
        className={contentElementID === activeSelection ? "edit-selected" : ""}>
            <TextEditor />
        </div>
    </ContentEditor>
  )
}

export default CertificationForm