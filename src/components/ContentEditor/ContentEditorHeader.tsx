import React from 'react'
import editIcon from '../../assets/icons/pen.png'
import { useSelector } from 'react-redux'
import { type RootState } from '../../store/store'

const ContentEditorHeader = () => {
  const { title } = useSelector((state: RootState) => state.contentEditor.header)
  return (
    <div className="content-editor-header">
      <h2>{title}</h2>
      <button className="icon-btn pointer"><img src={editIcon} alt="edit icon" /></button>
    </div>
  )
}

export default ContentEditorHeader