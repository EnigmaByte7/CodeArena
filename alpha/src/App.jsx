import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Editor } from '@monaco-editor/react'
import { initialize } from './features/editorSlice'
import Select from './components/Select'

// import { fetchdata } from './features/quesSlice.jsx'
import './App.css'

function App() {
  const {lang} = useSelector(state => state.ques)
  console.log(lang)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialize(lang))
  }, [])
  
  const {theme, currlang, currvalue, error} = useSelector(state => state.editor)
  console.log(currlang, currvalue)
  return (
      <div className='w-100 bg-orange-300 flex flex-col  gap-3 p-3'>
        <Select />
          <Editor className='p-4' height="90vh" defaultLanguage={currlang} defaultValue={'...'} language={currlang} value={currvalue}  theme={theme === 1 ? 'light' : 'vs-dark'}/>;
      </div>
  )
}

export default App
