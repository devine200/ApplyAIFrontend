import React from 'react'
import ContentEditor from './ContentEditor'
import TextEditor from './TextEditor.tsx/TextEditor'

const CertificationForm = () => {
  return (
    <ContentEditor isEditable={true} title="Certification" isDraggable={true}>
        <>
            <TextEditor />
        </>
    </ContentEditor>
  )
}

export default CertificationForm