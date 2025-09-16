export enum EditorTabEnum {
  CONTENT = 0,
  DESIGN = 1,
}

export interface ContentEditorSectionParams{
  title: string;
  isEditable: boolean;
  isDraggable?: boolean;
  isHidden?: boolean;
  addSectionParams?: AddSectionParams;
}

export interface ContactInfo{
  name: string;
  value: string;
  isHidden?: boolean;
}

export interface AddSectionParams {
  question: string;
  description: string;
  btnName: string;
}

export interface CertificationCredential extends EditableContent {
  school: string;
  course: string;
  degree: string;
  duration: string;
  relevantCourses?: string;
}

export interface ResumeProps {
  resumeTemplate: ResumeTemplate;
  handleEditSection: (to: string) => void;
  getDesignField: (field: DesignField) => string;
}

export interface ResponsibilityItem extends EditableContent {
  value: string;
  isHidden?: boolean;
}

export interface ExperienceItem extends EditableContent {
  jobTitle: string;
  jobTitleElementID: string;
  company: string;
  duration: string;
  responsibilities: ResponsibilityItem[];
}

export interface SkillItem extends EditableContent {
  categoryName: string;
  skills: string[];
}

export interface EditableContent {
  elementID: string;
}

export interface HeaderContent extends ContentEditorSectionParams, EditableContent {
  location: ContactInfo;
  contactInfos: ContactInfo[]
  showFullUrls: boolean;
}

export interface ProfessionalSummary extends ContentEditorSectionParams, EditableContent {
  content?: string;
  contentElementID: string;
}

export interface Certification extends ContentEditorSectionParams, EditableContent {
  content?: string;
  contentElementID: string;
}

export interface Education extends ContentEditorSectionParams, EditableContent {
  certifications: CertificationCredential[];
}

export interface Experience extends ContentEditorSectionParams, EditableContent {
  experiences: ExperienceItem[];
}

export interface Skills extends ContentEditorSectionParams, EditableContent {
  skills: SkillItem[];
  languages: string[];
  interests: string;
  languagesElementID: string;
  interestsElementID: string;
  isSkillsHidden?: boolean;
  isLanguageHidden?: boolean;
  isInterestsHidden?: boolean;
}

export interface ContentEditorState {
  name: string;
  header: HeaderContent;
  professionalSummary: ProfessionalSummary;
  education: Education;
  certification: Certification;
  professionalExperiences: Experience;
  outsideExperiences: Experience;
  skills: Skills;
}

export interface DesignField {
  name: string;
  options: string[];
  selectedOptionIdx: number;
}

export interface TemplateSelector {
  templateImg: string;
  name: string;
  colors?: string[];
  selectedColorIdx?: number;
}

export interface ResumeTemplate {
  templateSelection: TemplateSelector;
  layoutFields: DesignField[];
  textFormatFields: DesignField[];
  contentFormatFields: DesignField[];
}

export interface DesignEditorState {
  resumeTemplates: ResumeTemplate[];
  selectedTemplateIdx: number;
}

export interface ResumeEditorState {
  activeTab: EditorTabEnum;
  activeSelection?: string;
}