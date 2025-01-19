import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Editor } from '@monaco-editor/react'
import { initialize, changeValue } from '../features/editorSlice'
import Select from '../components/Select'
import Console from '../components/Console'
import { runCode } from '../features/runSlice'

export default function IDE() {
    const {theme, currlang, currvalue, error} = useSelector(state => state.editor)
    const {lang} = useSelector(state => state.ques)
    const [code, setCode] = useState(currvalue || '')
    const dispatch = useDispatch();
    const handleSubmit = ()=>{
    console.log('hello')
    dispatch(changeValue(code))
    dispatch(runCode())
    }

    useEffect(() => {
    dispatch(initialize(lang))
    }, [])

    useEffect(() => {
    setCode(currvalue)
    }, [currvalue])


    console.log(code)
    // console.log(currlang, currvalue)
    return (
        <div className='w-100 bg-orange-300 flex flex-col max-h-screen overflow-y-auto gap-3 p-3'>
            <Select />
            <Editor className='p-4' height="60vh" defaultLanguage={currlang} defaultValue={'...'} language={currlang} value={currvalue}  theme={theme === 1 ? 'light' : 'vs-dark'}  onChange={(value) => setCode(value)}/>
            <div className='w-[10%] p-2 text-center text-white font-semibold bg-black rounded-md cursor-pointer' onClick={handleSubmit}>Run</div>
            <Console />
        </div>
    )
}
