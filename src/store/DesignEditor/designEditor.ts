import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DesignEditorState } from "../../types";

import ModernResumeImage from "../../assets/resume/modern-resume.webp";
import MinimalistResumeImage from "../../assets/resume/minimalist-resume.webp";
import AccentResumeImage from "../../assets/resume/accent-resume.webp";
import ClassicResumeImage from "../../assets/resume/classic-resume.webp";

const initialState: DesignEditorState = {
    selectedTemplateIdx: 0,
    resumeTemplates: [
        {   
            templateSelection: {
                templateImg: ClassicResumeImage,
                name: "Classic",
            },
            layoutFields: [
                {
                    name: "Header Alignment",
                    options: ["Left", "Center", "Right"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Margin Size",
                    options: ["Small", "Medium", "Large"],
                    selectedOptionIdx: 0
                },
            ],
            textFormatFields: [
                {
                    name: "Font Family",
                    options: ["Arial", "Times New Roman", "Georgia", "Verdana"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Font Size",
                    options: ["7px", "8px", "9px", "10px", "11px", "12px", "14px"],
                    selectedOptionIdx: 3
                },
                {
                    name: "Line Height",
                    options: ["1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2"],
                    selectedOptionIdx: 2
                },
                {
                    name: "Full Name Capitalization",
                    options: ["true", "false"],
                    selectedOptionIdx: 2
                }
            ],
            contentFormatFields: [
                {
                    name: "Bullet Icon",
                    options: ["Disc", "Dash", "Arrow"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Skills Layout",
                    options: ["not listed", "listed"],
                    selectedOptionIdx: 0
                },
            ]
        },
        {
            templateSelection: {
                templateImg: AccentResumeImage,
                name: "Accent",
                colors: ["#2563EB", "#16A34A", "#DB2777", "#D97706"],
                selectedColorIdx: 0
            },
            layoutFields: [
                {
                    name: "Header Alignment",
                    options: ["Left", "Center", "Right"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Margin Size",
                    options: ["Small", "Medium", "Large"],
                    selectedOptionIdx: 0
                },
            ],
            textFormatFields: [
                {
                    name: "Font Family",
                    options: ["Arial", "Times New Roman", "Georgia", "Verdana"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Font Size",
                    options: ["7px", "8px", "9px", "10px", "11px", "12px", "14px"],
                    selectedOptionIdx: 3
                },
                {
                    name: "Line Height",
                    options: ["1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2"],
                    selectedOptionIdx: 2
                },
            ],
            contentFormatFields: [
                {
                    name: "Bullet Icon",
                    options: ["Disc", "Dash", "Arrow"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Skills Layout",
                    options: ["not listed", "listed"],
                    selectedOptionIdx: 0
                },
            ]
        },
        {
            templateSelection: {
                templateImg: MinimalistResumeImage,
                name: "Minimalist",
            },
            layoutFields: [
                {
                    name: "Header Alignment",
                    options: ["Left", "Center", "Right"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Margin Size",
                    options: ["Small", "Medium", "Large"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Section Seperator",
                    options: ["true", "false"],
                    selectedOptionIdx: 0
                },
            ],
            textFormatFields: [
                {
                    name: "Font Family",
                    options: ["Arial", "Times New Roman", "Georgia", "Verdana"],
                    selectedOptionIdx: 1
                },
                {
                    name: "Font Size",
                    options: ["7px", "8px", "9px", "10px", "11px", "12px", "14px"],
                    selectedOptionIdx: 3
                },
                {
                    name: "Line Height",
                    options: ["1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2"],
                    selectedOptionIdx: 2
                },
                {
                    name: "Full Name Capitalization",
                    options: ["true", "false"],
                    selectedOptionIdx: 2
                }
            ],
            contentFormatFields: [
                {
                    name: "Bullet Icon",
                    options: ["Disc", "Dash", "Arrow"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Skills Layout",
                    options: ["not listed", "listed"],
                    selectedOptionIdx: 0
                },
            ]
        },
        {
            templateSelection: {
                templateImg: ModernResumeImage,
                name: "Modern",
                colors: ["#2563EB", "#16A34A", "#DB2777", "#D97706"],
                selectedColorIdx: 0
            },
            layoutFields: [
                {
                    name: "Margin Size",
                    options: ["Small", "Medium", "Large"],
                    selectedOptionIdx: 0
                },
            ],
            textFormatFields: [
                {
                    name: "Font Family",
                    options: ["Arial", "Times New Roman", "Georgia", "Verdana"],
                    selectedOptionIdx: 1
                },
                {
                    name: "Font Size",
                    options: ["7px", "8px", "9px", "10px", "11px", "12px", "14px"],
                    selectedOptionIdx: 3
                },
                {
                    name: "Line Height",
                    options: ["1", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "2"],
                    selectedOptionIdx: 2
                },
                {
                    name: "Full Name Capitalization",
                    options: ["true", "false"],
                    selectedOptionIdx: 2
                }
            ],
            contentFormatFields: [
                {
                    name: "Bullet Icon",
                    options: ["Disc", "Dash", "Arrow"],
                    selectedOptionIdx: 0
                },
                {
                    name: "Skills Layout",
                    options: ["not listed", "listed"],
                    selectedOptionIdx: 0
                },
            ]
        },
    ]
}

const DesignEditorSlice = createSlice({
    name: "designEditor",
    initialState,
    reducers: {
        selectTemplateColor: (state, action: PayloadAction<number>) => {
            state.resumeTemplates[state.selectedTemplateIdx].templateSelection.selectedColorIdx = action.payload;
        },
        selectTemplateLayout: (state, action: PayloadAction<number>) => {
            console.log("updating template")
            state.selectedTemplateIdx = action.payload;
        },
        selectSkillLayout: (state, action: PayloadAction<boolean>) => {
            state.resumeTemplates[state.selectedTemplateIdx].contentFormatFields.find(field => field.name === "Skills Layout")!.selectedOptionIdx = action.payload ? 1 : 0;
        },
        updateLayoutFieldSelection: (state, action: PayloadAction<{ fieldIdx: number, selectedOptionIdx: number }>) => {
            const { fieldIdx, selectedOptionIdx } = action.payload;
            state.resumeTemplates[state.selectedTemplateIdx].layoutFields[fieldIdx].selectedOptionIdx = selectedOptionIdx;
        },
        updateTextFormatFieldSelection: (state, action: PayloadAction<{ fieldIdx: number, selectedOptionIdx: number }>) => {
            const { fieldIdx, selectedOptionIdx } = action.payload;
            state.resumeTemplates[state.selectedTemplateIdx].textFormatFields[fieldIdx].selectedOptionIdx = selectedOptionIdx;
        },
        updateContentFormatFieldSelection: (state, action: PayloadAction<{ fieldIdx: number, selectedOptionIdx: number }>) => {
            const { fieldIdx, selectedOptionIdx } = action.payload;
            state.resumeTemplates[state.selectedTemplateIdx].contentFormatFields[fieldIdx].selectedOptionIdx = selectedOptionIdx;
        }
    }
})

export const { selectTemplateColor, selectTemplateLayout, selectSkillLayout, updateLayoutFieldSelection, updateTextFormatFieldSelection, updateContentFormatFieldSelection } = DesignEditorSlice.actions
export default DesignEditorSlice.reducer