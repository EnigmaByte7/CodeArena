import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Question() {
    const { ques, loading, error, title,diff,tags } = useSelector((state) => state.ques)
    // useEffect(() => {
    //   dispatch(fetchdata());
    // }, [dispatch])
    
  return (      
  <div className='w-100 max-h-screen overflow-y-auto overflow-x-hidden bg-cyan-300 flex flex-col  gap-3 p-3'>
    {/* <div className='font-semibold text-center m-auto text-xl'>:: Counter ::</div> */}
    <div className='font-bold text-3xl text-left '>{title}</div>
    <div className='flex flex-row gap-4'>
        <div className='p-2 pl-3 pr-3 rounded-md text-white font-semibold bg-black w-min h-min text-nowrap'>{diff}</div>
        {
          tags.map(name => 
            <div className='p-2 pl-3 pr-3 rounded-md text-white font-semibold bg-black w-min h-min text-nowrap'>{name}</div>
          )
        }
    </div>
    <div className='text-xl flex flex-col gap-2 font-medium text-wrap ' dangerouslySetInnerHTML={{ __html: ques }}></div>

  </div>
  )
}
