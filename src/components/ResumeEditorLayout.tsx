import { EditorTabEnum } from "../types"

import ContentEditorLayout from './ContentEditorLayout'
import PDFPreviewLayout from './PDFPreviewLayout'
import DesignEditorLayout from "./DesignEditorLayout"
import '../styles/ResumeEditor.css'
import type { RootState } from "../store/store"
import { useSelector } from "react-redux"

const ResumeEditorLayout = () => {
  const { activeTab } = useSelector((state:RootState) => state.resumeEditor)
  
  return (
    <div className="editor-layout">
        {activeTab === EditorTabEnum.CONTENT ? <ContentEditorLayout />: <DesignEditorLayout />}
        <PDFPreviewLayout />
    </div>
  )
}

export default ResumeEditorLayout