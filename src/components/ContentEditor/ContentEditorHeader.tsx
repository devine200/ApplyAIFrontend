import React from 'react'
import editIcon from '../../assets/icons/pen.png'

const ContentEditorHeader = () => {
  return (
    <div className="content-editor-header">
      <h2>Developer Relations Engineer</h2>
      <button className="icon-btn pointer"><img src={editIcon} alt="edit icon" /></button>
    </div>
  )
}

export default ContentEditorHeader