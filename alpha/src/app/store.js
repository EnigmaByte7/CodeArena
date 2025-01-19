import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import questionReducer from "../features/quesSlice.jsx"
import  editorReducer from "../features/editorSlice.jsx";
import runReducer from "../features/runSlice.jsx";

const store = configureStore({
    reducer: {
        counter : counterReducer,
        ques : questionReducer,
        editor: editorReducer,
        run: runReducer
    }
})

export default store;