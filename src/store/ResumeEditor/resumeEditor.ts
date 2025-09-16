import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { EditorTabEnum, type ResumeEditorState } from "../../types";


const initialState: ResumeEditorState = {
    activeTab: EditorTabEnum.CONTENT
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
        }
    }
})

export const { updateTab, updateActiveSelection } = ResumeEditorSlice.actions
export default ResumeEditorSlice.reducer