import React, { useState } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/Input'
import axios from 'axios'

const HOSPITALS_GET='http://localhost:8000/user/hospitals/'
export const Hero = () => {
    const navigate=useNavigate()
    const [showForm,setForm]=useState(false)
    const [email,setMail]=useState("")
    const [warn,setWarn]=useState(false)
    const [matchedData,setData]=useState()
    const handleEmail=async(e)=>{
        setWarn(false)
        setMail(e.target.value)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!email)
            return setWarn(true)
        await axios.get(HOSPITALS_GET)
        .then(res=>{
            const data=res.data.filter((hospital)=>{
                if(hospital.email.toLowerCase()===email.toLowerCase().trim())
                    return hospital
            })
            if(!data)
                return setNoData(true)
            setData(data)
            console.log(data);
            
            navigate('/dashboard',{state:{hospital:data[0]}})
        })
        .catch(err=>{
            console.log(err);            
        })

    }
  return (
    <>
    <div className=" flex items-center justify-center gap-10">

        <Button name={"Signup"} click={()=>{setForm(false);navigate('/home')}}  style={'text-2xl'}/>
    </div>
    <div className="w-1/2 bg-white/40 rounded-lg p-10 shadow-md shadow-black/60">
        <h1 className='text-white font-semibold text-xl mb-10'>Login with email</h1>
        <Input label={"Hospital Email"} name={"email"} change={handleEmail} type={'email'} value={email} style={"text-slate-900"} />
        <Button name={"Submit"} click={handleSubmit} />
    </div>
    </>
  )
}
