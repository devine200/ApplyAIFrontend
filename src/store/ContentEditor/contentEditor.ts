import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ContentEditorSectionParams, ContentEditorState } from "../../types";
import { v4 as uuid } from "uuid";

const initialState: ContentEditorState = {
  name: "John Doe",
  header: {
    title: "Frontend Developer",
    elementID: uuid().toString(),
    location: { name: "Location", value: "Berlin, Germany", isHidden: false },
    contactInfos: [
      {
        name: "Email",
        value: "you@example.com",
        isHidden: false,
      },
      { name: "Phone Number", value: "+49 123 456 789", isHidden: false },
      {
        name: "LinkedIn",
        value: "https://linkedin.com/in/johndoe",
        isHidden: false,
      },
      {
        name: "GitHub",
        value: "https://github.com/johndoe",
        isHidden: false,
      },
    ],
    showFullUrls: false,
    isEditable: false,
  },
  professionalSummary: {
    title: "Professional Summary",
    content:
      "Creative Frontend Developer with 4+ years of experience building responsive web applications using React, Vue, and TypeScript. Adept at translating UI/UX designs into interactive experiences and collaborating with cross-functional teams to deliver scalable and maintainable solutions. Strong background in performance optimization and accessibility.",
    isEditable: true,
    elementID: uuid().toString(),
    contentElementID: uuid().toString(),
  },
  education: {
    title: "Education",
    elementID: uuid().toString(),
    certifications: [
      {
        school: "Technical University of Munich",
        course: "Computer Science",
        degree: "Bachelor's",
        duration: "September 2017 - June 2021",
        elementID: uuid().toString(),
        // relevantCourses: "Web Technologies, Software Engineering, Machine Learning, Cloud Computing, Human-Computer Interaction"
      },
    ],
    addSectionParams: {
      question: "Have more than one major or minor?",
      description:
        "Add another education section to highlight your diverse academic background.",
      btnName: "Add Education",
    },
    isEditable: true,
    isDraggable: true,
  },
  certification: {
    title: "Certification",
    isEditable: true,
    isDraggable: true,
    elementID: uuid().toString(),
    contentElementID: uuid().toString(),
  },
  professionalExperiences: {
    title: "Professional Experience",
    elementID: uuid().toString(),
    isDraggable: true,
    isEditable: true,
    addSectionParams: {
      question: "Want to add a new experience?",
      description:
        "Add them to your Simplify Profile. You can selectively hide/show relevant experiences for each resume you create.",
      btnName: "Add Experience",
    },
    experiences: [
      {
        jobTitle: "Frontend Developer",
        jobTitleElementID: uuid().toString(),
        company: "TechNova Solutions",
        duration: "Feb 2021 - Present",
        responsibilities: [
          {
            value:
              "Developed and maintained React-based dashboards used by over 5,000 active users weekly",
            elementID: uuid().toString(),
          },
          {
            value:
              "Collaborated with designers to implement pixel-perfect UI components, improving customer satisfaction scores by 20%",
            elementID: uuid().toString(),
          },
        ],
        elementID: uuid().toString(),
      },
      {
        jobTitle: "Junior Web Developer",
        jobTitleElementID: uuid().toString(),
        company: "InnoWeb Agency",
        duration: "Aug 2019 - Jan 2021",
        responsibilities: [
          {
            value:
              "Built responsive websites for small business clients using HTML, CSS, and JavaScript",
            elementID: uuid().toString(),
          },
          {
            value:
              "Optimized site performance leading to an average 35% faster load time across client projects",
            elementID: uuid().toString(),
          },
        ],
        elementID: uuid().toString(),
      },
      {
        jobTitle: "Frontend Developer",
        jobTitleElementID: uuid().toString(),
        company: "TechNova Solutions",
        duration: "Feb 2021 - Present",
        responsibilities: [
          {
            value:
              "Developed and maintained React-based dashboards used by over 5,000 active users weekly",
            elementID: uuid().toString(),
          },
          {
            value:
              "Collaborated with designers to implement pixel-perfect UI components, improving customer satisfaction scores by 20%",
            elementID: uuid().toString(),
          },
        ],
        elementID: uuid().toString(),
      },
      {
        jobTitle: "Junior Web Developer",
        jobTitleElementID: uuid().toString(),
        company: "InnoWeb Agency",
        duration: "Aug 2019 - Jan 2021",
        responsibilities: [
          {
            value:
              "Built responsive websites for small business clients using HTML, CSS, and JavaScript",
            elementID: uuid().toString(),
          },
          {
            value:
              "Optimized site performance leading to an average 35% faster load time across client projects",
            elementID: uuid().toString(),
          },
        ],
        elementID: uuid().toString(),
      },
    ],
  },
  outsideExperiences: {
    title: "Projects & Outside Experience",
    elementID: uuid().toString(),
    isDraggable: true,
    isEditable: true,
    addSectionParams: {
      question: "Want to add a new project?",
      description:
        "Add them to your Simplify Profile. You can selectively hide/show relevant projects for each resume you create.",
      btnName: "Add Project",
    },
    experiences: [
      {
        jobTitle: "Open Source Contributor",
        jobTitleElementID: uuid().toString(),
        company: "React Community",
        duration: "2022 - Present",
        responsibilities: [
          {
            value:
              "Contributed to React component libraries improving accessibility support",
            elementID: uuid().toString(),
          },
          {
            value:
              "Wrote documentation and tutorials used by over 1,000 developers worldwide",
            elementID: uuid().toString(),
          },
          {
            value:
              "Wrote documentation and tutorials used by over 1,000 developers worldwide",
            elementID: uuid().toString(),
          },
        ],
        elementID: uuid().toString(),
      },
      {
        jobTitle: "Freelance Web Developer",
        jobTitleElementID: uuid().toString(),
        company: "Self-Employed",
        duration: "2020 - 2022",
        responsibilities: [
          {
            value:
              "Delivered custom websites for startups and entrepreneurs, focusing on modern design trends",
            elementID: uuid().toString(),
          },
          {
            value:
              "Integrated third-party APIs for payment and authentication workflows",
            elementID: uuid().toString(),
          },
        ],
        elementID: uuid().toString(),
      },
      {
        jobTitle: "Freelance Web Developer",
        jobTitleElementID: uuid().toString(),
        company: "Self-Employed",
        duration: "2020 - 2022",
        responsibilities: [
          {
            value:
              "Delivered custom websites for startups and entrepreneurs, focusing on modern design trends",
            elementID: uuid().toString(),
          },
          {
            value:
              "Integrated third-party APIs for payment and authentication workflows",
            elementID: uuid().toString(),
          },
        ],
        elementID: uuid().toString(),
      },
    ],
  },
  skills: {
    title: "Skills & Interests",
    isEditable: false,
    isDraggable: true,
    elementID: uuid().toString(),
    languagesElementID: uuid().toString(),
    interestsElementID: uuid().toString(),
    skills: [
      {
        categoryName: "Skills",
        skills: [
          "React",
          "Vue.js",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express",
          "MongoDB",
          "PostgreSQL",
          "Docker",
          "AWS",
          "Figma",
        ],
        elementID: uuid().toString(),
      },
    ],
    languages: ["German", "English", "Spanish"],
    interests: "Traveling, Photography, Playing Guitar",
  },
};

