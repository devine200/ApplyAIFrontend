import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { EditorTabEnum, type ResumeEditorState } from "../../types";


const initialState: ResumeEditorState = {
    activeTab: EditorTabEnum.CONTENT,
    headerEditModal: {
        title: "",
        editType: "",
        isHeaderEditModalOpen: false
    },
}

const ResumeEditorSlice = createSlice({
    name: "resumeEditor",
    initialState,
    reducers: {
        updateTab: (state, action: PayloadAction<EditorTabEnum>) => {
            state.activeTab = action.payload;
        },
        updateActiveSelection: (state, action: PayloadAction<string>) => {
            state.activeSelection = action.payload;
        },
        openHeaderEditModal: (state, action: PayloadAction<{title: string, editType: string}>) => {
            state.headerEditModal = {
                ...action.payload,
                isHeaderEditModalOpen: true
            };
        },
        closeHeaderEditModal: (state) => {
            state.headerEditModal.isHeaderEditModalOpen = false;
        },
    }
})

export const { updateTab, updateActiveSelection, openHeaderEditModal, closeHeaderEditModal } = ResumeEditorSlice.actions
export default ResumeEditorSlice.reducer