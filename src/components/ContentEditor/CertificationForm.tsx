import React from 'react'
import ContentEditor from './UtilComponents/ContentEditor'
import TextEditor from './TextEditor.tsx/TextEditor'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

const CertificationForm = () => {
  const {isEditable, title, isDraggable} = useSelector((state: RootState) => state.contentEditor.certification)
  return (
    <ContentEditor isEditable={isEditable} title={title} isDraggable={isDraggable}>
        <>
            <TextEditor />
        </>
    </ContentEditor>
  )
}

export default CertificationForm