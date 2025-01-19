import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    theme: 1,
    error: null,
    currlang: 'cpp',
    currvalue: "...",
    allsnips: []
}

export const editorReducer = createSlice({
    name: 'editorReducer',
    initialState,
    reducers : {
        initialize: (state, action)=>{
            state.allsnips = action.payload
            const langs = action.payload
            if(!langs){ 
                state.error = 'Something Went Wrong!'
                return
            }
            else{
                const sellang = langs.find(lang=> lang.langSlug === state.currlang)
                state.currvalue = sellang ? sellang.code : "..."
            }
        },
        changeLang: (state, action)=>{
            state.currlang = action.payload
            const sellang = state.allsnips.find(lang=> lang.langSlug === state.currlang)
            state.currvalue = sellang ? sellang.code : "..."
        },
        changeTheme: (state, action)=>{
            state.theme = action.payload
        }
    }
})

export default editorReducer.reducer
export const {changeLang, changeTheme, changeValue, initialize} = editorReducer.actions
