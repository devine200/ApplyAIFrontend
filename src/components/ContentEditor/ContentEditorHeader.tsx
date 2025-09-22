import React from 'react'
import editIcon from '../../assets/icons/pen.png'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../store/store'
import { openHeaderEditModal } from '../../store/ResumeEditor/resumeEditor'

const ContentEditorHeader = () => {
  const { title, elementID } = useSelector((state: RootState) => state.contentEditor.header)
  const dispatch = useDispatch();

  const handleEditTitle = () => {
    dispatch(openHeaderEditModal({title, editType: elementID}))
  }

  return (
    <div className="content-editor-header">
      <h2>{title}</h2>
      <button className="icon-btn pointer" onClick={handleEditTitle}><img src={editIcon} alt="edit icon" /></button>
    </div>
  )
}

export default ContentEditorHeader