const ContentEditorSlice = createSlice({
  name: "contentEditor",
  initialState,
  reducers: {
    toggleContactVisibility: (state: ContentEditorState, action: PayloadAction<string>) => {
        state.header.contactInfos.map((contactInfo)=> {
            if (contactInfo.name.toLowerCase() === action.payload.toLowerCase()) {
                contactInfo.isHidden = !contactInfo.isHidden;
            }
            return contactInfo;
        })
    },
    toggleLocationVisibility: (state: ContentEditorState) => {
        state.header.location.isHidden = !state.header.location.isHidden;
    },
    toggleShowFullUrls: (state: ContentEditorState) => {
        state.header.showFullUrls = !state.header.showFullUrls;
    },
    updateLocation: (state: ContentEditorState, action: PayloadAction<string>) => {
        state.header.location.value = action.payload;
    },
    addProfessionalExperienceResponsibility: (state: ContentEditorState, action: PayloadAction<string>) => {
        const expId = action.payload;
        state.professionalExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                experience.responsibilities.push(
                    {
                        value: "",
                        elementID: uuid().toString(),
                    },
                );
            }
            return experience
        })
    },
    updateProfessionalExperienceResponsibility: (state: ContentEditorState, action: PayloadAction<{expId: string, respId: string, value: string}>) => {
        const {expId, respId, value} = action.payload;
        state.professionalExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                experience.responsibilities.map((resp)=>{
                    if(resp.elementID === respId) {
                        resp.value = value;
                    }
                    return resp;
                });
            }
            return experience
        })
    },
    toggleProfessionalExperienceResponsibilityVisibility: (state: ContentEditorState, action: PayloadAction<{expId: string, respId: string}>) => {
        const {expId, respId} = action.payload;
        state.professionalExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                experience.responsibilities.map((resp)=>{
                    if(resp.elementID === respId) {
                        resp.isHidden = resp.isHidden === undefined ? true : !resp.isHidden;
                        console.log(resp.isHidden)
                    }
                    return resp;
                });
            }
            return experience
        })
    },

    deleteProfessionalExperienceResponsibility: (state: ContentEditorState, action: PayloadAction<{expId: string, respId: string}>) => {
        const {expId, respId} = action.payload;
        state.professionalExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                const newResp = experience.responsibilities.filter(({elementID})=> elementID !== respId);
                experience.responsibilities = newResp;
            }
            return experience
        })
    },
    addOutsideExperienceResponsibility: (state: ContentEditorState, action: PayloadAction<string>) => {
        const expId = action.payload;
        state.outsideExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                experience.responsibilities.push(
                    {
                    value: "",
                    elementID: uuid().toString(),
                    },
                );
            }
            return experience
        })
    },
    updateOutsideExperienceResponsibility: (state: ContentEditorState, action: PayloadAction<{expId: string, respId: string, value: string}>) => {
        const {expId, respId, value} = action.payload;
        state.outsideExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                experience.responsibilities.map((resp)=>{
                    if(resp.elementID === respId) {
                        resp.value = value;
                    }
                    return resp;
                });
            }
            return experience
        })
    },
    toggleOutsideExperienceResponsibilityVisibility: (state: ContentEditorState, action: PayloadAction<{expId: string, respId: string}>) => {
        const {expId, respId} = action.payload;
        state.outsideExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                experience.responsibilities.map((resp)=>{
                    if(resp.elementID === respId) {
                        resp.isHidden = resp.isHidden === undefined ? true : !resp.isHidden;
                        console.log(resp.isHidden)
                    }
                    return resp;
                });
            }
            return experience
        })
    },

    deleteOutsideExperienceResponsibility: (state: ContentEditorState, action: PayloadAction<{expId: string, respId: string}>) => {
        const {expId, respId} = action.payload;
        state.outsideExperiences.experiences.map((experience)=>{
            if (experience.elementID === expId) {
                const newResp = experience.responsibilities.filter(({elementID})=> elementID !== respId);
                experience.responsibilities = newResp;
            }
            return experience
        })
    },
    toggleSkillsVisibility: (state: ContentEditorState) => {
      state.skills.isSkillsHidden = state.skills.isSkillsHidden === undefined ? true : !state.skills.isSkillsHidden;
    },
    toggleInterestsVisibility: (state: ContentEditorState) => {
      state.skills.isInterestsHidden = state.skills.isInterestsHidden === undefined ? true : !state.skills.isInterestsHidden;
    },
    toggleLanguagesVisibility: (state: ContentEditorState) => {
      state.skills.isLanguageHidden = state.skills.isLanguageHidden === undefined ? true : !state.skills.isLanguageHidden;
    },
    updateInterests: (state: ContentEditorState, action: PayloadAction<string>) => {
        state.skills.interests = action.payload;
    },
    deleteLanguage: (state: ContentEditorState, action: PayloadAction<number>) => {
        state.skills.languages = state.skills.languages.filter((_, index) => index !== action.payload);
    },
    deleteCategoryItem: (state: ContentEditorState, action: PayloadAction<{catId:string, itemIdx:number}>) => {
        const {catId, itemIdx} = action.payload;
        state.skills.skills.map(skills=>{
            if(skills.elementID === catId) {
                skills.skills = skills.skills.filter((_,index) => index !== itemIdx);
            }
            return skills;
        });
    },
    addCategoryItem: (state: ContentEditorState, action: PayloadAction<{catId:string, value:string}>) => {
        const {catId, value} = action.payload;
        state.skills.skills.map(skills=>{
            if(skills.elementID === catId) {
                skills.skills.push(value);
            }
            return skills;
        });
    },
    updateCategoryName: (state: ContentEditorState, action: PayloadAction<{catId:string, value:string}>) => {
        const {catId, value} = action.payload;
        state.skills.skills.map(skills=>{
            if(skills.elementID === catId) {
                skills.categoryName = value;
            }
            return skills;
        });
    },

  },
});

export const { 
    toggleContactVisibility, 
    toggleLocationVisibility, 
    updateLocation, 
    toggleShowFullUrls, 
    toggleProfessionalExperienceResponsibilityVisibility,
    addProfessionalExperienceResponsibility,
    updateProfessionalExperienceResponsibility,
    deleteProfessionalExperienceResponsibility,
    toggleOutsideExperienceResponsibilityVisibility,
    addOutsideExperienceResponsibility,
    updateOutsideExperienceResponsibility,
    deleteOutsideExperienceResponsibility,
    toggleLanguagesVisibility,
    toggleInterestsVisibility,
    toggleSkillsVisibility,
    updateInterests,
    deleteLanguage,
    deleteCategoryItem,
    addCategoryItem,
    updateCategoryName,
} = ContentEditorSlice.actions;
export default ContentEditorSlice.reducer;
