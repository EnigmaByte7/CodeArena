import { createSlice } from "@reduxjs/toolkit";
import {data} from '../api/source'
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const fetchdata = createAsyncThunk(
//     "thunk/userdata",
//     async ()=> {
//         const response = await axios.get('https://alfa-leetcode-api.onrender.com/dailyQuestion')
//         return response.data
//     }
// )
const _ = data.data.activeDailyCodingChallengeQuestion.question;


export const questionReducer = createSlice({
    name: 'questionReducer',
    initialState : { 
        ques: _.content,
        title:_.title,
        tags : _.topicTags.map(item => item['name']),
        diff: _.difficulty,
        lang: _.codeSnippets,
        tests: _.sampleTestCase, 
        loading : false,
        error : null
    },
    reducers : {},
    // extraReducers : (builder) => {
    //     builder
    //     .addCase(fetchdata.pending, (state) => {
    //         state.loading = true
    //     })
    //     .addCase(fetchdata.fulfilled, (state, action) => {
    //         const _ = action.payload.data.activeDailyCodingChallengeQuestion.question;
    //         state.ques = _.content
    //         state.title = _.title
    //         state.diff = _.difficulty
    //         state.tags = _.topicTags.map((item) => item["name"])
    //         state.lang = _.codeSnippets
    //         state.loading = false
    //     })
    //     .addCase(fetchdata.rejected, (state) => {
    //         state.error = 'Something went Wrong!'
    //     })
    // }
})

 export default questionReducer.reducer
