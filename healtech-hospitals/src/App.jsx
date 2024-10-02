import React, { useState, useEffect } from 'react'
import { Home } from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Doctors } from './pages/Doctors'
import { useNavigate } from 'react-router-dom'
import { Beds } from './pages/Beds'
import { Dashboard } from './pages/Dashboard'
import axios from 'axios'
import { Hero } from './pages/Hero'

const HOSPITAL_POST = 'http://localhost:8000/hospital/sendhospital'
const App = () => {
  const [token, setToken] = useState([])
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard' || location.pathname === '/doctors' || location.pathname === '/home';
  const [hospitalId, setId] = useState()
  const [fillMsg, setMsg] = useState(false)
  const navigate = useNavigate()
  const [hospitalData, setHospitalData] = useState({
    hospitalname: "",
    hospitaltype: "",
    doctors: [],
    beds: []
  })
  const [doctorsData, setDoctorsData] = useState({
    doctorname: "",
    specilization: "",
    role: "",
    status:true,
    tokens: [
      {
        token: 2,
        available: true
      },
      {
        token: 4,
        available: true
      },
      {
        token: 6,
        available: true
      },
      {
        token: 8,
        available: true
      },
      {
        token: 10,
        available: true
      },
    ]
  })
  const [bedData, setBedData] = useState({
    bedtype: "",
    bedcount: null
  })
  const [timing, setTimings] = useState({
    date: "",
    from: "",
    to: ""
  })

  const handleChange = (e, data) => {
    setMsg(false)
    const { value, name } = e.target;
    if (data === "hospital") setHospitalData((prev) => ({ ...prev, [name]: value.trim() }))
    if (data === "doctors") setDoctorsData((prev) => ({ ...prev, [name]: value.trim() }))
    if (data === 'timing') setTimings((prev) => ({ ...prev, [name]: value.trim() }))
    if (data === "beds") setBedData((prev) => ({ ...prev, [name]: value.trim() }))
  }
  const [resHos, setResHos] = useState()

  const handleNext = async (e, navTo, doctors, beds) => {
    e.preventDefault();
    if (doctors && hospitalData.doctors.length) {
      navigate(navTo);
      return;
    }
    if (beds && hospitalData.beds.length) {
      try {
        const res = await axios.post(HOSPITAL_POST, hospitalData);
        console.log(res);
        setId(res.data.id);
        setResHos(res.data.hospital);
        navigate(navTo, { state: { hospital: res.data.hospital } });
      } catch (err) {
        console.log(err);
      }
      return;
    }

    const form = e.target;
    const inputs = form.querySelectorAll('input');

    const allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');

    if (allInputsFilled) {
      console.log(hospitalData);
      navigate(navTo);
    } else {
      setMsg(!fillMsg)
    }
    console.log(token);
  }

  const addDoctor = (e) => {
    e.preventDefault();
    setDoctorsData(() => ({
      doctorname: "",
      specilization: "",
      role: "",
      tokens: [
        { token: 2, available: true },
        { token: 4, available: true },
        { token: 6, available: true },
        { token: 8, available: true },
        { token: 10, available: true },
      ]
    }));
    setHospitalData((prev) => ({
      ...prev,
      doctors: [...prev.doctors, doctorsData]
    }));
    console.log(hospitalData);
  }
  const addBed = (e) => {
    e.preventDefault();
    setHospitalData((prev) => ({ ...prev, beds: [...prev.beds, bedData] }))
    setBedData(() => ({ bedtype: "", bedcount: "" }))
    console.log(hospitalData);
  }
  const addTiming = (e) => {
    e.preventDefault();
    setDoctorsData((prev) => ({ ...prev, timings: [...prev.timings, timing] }))
    console.log(timing);
    setTimings(() => ({ date: "", from: "", to: "" }))
    console.log(hospitalData);
  }

  return (
    <>
      <div className={`h-full bg-slate-900 text-white p-10 flex flex-col items-center justify-center ${isDashboard ? "h-full" : "h-screen"}`}>
        <h1 className='text-4xl font-bold tracking-wide text-center my-5'>Heal Tech Hospitals</h1>
        <Routes>
          <Route path='/' index element={<Hero />} />
          <Route path='home' element={<Home handleChange={handleChange} msg={fillMsg} handleNext={handleNext} />} />
          <Route path='doctors' element={<Doctors handleChange={handleChange} msg={fillMsg} handleNext={handleNext} addDoctor={addDoctor} doctor={doctorsData} addTiming={addTiming} setToken={setToken} token={token} />} />
          <Route path='beds' element={<Beds handleChange={handleChange} msg={fillMsg} handleNext={handleNext} addBed={addBed} beds={bedData} />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App