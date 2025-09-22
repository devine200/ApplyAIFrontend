import { EditorTabEnum } from "../types"

import ContentEditorLayout from './ContentEditorLayout'
import PDFPreviewLayout from './PDFPreviewLayout'
import DesignEditorLayout from "./DesignEditorLayout"
import '../styles/ResumeEditor.css'
import type { RootState } from "../store/store"
import { useSelector } from "react-redux"
import ResumeHeaderEditModal from "./ResumeModal"

const ResumeEditorLayout = () => {
  const { activeTab, headerEditModal } = useSelector((state:RootState) => state.resumeEditor)
  
  return (
    <div className="editor-layout">
        {activeTab === EditorTabEnum.CONTENT ? <ContentEditorLayout />: <DesignEditorLayout />}
        <PDFPreviewLayout />
        {headerEditModal.isHeaderEditModalOpen && <ResumeHeaderEditModal title={headerEditModal.title} editType={headerEditModal.editType}/>}
    </div>
  )
}

export default ResumeEditorLayout