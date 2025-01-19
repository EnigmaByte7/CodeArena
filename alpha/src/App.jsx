import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Question from './components/Question'
import Editor from './components/Editor'

// import { fetchdata } from './features/quesSlice.jsx'
import './App.css'

function App() {
  return (
    <div className='w-screen h-screen flex flex-row'>
      <div className='w-[50%]'>
        <Question />
      </div>
      <div className='w-[50%]'>
        <Editor />
      </div>
    </div>
  )
}

export default App
