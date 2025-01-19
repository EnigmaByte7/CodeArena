import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const versions = {
    java: "1.8",
    cpp: "10.2.0",
    javascript: "ES6",
    typescript: "4.4",
    python3: "3.9",
    rust: "1.56",
    c: "C11",
    ruby: "3.0",
    php: "8.0",
    golang: "1.17",
    dart: "2.14",
    kotlin: "1.5",
  };
  

export const runCode = createAsyncThunk(
    'run/execute',
    async (payload, { getState, rejectWithValue }) => {
      let { currlang, currvalue } = getState().editor;  
      const version = versions[currlang]
        console.log(currlang, currvalue, versions[currlang])
        if(currlang === "cpp") currlang = 'c++'
      try {
        const response = await axios.post('https://emkc.org/api/v2/piston/execute',
         {
          language: currlang,
          version: version,  
          files: [{
            content: currvalue
        },],
        });
        console.log(response)
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.response.data); 
      }
    }
  );


  const runReducer = createSlice({
    name: 'run',
    initialState: {
      result: '',
      error: '',
      loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(runCode.pending, (state) => {
          state.loading = true;
        })
        .addCase(runCode.fulfilled, (state, action) => {
          state.loading = false;
          state.result = action.payload; 
        })
        .addCase(runCode.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload; 
        });
    },
  });
  
  export default runReducer.reducer;