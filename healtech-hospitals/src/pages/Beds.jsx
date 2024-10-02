import React from 'react'
import { Input } from '../components/Input'
import Button from '../components/Button'

export const Beds = ({handleChange,handleNext,msg,addBed,beds}) => {

  return (
    <>
    <h2 className='text-3xl font-white font-bold tracking-wide my-3'>Bed Details</h2>
    <div className="p-10 bg-white/30 text-slate-800 flex flex-col  w-1/2 rounded-lg">
    <form action="submit" onSubmit={(e)=>{handleNext(e,'/dashboard',false,true)}}>

        <Input label={"Bed Type"} name={"bedtype"} type={"text"} change={(e)=>handleChange(e,"beds")} value={beds.bedtype} />
        <Input label={"Beds Count"} name={"count"} type={"text"} change={(e)=>handleChange(e,"beds")} value={beds.count}/>
        <Button name={"Add Beds"} click={addBed}/>
        <div className="w-full flex item-center justify-center">
            <Button name={"Next"}  type={"submit"}/>
        </div>
    </form>
           
    </div>
    </>
  )
}
