import ContentEditorLayout from './ContentEditorLayout'
import PDFPreviewLayout from './PDFPreviewLayout'
import '../styles/ResumeEditor.css'

const ResumeEditorLayout = () => {
  return (
    <div className="editor-layout">
        <ContentEditorLayout />
        <PDFPreviewLayout />
    </div>
  )
}

export default ResumeEditorLayout