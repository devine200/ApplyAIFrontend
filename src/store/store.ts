import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter/counterSlice";
import ContentEditorReducer from "./ContentEditor/contentEditor";
import DesignEditorReducer from "./DesignEditor/designEditor";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        contentEditor: ContentEditorReducer,
        designEditor: DesignEditorReducer, 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch