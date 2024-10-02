import React, { useState } from 'react'
import { Input } from './Input'


export const AddData = () => {
  const [doctorData,setDoctor]=useState();
  const [bedData,setBed]=useState();

  const handleChange = (e, mark) => {
    const { value, name } = e.target
    if (mark === 'doctors') {
      setDoctor((prev) => ({ ...prev, [name]: value.trim() }))
    }
    if (mark === 'beds') {
      setBed((prev) => ({ ...prev, [name]: value }))
    }
  }
  // const addDoctor=async(e)=>{
  //   if
  // }

  return (
   <div className="bg-white rounded-md p-5 shadow-md shadow-black/50">
      <form action="submit" onSubmit={(e) => { addDoctor(e) }}>
        <Input label={"Doctor Name"} name={"doctorname"} type={"text"} change={(e) => handleChange(e, "doctors")} value={doctor.doctorname} />
        <Input label={"Specilization"} name={"specilization"} type={"text"} change={(e) => handleChange(e, "doctors")} value={doctor.specilization} />
        <Input label={"Doctor Role"} name={"role"} type={"text"} change={(e) => handleChange(e, "doctors")} value={doctor.role} />
      
      </form>
      <div className=""></div>
   </div>
  )
}