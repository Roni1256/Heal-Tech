import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


export const Submitted = () => {
  const location=useLocation()
  const patientData=location.state.patientData;
  const  HospitalData=location.state.hospitalData;
  const navigate=useNavigate()
  console.log(patientData);
  

return (
  <>

  <div className="bg-white h-full w-[600px] p-8 rounded-lg shadow-md">
      <div className="h-fit">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Appointment Booked Successfully!</h2>
          <p className="text-gray-700 mb-6">Thank you for booking your appointment with us.</p>
          <div className="mb-4 text-slate-900 flex justify-start flex-col w-full">
              <h3 className="text-lg font-semibold mb-2">Appointment Details:</h3>
              <p><strong>Patient Name:</strong> {"ramya"}</p>
              <p><strong>Date:</strong> {"19/09/2024"}</p>
              <p><strong>Time:</strong> {"09:30 am"}</p>
              <p><strong>Hospital:</strong> {HospitalData.hospitalname}</p>
              <p><strong>Doctor Name:</strong> {"Roniwilliams"}</p>
              {patientData?.bed && <p><strong>Bed Detail:</strong> {patientData?.bedtype}</p>}
              <p><strong>patient sickness:</strong> {"head ache"}</p>

              <p><strong>Patient ID:</strong> {"8th token"}</p>

          </div>
          <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Important Information:</h3>
              <p>Please arrive 15 minutes before your scheduled appointment time.</p>
              <p>Don't forget to bring your ID and insurance card.</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors" onClick={()=>{navigate('/')}} >
            Confirm
          </button>
      </div>
  </div>
  

  </>
)
}
