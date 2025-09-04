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

export interface ContactInfo {
  name: string;
  value: string;
  isHidden?: boolean;
}

export interface AddSectionParams {
  question: string;
  description: string;
  btnName: string;
}

export interface CertificationCredential {
  school: string;
  course: string;
  degree: string;
  duration: string;
  relevantCourses: string;
}

export interface ExperienceItem {
  jobTitle: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface SkillItem {
  categoryName: string;
  skills: string[];
}

export interface HeaderContent extends ContentEditorSectionParams {
  location: ContactInfo;
  contactInfos: ContactInfo[]
  showFullUrls: boolean;
}

export interface ProfessionalSummary extends ContentEditorSectionParams {
  content?: string;
}

export interface Certification extends ContentEditorSectionParams {
  content?: string;
}

export interface Education extends ContentEditorSectionParams {
  certifications: CertificationCredential[];
}

export interface Experience extends ContentEditorSectionParams {
  experiences: ExperienceItem[];
}

export interface Skills extends ContentEditorSectionParams {
  skills: SkillItem[];
  languages: string[];
  interests: string;
  isSkillHidden?: boolean;
  isLanguageHidden?: boolean;
  isInterestsHidden?: boolean;
}

export interface ContentEditorState {
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