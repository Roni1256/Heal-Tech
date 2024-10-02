import React, {useState,useEffect } from 'react'
import { HospitalCard } from '../components/HospitalCard'
import axios from 'axios'
import hospitalImg from '../../public/hospital.jpg'
import { useLocation } from 'react-router-dom'
import {Input} from '../components/Input'


const HOSPITAL_URL='http://localhost:8000/user/hospitals/'

export const Hospitals = ({selection,navigate}) => {
  const location=useLocation()
  const locationValue=location.state||''
  const [hospitalData,setHospitalData]=useState([])
  console.log(locationValue.location);
  

  const fetchHospitalData=async()=>{
    axios.get(HOSPITAL_URL)
    .then((res)=>{
      setHospitalData(res.data);
    })
    .catch((error)=>{
      console.log("Failed to fetch data:"+error)
    });
  }
  useEffect(()=>{
    fetchHospitalData();
  },[])

  

  const handleSelect=(id)=>{
    const selectedHospital=hospitalData.filter((hospital)=>{
      if(hospital._id===id)
        return hospital
    })
  
    navigate('/dashboard', { state: { hospital:selectedHospital } });
  }
  const [hsType,setHsType]=useState('')
  return (
    <>
    <div className="flex items-center justify-center w-1/2 flex-col gap-2">
    <label htmlFor="type" className='text-white font-semibold text-xl '>Select Hospital Type</label>
      <select name='type' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'  
      onChange={(e)=>{setHsType(e.target.value)}}>
        <option value=''>Select Type of Hospital</option>
        {
          [...new Set(hospitalData.map(hospital => hospital.hospitaltype))].map((type) => {
            return <option key={type} value={type}>{type}</option>
          })

        }
      </select>
    </div>
    <div className="h-screen w-full p-7 overflow-auto grid grid-cols-4 gap-10">
      {
        hospitalData.filter((hospital)=>{
          if(hospital.location.toLowerCase().trim()===locationValue.location.toLowerCase().trim())
            return hospital;
        }).filter((hospital) => {
          if (hsType === '') {
            return true
          } else {
            return hospital.hospitaltype.toLowerCase().trim() === hsType.toLowerCase().trim()
          }
               
        })
        .map((hospital,key)=>{
          return <>
          <HospitalCard name={hospital.hospitalname} specality={hospital.hospitaltype} helpline={hospital.helpline} desc={hospital.description} image={hospitalImg} handleHospitals={handleSelect} id={hospital._id}/></>
        })
      }

    </div>
    </>
  )
}
