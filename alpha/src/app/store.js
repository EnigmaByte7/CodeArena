import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import questionReducer from "../features/quesSlice.jsx"
import  editorReducer from "../features/editorSlice.jsx";

const store = configureStore({
    reducer: {
        counter : counterReducer,
        ques : questionReducer,
        editor: editorReducer
    }
})

export default store;