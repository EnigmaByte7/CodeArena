import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Editor } from '@monaco-editor/react'
// import { fetchdata } from './features/quesSlice.jsx'
import './App.css'

function App() {
  const {theme, currlang, currvalue, error} = useSelector(state => state.editor)
  console.log(error, currlang)
  return (
      <div className='w-100 bg-orange-300 flex flex-col  gap-3 p-3'>
          <Editor height="90vh" defaultLanguage={currlang} defaultValue={currvalue}  theme={theme === 1 ? 'light' : 'vs-dark'}/>;
      </div>
  )
}

export default App
