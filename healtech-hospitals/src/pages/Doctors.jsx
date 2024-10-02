import React,{useState,useEffect} from 'react'
import { Input } from '../components/Input'
import Button from '../components/Button'
import {Select} from '../components/Select'

export const Doctors = ({handleChange,handleNext,addDoctor,doctor,addTiming,setToken,token}) => {
  const days=[
    {
      day:"monday",
      value:'1',
    },
    {
      day:"tuesday",
      value:'2',
    },
    {
      day:"wednesday",
      value:'3',
    },
    {
      day:"thursday",
      value:'4',
    },
    {
      day:"friday",
      value:'5',
    },
    {
      day:"saturday",
      value:'6',
    },
    {
      day:"sunday",
      value:'7',
    }
  ]

  return (
    <>
    <h2 className='text-3xl font-white font-bold tracking-wide my-3'>Doctor Details</h2>
    <div className="p-10 bg-white/30 text-slate-800 flex flex-col  w-1/2 rounded-lg">
    <form action="submit" onSubmit={(e)=>{handleNext(e,'/beds',true)}}>

        <Input label={"Doctor Name"} name={"doctorname"} type={"text"} change={(e)=>handleChange(e,"doctors")} value={doctor.doctorname} />
        <Input label={"Specilization"} name={"specilization"} type={"text"} change={(e)=>handleChange(e,"doctors")} value={doctor.specilization}/>
        <Input label={"Doctor Role"} name={"role"} type={"text"} change={(e)=>handleChange(e,"doctors")} value={doctor.role}/>
              {/* <Input
                label={"Doctor Token"}
                name={"token"}
                type={"text"}
                change={(e) => {
                  const tokens = e.target.value.split(',').map(token => token.trim())
                  setToken(tokens)
                }}
                value={token}
              /> */}


        {/* <div className="grid grid-cols-3 gap-x-4 p-3 bg-gray-500 rounded-lg ">
          <div className="flex flex-col gap-2">
            <label htmlFor="days" className='text-sm text-white font-semibold'>Select Days</label>
            <select name="date" className='"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none' onChange={(e)=>handleChange(e,"timing")}>
              {days.map((day)=>{
                return <option value={day.value}>{day.day}</option>
              })}
            </select>
          </div>
          <Input label={"From-Time"} name={"from"} type={"time"} style={'w-fit'} placeholder={"Select from timing"} change={(e)=>handleChange(e,"timing")}/>
          <Input label={"To-Time"} name={"to"} type={"time"} style={'w-fit'} placeholder={"Select to timing"} change={(e)=>handleChange(e,"timing")}/>
          <Button name={"Add Timing"} click={addTiming}/>
        </div> */}
        <Button name={"Add Doctor"} click={addDoctor} />
        <div className="w-full flex item-center justify-center">
            <Button name={"Next"}  type={"submit"}/>
        </div>
    </form>
  
           
    </div>
    </>
  )
}
