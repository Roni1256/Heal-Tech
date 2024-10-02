import React from 'react'
import { Input } from '../components/Input'
import Button from '../components/Button'

export const Initial = ({handleChange,msg,handleNext}) => {
  return (
    <>
    <div className="p-10 bg-white/30 text-slate-800 flex flex-col  w-1/2 rounded-lg">
            <form action="submit" onSubmit={(e)=>handleNext(e,'/hospitals')}>
                
            <Input label={"Choose Location"} type={"text"} name={"location"} change={(e)=>handleChange(e)}/>
            {msg &&<span className='text-md text-red-600 font-semibold py-2 bg-slate-900 rounded-lg px-2 '>Fill the Field to proceed!</span>}
            <div className="w-full flex item-center justify-center">
            <Button name={"Next"}  type={'submit'}/>
            </div>
            </form>
            
           
        </div>
    </>
  )
}
