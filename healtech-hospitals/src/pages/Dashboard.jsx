import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import { DoctorStatus } from '../components/DoctorStatus'
import { PatientStatus } from '../components/PatientStatus'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { AddData } from '../components/AddData'
import { BedStatus } from '../components/BedStatus'

export const Dashboard = () => {
    const location =useLocation();
    
    const [showStatus,setStatus]=useState({
        doctorStatus:true,
        patientStatus:false,
        bedStatus:false,
        addData:false
    })
    const handleStatus=(e,value)=>{
        
        switch (value) {
            case 1:
                {setStatus((prev)=>({...prev,doctorStatus:true,patientStatus:false,bedStatus:false}))
                break;}
            case 2:{
                setStatus((prev)=>({...prev,doctorStatus:false,patientStatus:true,bedStatus:false}))
                break;}
            case 3:{
                setStatus((prev)=>({...prev,doctorStatus:false,patientStatus:false,bedStatus:true}))
                break;}
            case 4:{
                setStatus((prev)=>({...prev,doctorStatus:false,patientStatus:false,bedStatus:false,addData:true}))
                break;}
            default:
                console.log("wrong value")
                break;
        }
    } 

    const [fetchedData,setData]=useState(location.state.hospital || [])
    console.log(fetchedData);
 
  return (
   <>
   <div className="h-screen rounded-lg shadow-lg shadow-black/70 top-0 w-full bg-white p-10 text-slate-900 grid grid-cols-3">
    <div className=" h-full w-full p-4 border-r-2 overflow-auto flex flex-col items-center">
        <h1 className='text-2xl font-bold tracking-wide text-center mb-3'>{fetchedData.hospitalname}</h1>
        <h1 className='text-xl font-bold tracking-wide text-center my-3 text-slate-700'>{fetchedData.hospitaltype}</h1>
        <img src="*" alt="" className='w-full h-[300px] rounded  bg-blue-700/50'/>
        <p className='text-justify text-md font-semibold tracking-wide my-6'>{fetchedData.description}</p>

    </div>
    <div className=" h-full w-full col-span-2 p-4 ">
        <div className="flex justify-evenly border-b-2 ">
            <Button name={"Doctors Status"} click={handleStatus} value={1} style={"focus:bg-blue-900"}/>
            {/* <Button name={"Patient Status"} click={handleStatus} value={2} style={"focus:bg-blue-900"}/> */}
            <Button name={"Beds Status"} click={handleStatus} value={3} style={"focus:bg-blue-900"}/>
            <Button name={"Add Data"} click={handleStatus} value={4} style={"focus:bg-blue-900"}/>
        </div>
        <div className="mt-2 h-full">
            {/* {showStatus.addData && <AddData/>} */}
           {showStatus.doctorStatus && <DoctorStatus Data={fetchedData}/>}
           {showStatus.patientStatus && <PatientStatus patientData={fetchedData}/>}
           {showStatus.bedStatus && <BedStatus data={fetchedData}/>}

        </div>

    </div>
   </div>
   </>
  )
}
