import EducationContentForm from "./ContentEditor/EducationContentForm"
import HeaderContentForm from "./ContentEditor/HeaderContentForm"
import ProfessionalSummaryForm from "./ContentEditor/ProfessionalSummaryForm"

const ContentEditorLayout = () => {
  return (
    <div className="layout-section content-editor-layout">
        <HeaderContentForm />
        <ProfessionalSummaryForm />
        <EducationContentForm />
        <div className="content-editor-children">content</div>
        <div className="content-editor-children">content</div>
        <div className="content-editor-children">content</div>
    </div>
  )
}

export default ContentEditorLayout