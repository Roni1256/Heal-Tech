import React, {useState, useEffect } from 'react'
import { Input } from './Input'
import { Select } from './Select'
import Button from './Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Submitted } from './Submitted'

const PATIENTSUBMIT_URL='http://localhost:8000/user/patientdetails/'


export const PatientForm = ({hospitalData}) => {
  const navigate=useNavigate()
  const [notify,setNotify]=useState(false)
  const defaultInput={
    name:"",
    email:"",
    contact:"",
    location:"",
    sickness:"",
    date:"",
    visitingtime:"",
    bed:'off',
    token:""
  }


  const  doctorsOpt=hospitalData.doctors.filter(doctor=>{if(doctor.status)return doctor})  

  const bedsOpt=hospitalData.beds.filter(bed=>{if(bed.count>0)return bed})

  const [fillMsg,setFillMsg]=useState(false)

  const [bed,setBed]=useState(false)

  const [patientToken,setToken]=useState({
    token:null,
    id:null
  })
  
  
 const [selectedDoctor,setSelectedDoctor]=useState({})
  const [patientsDetails,setDetails]=useState({})
  const [resPatient,setResPatient]=useState({})
  const [errorMsg,setErrorMsg]=useState('Fill all the Fields!')


const handleSubmit=async(e)=>{
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll('input');
  const requiredInputs = Array.from(inputs).filter(input => input.type !== 'checkbox')
  const allInputsFilled = requiredInputs.every(input => input.value.trim() !== '')
    
  if(allInputsFilled === false){
    return setFillMsg(true)
  }

    await axios.post(PATIENTSUBMIT_URL+hospitalData._id, patientsDetails)
        .then((res) => {
          if(res.status===200)
          {
            console.log(res.data.patients);
            
            navigate('/submitted',{state:{hospitalData:hospitalData,patientData:res.data.patients}})
            setDetails(() => ({...defaultInput}));
            setNotify(true)
          }
        })
        .catch(err => {
          console.log(err);
          setFillMsg(true);
          setErrorMsg(err.response)
        }).finally((res)=>{console.log(res);
        })
    
    
    console.log(patientsDetails);
    
  }


  const handleChange=(e,isBed)=>{
    setFillMsg(false)
    const {name,value}=e.target;

    if(isBed==='bed')
    {
      const check=value==='on'?true:false;
      console.log(check);
      return     setDetails(prev=>({
        ...prev,bed:check
      }));
    }
    setDetails(prev=>({
      ...prev,[name]:value
    }));
    
  }

  const handleSelectDoctor=async(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setDetails(prev=>({
      ...prev,[name]:value
    }))
    await axios.get(`http://localhost:8000/hospital/${hospitalData._id}/doctors`)
    .then((res)=>{
      const selectDoctor= res.data.filter((doctor)=>{
        if(doctor._id===value)
          return doctor
      })
      setSelectedDoctor(selectDoctor[0])

    })
  }

  const patientDetails=async(id)=>{
    await axios.get('http://localhost:8000/user/patients/'+id)
    .then((res)=>{
      setResPatient(res.data)
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }

  const handleToken=async(e)=>{
    const id=e.target.value
    await axios.get(`http://localhost:8000/hospital/${hospitalData._id}/${selectedDoctor._id}/${id}`)
    .then((res)=>{
      console.log(res.data.token);
      
      setToken((prev)=>({...prev,token:res.data.token,id:res.data._id}))
      setDetails((prev) => ({ ...prev, token: res.data.token }))
      console.log(res);
      
    })
    .catch((err)=>{
      console.log(err);
      
    }).finally((res)=>{
      console.log(res);
      
    })

    

  }
  return (
    <>
    <form action="submit" onSubmit={(e)=>{handleSubmit(e)}} className=' rounded-md p-5 shadow-md shadow-black/70 bg-white text-slate-900 min-w-[600px] max-w-[600px] overflow-auto py-10 m-10 flex flex-col'>
      <h1 className='text-slate-800 font-semibold text-lg my-2'>Patient Form</h1>
      <Input label={"Patient Name"} name={"name"}  change={handleChange} value={patientsDetails.name}/>
      <Input label={"Patient Phone"} name={"contact"} type={'number'} change={handleChange} value={patientsDetails.contact}/>
      <Input label={"Patient Email"} name={'email'} type={'email'} change={handleChange} value={patientsDetails.email}/>
      <Input label={"Patient Sickness"} name={'sickness'}  change={handleChange} value={patientsDetails.sickness}/>
      <Input label={"Patient Location"} name={'location'}  change={handleChange} value={patientsDetails.location}/>
      <Input label={"Date"} type={'date'} name={'date'} change={handleChange} value={patientsDetails.date}/> 
      <Input label={"time"} type={'time'} name={'visitingtime'} change={handleChange} value={patientsDetails.visitingtime}/> 
      <Select label={"Select Doctor"} options={doctorsOpt}  defaultOP={"Select Doctor"} opt={1} name={'doctor'} handleChange={handleSelectDoctor}/>
      <Select 
      name={'token'}
        label={"Select Your Token"} 
        options={selectedDoctor.tokens}
        defaultOP={"Select your token"}
        opt={3}
        handleChange={handleChange}
      />
      <div>
        <label htmlFor="bed" className='text-md font-semibold'>Bed Needed</label>
        <input type="checkbox" name="bed" className='m-5' onChange={(e)=>{setBed(!bed);handleChange(e,'bed')}} value={patientsDetails.bed}/>
      </div>
      {bed&&<Select label={"Select Bed"} options={bedsOpt}  defaultOP={"Select Bed"} opt={2} name={'bedtype'} handleChange={handleChange}/>}
      {fillMsg&&<span className='text-md text-red-600 font-bold'>{errorMsg}</span>}
      <Button name={"Submit"} type={'submit'} />
    </form>

    </>
  )
  
}
