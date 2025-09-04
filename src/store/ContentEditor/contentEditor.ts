import { createSlice } from "@reduxjs/toolkit";
import type { ContentEditorState } from "../../types";

// const initialState: ContentEditorState = {
//     header: {
//         title: "Developer Relations Engineer",
//         location: { name: "Location", value: "Lagos, Nigeria", isHidden: false },
//         contactInfos: [
//             { name: "Phone Number", value: "", isHidden: false },
//             { name: "LinkedIn", value: "", isHidden: false },
//             { name: "GitHub", value: "", isHidden: false }
//         ],
//         showFullUrls: false,
//         isEditable: false,
//     },
//     professionalSummary: {
//         title: "Professional Summary",
//         content: "Full-Stack Engineer and LLM Developer with expertise in Python, Django, React, and TypeScript, experienced in building scalable applications, AI integrations, and blockchain solutions. Skilled at optimizing backend performance, developing responsive frontends, and deploying secure systems on AWS, GCP, and Docker. Proven ability to lead teams, unblock developers, and deliver production-ready solutions, with successful projects at Outsella, Tradable, and Melscape.",
//         isEditable: true,
//     },
//     education: {
//         title: "Education",
//         certifications: [
//             {
//                 school: "Nnamdi Azikiwe University",
//                 course: "Electronic and Computer Engineering",
//                 degree: "Bachelor's",
//                 duration: "2015 - 2021",
//                 relevantCourses: "Data Structures and Algorithms, Database Management Systems, Computer Networks, Operating Systems, Software Engineering, Web Development, Mobile App Development"
//             }
//         ],
//         addSectionParams: {
//             question: "Have more than one major or minor?",
//             description: "Add another education section to highlight your diverse academic background.",
//             btnName: "Add Education"
//         },
//         isEditable: true,
//         isDraggable: true,
//     },
//     certification: {
//         title: "Certification",
//         isEditable: true,
//         isDraggable: true, 
//     },
//     professionalExperiences: {
//         title: "Professional Experience",
//         isDraggable: true,
//         isEditable: true,
//         addSectionParams: {
//             question: "Want to add a new experience?",
//             description: "Add them to your Simplify Profile. You can selectively hide/show relevant experiences for each resume you create.",
//             btnName: "Add Experience"
//         },
//         experiences: [
//             {
//                 jobTitle: "Developer Relations Engineer",
//                 company: "Outsella",
//                 duration: "Jan 2024 - Present",
//                 responsibilities: [
//                     "Oversaw and optimized web services, smart contracts, and websites to maintain 99.9% uptime and seamless functionality, scaling backend services to support 1,000+ users during peak traffic",
//                     "Built REST API endpoints using Django and Django Rest Framework, achieving a 30% improvement in backend response times"
//                 ]
//             },
//             {
//                 jobTitle: "Developer Relations Engineer",
//                 company: "Outsella2",
//                 duration: "Jan 2024 - Present",
//                 responsibilities: [
//                     "Oversaw and optimized web services, smart contracts, and websites to maintain 99.9% uptime and seamless functionality, scaling backend services to support 1,000+ users during peak traffic",
//                     "Built REST API endpoints using Django and Django Rest Framework, achieving a 30% improvement in backend response times"
//                 ]
//             },
//         ]
//     },
//     outsideExperiences: {
//         title: "Projects & Outside Experience",
//         isDraggable: true,
//         isEditable: true,
//         addSectionParams: {
//             question: "Want to add a new project?",
//             description: "Add them to your Simplify Profile. You can selectively hide/show relevant projects for each resume you create.",
//             btnName: "Add Project"
//         },
//         experiences: [
//             {
//                 jobTitle: "Developer Relations Engineer",
//                 company: "Outsella",
//                 duration: "Jan 2024 - Present",
//                 responsibilities: [
//                     "Oversaw and optimized web services, smart contracts, and websites to maintain 99.9% uptime and seamless functionality, scaling backend services to support 1,000+ users during peak traffic",
//                     "Built REST API endpoints using Django and Django Rest Framework, achieving a 30% improvement in backend response times"
//                 ]
//             },
//             {
//                 jobTitle: "Developer Relations Engineer",
//                 company: "Outsella2",
//                 duration: "Jan 2024 - Present",
//                 responsibilities: [
//                     "Oversaw and optimized web services, smart contracts, and websites to maintain 99.9% uptime and seamless functionality, scaling backend services to support 1,000+ users during peak traffic",
//                     "Built REST API endpoints using Django and Django Rest Framework, achieving a 30% improvement in backend response times"
//                 ]
//             },
//         ],
//     },
//     skills: {
//         title: "Skills & Interests",
//         isEditable: false,
//         isDraggable: true,
//         skills: [
//             {
//                 categoryName: "Skills",
//                 skills: [
//                     "TypeScript",
//                     "HTML",
//                     "CSS",
//                     "Python",
//                     "TypeScript",
//                     "HTML",
//                     "CSS",
//                     "Python",
//                     "TypeScript",
//                     "HTML",
//                     "CSS",
//                     "Python",
//                 ]
//             },
//         ],
//         languages: [
//             "Danish",
//             "English",
//             "French",
//         ],
//         interests: "Gaming, Singing and Dancing"
//     }
// }

