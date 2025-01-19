import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLang, changeTheme } from '../features/editorSlice';

export default function Select() {
    const dispatch = useDispatch();
  const languages = ["Java", "CPP", "JavaScript","TypeScript", "Python3", "Rust", "C", "Ruby", "PHP", "Golang", "Dart", "Kotlin"];
  const {currlang, theme} = useSelector(state => state.editor)
  const onChange = (value)=>{
    dispatch(changeLang(value))
  }
  const handleTheme = (e)=>{
     console.log(e.target.checked);
     
    dispatch(changeTheme(e.target.checked ? 0 : 1))
  }

  
  
  return (
    <div className='flex flex-row items-center justify-between p-3'>
        <select
            value={currlang}
            onChange={(e) => onChange(e.target.value)}
            className="p-2 w-[30%] rounded-lg outline-none  text-black"
            >
            {languages.map((lang) => (
            <option key={lang} value={lang.toLowerCase()}>
                {lang}
            </option>
            ))}
        </select>
        <div className='flex flex-row gap-4'>
            <div className='text-right font-semibold text-lg'>Toggle Theme</div> 
            <input type='checkbox' onChange={handleTheme} checked={theme == 0}></input> 
        </div>
    </div>
  
  )
}
