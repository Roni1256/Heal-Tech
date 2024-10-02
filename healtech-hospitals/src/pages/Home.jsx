import React,{useState,useEffect} from 'react'
import { Input } from '../components/Input'
import Button from '../components/Button'


export const Home = ({handleChange,msg,handleNext}) => {

    
  return (
    <>

        <div className="p-10 bg-white/30 text-slate-800 flex flex-col  w-1/2 rounded-lg">
            <form action="submit" onSubmit={(e)=>handleNext(e,'/doctors')}>
                
            <Input label={"Hospital Name"} type={"text"} name={"hospitalname"} change={(e)=>handleChange(e,"hospital")}/>
            <Input label={"Hospital Type"} type={"text"} name={"hospitaltype"} change={(e)=>handleChange(e,"hospital")}/>
            <Input label={"Hospital Mail"} type={"email"} name={"email"} change={(e)=>handleChange(e,"hospital")}/>
            <Input label={"Hospital Helpline"} type={"number"} name={"helpline"} change={(e)=>handleChange(e,"hospital")}/>
            <Input label={"Hospital Location"} type={"text"} name={"location"} change={(e)=>handleChange(e,"hospital")}/>
            <label className='block mb-2 text-sm font-medium text-white '>Hospital Descriptions</label>
            <textarea name="description" cols="70" rows="5" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-1 focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5 focus:outline-none" onChange={(e)=>handleChange(e,"hospital")}></textarea>

            {/* <Input label={"Hospital Image"} type={"file"} name={"img"} change={(e)=>handleChange(e,"hospital")}/> */}
            {msg &&<span className='text-md text-red-600 font-semibold py-2 bg-slate-900 rounded-lg px-2 '>Some fields are empty!</span>}
            <div className="w-full flex item-center justify-center">
            <Button name={"Next"}  type={'submit'}/>
            </div>
            </form>
            
           
        </div>

    </>
  )
}
