import React from 'react'

export const Select = ({label,options,defaultOP,handleChange,opt,name}) => {
  return (
    <>
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={handleChange} name={name}>
    <option selected>{defaultOP}</option>
    {
       options && opt===1?options.map((opt)=>{
        return <><option value={opt._id}>{opt.name}-{opt.specilization}</option></>})
    :options && opt===2?options.map((opt)=>{
        return <><option value={opt._id}>{opt.bedtype}</option></>}):null}
  </select>
    </>
  )
}
