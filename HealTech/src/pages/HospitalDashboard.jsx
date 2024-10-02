import React,{useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { PatientForm } from '../components/PatientForm';
import hImg from '../../public/hospital.jpg'
import Button from '../components/Button'
import { Submitted } from '../components/Submitted';
export const HospitalDashboard = () => {
  const location=useLocation()
  const {hospital}=location.state||{};
  const [notify,setNotify]=useState(false)
  const navigate=useNavigate();

  return (
    <>
    <div className="w-full h-full bg-white rounded-lg shadow-lg shadow-black/80 p-10 flex relative">
      <div className=" w-1/2  p-3 border-r-2">
        <img src={hImg} alt="image" className='w-[300px]  h-[300px] bg-blue-400 rounded-md ' />
        <h1 className='text-slate-800 text-2xl font-bold  my-2'>{hospital[0].hospitalname}</h1>
        <h2 className='text-slate-600 text-lg font-semibold  '>{hospital[0].hospitaltype}</h2>
        <p className='text-md font-medium text-justify text-slate-800'>{hospital[0].description}</p>
        <span className='text-slate-900 font-bold mb-4 bg-gray-200 px-2 py-1 w-fit rounded-full my-2 '>Helpline-{hospital[0].helpline}</span>
        <div className="bg-gray-100 w-full rounded-md shadow-md shadow-black/80 p-5 mt-5">
          <h1 className='text-xl text-slate-700 font-semibold'>Beds Availability</h1>
          {
            hospital[0].beds.map((bed)=>{
              return <div className="flex gap-5 px-5 justify-between items-center mt-3 text-white bg-teal-900 rounded-md py-2">
                <label htmlFor="general" className='text-lg  font-semibold capitalize'>{bed.bedtype}</label>
                <span className='text-xl font-bold '>{bed.count*100/bed.count}%</span>
              </div>

            })
          }
        
          
        </div>
      </div>
      <div className="w-full items-center justify-center flex">
        <PatientForm   hospitalData={hospital[0]} />
      </div>

    </div>
    
    </>
  )
}

const BookedForm=({navigate})=>{
  return <>
  
      <div className="z-50 rounded-md p-5 shadow-md shadow-black/70 bg-white text-slate-900 min-w-[600px] max-w-[600px] overflow-auto py-10 m-10 flex flex-col">
        <h1 className="text-slate-800 font-semibold text-lg my-2">Appointment Send!</h1>
        <p className="text-md font-medium">Your appointment has been Stepped to Doctor.</p>
        <p className="text-md">Please check your email for confirmation and further details.</p>
        <Button name="Back to Home" type="button" click={() =>navigate('/')} />
      </div>
    
  
  </>
}
