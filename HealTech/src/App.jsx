import React, { useState } from 'react'
import hospitalimg  from '../public/hospital.jpg'
import {useNavigate,useLocation, Route, Routes} from 'react-router-dom'
import { Hospitals } from './pages/Hospitals'
import { HospitalDashboard } from './pages/HospitalDashboard'
import {Initial} from './pages/Initial'
import { Submitted } from './components/Submitted'

export const App = () => {

  const location=useLocation()
  const isFull=location.pathname==='/'
  const navigate=useNavigate()

  const [patientDetails,setDetails]=useState({})
  const [fillMsg,setMsg]=useState(false)
  const [selectedHospital,setSelection]=useState({})
  const [locationValue,setLocation]=useState()
  const handleInputs=(e)=>{
    setMsg(false)
    setLocation(e.target.value);
  }

  const handleNext=(e,navTo)=>{
    e.preventDefault();
    
    const form = e.target;
    const inputs = form.querySelectorAll('input');
    
    const allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    if(navTo==='/hospitals'){
      navigate(navTo,{state:{location:locationValue}})
      return;
    }
    
    if (allInputsFilled) {
        console.log(patientDetails);
        navigate(navTo);
    } else {
        
        setMsg(!fillMsg)
    }
  }





  return (
    <>
    <div className={`bg-slate-900 text-white  flex flex-col  items-center p-10 ${isFull?"h-screen":"h-full"}`}>
      <h1 className='text-4xl text-white font-bold  text-center w-full mb-10'>Heal tech-Client</h1>
      <Routes>
        <Route path='/' index element={<Initial handleChange={handleInputs} handleNext={handleNext} msg={fillMsg}/>}/>
        <Route path='hospitals' element={<Hospitals  navigate={navigate}/>}/>
        <Route path='dashboard' element={<HospitalDashboard />}/>
        <Route path='submitted' element={<Submitted/>}/>

      </Routes>
    </div>
    </>
  )
}
