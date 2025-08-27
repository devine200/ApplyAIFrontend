import { EditorTabEnum } from "../types"
import { useState } from "react"

import ContentEditorLayout from './ContentEditorLayout'
import PDFPreviewLayout from './PDFPreviewLayout'
import DesignEditorLayout from "./DesignEditorLayout"
import '../styles/ResumeEditor.css'

const ResumeEditorLayout = () => {
  const [activeEditorTab, setActiveEditorTab] = useState<EditorTabEnum>(EditorTabEnum.CONTENT)
  const handleTabChange = (tab: EditorTabEnum) => {
    setActiveEditorTab(tab)
  }
  
  return (
    <div className="editor-layout">
        {activeEditorTab === EditorTabEnum.CONTENT ? <ContentEditorLayout activeTab={activeEditorTab} onTabChange={handleTabChange}/>: <DesignEditorLayout activeTab={activeEditorTab} onTabChange={handleTabChange}/>}
        <PDFPreviewLayout />
    </div>
  )
}

export default ResumeEditorLayout