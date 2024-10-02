import React from 'react'

export const Select = ({label,options,defaultOP,handleChange,opt,name}) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleChange} name={name}>
    <option value={''}>{defaultOP}</option>
    {
       options && opt===1?options.map((opt)=>{
        return <>{opt.status && <option value={opt._id}>{opt.doctorname}-{opt.specilization}</option>}</>})
    :options && opt===2?options.map((opt)=>{
        return <><option value={opt.bedtype}>{opt.bedtype}</option></>}):
    options && opt===3?options.map((opt)=>{
      
        return <>{opt.available && <option value={JSON.parse(opt.token)} key={opt._id}>{opt.token}</option>}</>
    }):null}
  </select>
    </>
  )
}
