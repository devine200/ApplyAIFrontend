import EducationContentForm from "./ContentEditor/EducationContentForm"
import HeaderContentForm from "./ContentEditor/HeaderContentForm"
import ProfessionalSummaryForm from "./ContentEditor/ProfessionalSummaryForm"
import CertificationForm from "./ContentEditor/CertificationForm"
import ProfessionalExperienceForm from "./ContentEditor/ProfessionalExperienceForm"
import OutsideExperienceForm from "./ContentEditor/OutsideExperienceForm"
import SkillsForm from "./ContentEditor/SkillsForm"
import ContentEditorHeader from "./ContentEditor/ContentEditorHeader"
import EditorTab from "./EditorTab"
import AddCustomSection from "./AddCustomSection"


const ContentEditorLayout = () => {
  return (
    <div className="layout-section content-editor-layout">
        <EditorTab />
        <ContentEditorHeader />
        <HeaderContentForm />
        <ProfessionalSummaryForm />
        <EducationContentForm />
        <CertificationForm />
        <ProfessionalExperienceForm />
        <OutsideExperienceForm />
        <SkillsForm />
        <AddCustomSection />
    </div>
  )
}

export default ContentEditorLayout