const initialState: ContentEditorState = {
    header: {
        title: "Frontend Developer",
        location: { name: "Location", value: "Berlin, Germany", isHidden: false },
        contactInfos: [
            { name: "Phone Number", value: "+49 123 456 789", isHidden: false },
            { name: "LinkedIn", value: "linkedin.com/in/johndoe", isHidden: false },
            { name: "GitHub", value: "github.com/johndoe", isHidden: false }
        ],
        showFullUrls: false,
        isEditable: false,
    },
    professionalSummary: {
        title: "Professional Summary",
        content: "Creative Frontend Developer with 4+ years of experience building responsive web applications using React, Vue, and TypeScript. Adept at translating UI/UX designs into interactive experiences and collaborating with cross-functional teams to deliver scalable and maintainable solutions. Strong background in performance optimization and accessibility.",
        isEditable: true,
    },
    education: {
        title: "Education",
        certifications: [
            {
                school: "Technical University of Munich",
                course: "Computer Science",
                degree: "Bachelor's",
                duration: "2016 - 2020",
                relevantCourses: "Web Technologies, Software Engineering, Machine Learning, Cloud Computing, Human-Computer Interaction"
            }
        ],
        addSectionParams: {
            question: "Have more than one major or minor?",
            description: "Add another education section to highlight your diverse academic background.",
            btnName: "Add Education"
        },
        isEditable: true,
        isDraggable: true,
    },
    certification: {
        title: "Certification",
        isEditable: true,
        isDraggable: true, 
    },
    professionalExperiences: {
        title: "Professional Experience",
        isDraggable: true,
        isEditable: true,
        addSectionParams: {
            question: "Want to add a new experience?",
            description: "Add them to your Simplify Profile. You can selectively hide/show relevant experiences for each resume you create.",
            btnName: "Add Experience"
        },
        experiences: [
            {
                jobTitle: "Frontend Developer",
                company: "TechNova Solutions",
                duration: "Feb 2021 - Present",
                responsibilities: [
                    "Developed and maintained React-based dashboards used by over 5,000 active users weekly",
                    "Collaborated with designers to implement pixel-perfect UI components, improving customer satisfaction scores by 20%"
                ]
            },
            {
                jobTitle: "Junior Web Developer",
                company: "InnoWeb Agency",
                duration: "Aug 2019 - Jan 2021",
                responsibilities: [
                    "Built responsive websites for small business clients using HTML, CSS, and JavaScript",
                    "Optimized site performance leading to an average 35% faster load time across client projects"
                ]
            },
        ]
    },
    outsideExperiences: {
        title: "Projects & Outside Experience",
        isDraggable: true,
        isEditable: true,
        addSectionParams: {
            question: "Want to add a new project?",
            description: "Add them to your Simplify Profile. You can selectively hide/show relevant projects for each resume you create.",
            btnName: "Add Project"
        },
        experiences: [
            {
                jobTitle: "Open Source Contributor",
                company: "React Community",
                duration: "2022 - Present",
                responsibilities: [
                    "Contributed to React component libraries improving accessibility support",
                    "Wrote documentation and tutorials used by over 1,000 developers worldwide"
                ]
            },
            {
                jobTitle: "Freelance Web Developer",
                company: "Self-Employed",
                duration: "2020 - 2022",
                responsibilities: [
                    "Delivered custom websites for startups and entrepreneurs, focusing on modern design trends",
                    "Integrated third-party APIs for payment and authentication workflows"
                ]
            },
        ],
    },
    skills: {
        title: "Skills & Interests",
        isEditable: false,
        isDraggable: true,
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
                ]
            },
        ],
        languages: [
            "German",
            "English",
            "Spanish",
        ],
        interests: "Traveling, Photography, Playing Guitar"
    }
}


const ContentEditorSlice = createSlice({
    name: 'contentEditor',
    initialState,
    reducers: {

    }
})


export default ContentEditorSlice.reducer