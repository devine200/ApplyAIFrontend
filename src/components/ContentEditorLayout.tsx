import EducationContentForm from "./ContentEditor/EducationContentForm"
import HeaderContentForm from "./ContentEditor/HeaderContentForm"
import ProfessionalSummaryForm from "./ContentEditor/ProfessionalSummaryForm"
import CertificationForm from "./ContentEditor/CertificationForm"
import ProfessionalExperienceForm from "./ContentEditor/ProfessionalExperienceForm"

const ContentEditorLayout = () => {
  return (
    <div className="layout-section content-editor-layout">
        <HeaderContentForm />
        <ProfessionalSummaryForm />
        <EducationContentForm />
        <CertificationForm />
        <ProfessionalExperienceForm />
        <div className="content-editor-children">content</div>
        <div className="content-editor-children">content</div>
    </div>
  )
}

export default ContentEditorLayout