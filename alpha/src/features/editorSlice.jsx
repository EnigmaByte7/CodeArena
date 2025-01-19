import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const langs = useSelector(state => state.ques.lang)

const initialState = {
    theme: 1,
    error: null,
    currlang: 'cpp',
    currvalue: ()=>{
        for (let i = 0; i < langs.length; i++) {
            const item = langs[i];
            if(item.langslug === currlang) return item.code
        }
    }
}

export const editorReducer = createSlice({
    name: 'editorReducer',
    initialState,
    reducers : {
        changeLang: (state, action)=>{
            state.currlang = action.payload
        },
        changeValue: (state, action)=>{
            state.currvalue = action.payload
        },
        changeTheme: (state)=>[
            state.theme = !state.theme
        ]
    }
})

export default editorReducer.reducer
export const {changeLang, changeTheme, changeValue} = editorReducer.actions
