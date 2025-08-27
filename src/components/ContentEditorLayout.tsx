import EducationContentForm from "./ContentEditor/EducationContentForm"
import HeaderContentForm from "./ContentEditor/HeaderContentForm"
import ProfessionalSummaryForm from "./ContentEditor/ProfessionalSummaryForm"
import CertificationForm from "./ContentEditor/CertificationForm"
import ProfessionalExperienceForm from "./ContentEditor/ProfessionalExperienceForm"
import OutsideExperienceForm from "./ContentEditor/OutsideExperienceForm"
import SkillsForm from "./ContentEditor/SkillsForm"
import ContentEditorHeader from "./ContentEditor/ContentEditorHeader"
import EditorTab from "./EditorTab"
import type { EditorTabEnum } from "../types"
import AddCustomSection from "./AddCustomSection"


interface ContentEditorLayoutProps {
  activeTab: EditorTabEnum;
  onTabChange: (tab: EditorTabEnum) => void;
}

const ContentEditorLayout = ({ activeTab, onTabChange }: ContentEditorLayoutProps) => {
  return (
    <div className="layout-section content-editor-layout">
        <EditorTab activeTab={activeTab} onTabChange={onTabChange}/>
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