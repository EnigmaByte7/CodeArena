import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Console() {
    const {loading, error, result} = useSelector(state => state.run)
    console.log(result)
  return (
    <div className='w-full h-[20vh] bg-green-400 p-4 rounded-md'>
        {
            loading && <div className='font-semibold text-black'>Loading....</div>
        }
        {
            !loading && error && <div className='font-semibold text-red-700'>{error.message}</div>
        }
        {
            !loading && !error && result && result.run.stderr != "" && <div className='font-semibold text-red-500'>{result.run.stderr}</div>
        }
        {
            !loading && !error && result && result.run.stderr == "" && <div className='font-semibold text-blue-500'>{result.run.stdout}</div>
        }
    </div>
  )
}
