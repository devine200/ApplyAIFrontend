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
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import CustomSectionForm from "./ContentEditor/CustomSectionForm"


const ContentEditorLayout = () => {
  const {customSections} = useSelector((state: RootState)=> state.contentEditor);

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
        {customSections.map((_, index)=> <CustomSectionForm idx={index}/>)}
        <AddCustomSection />
    </div>
  )
}

export default ContentEditorLayout