import React from 'react'


export const Input = ({label,type,placeholder,change,name,value,style}) => {
  return (
    <>
    <div className="mb-6">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-white ">{label}</label>
        <input type={type} id="default-input" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg ring-1 focus:ring-slate-800 focus:border-slate-800 block w-full p-2.5 focus:outline-none ${style}`} placeholder={placeholder} onChange={change} name={name} value={value}/>
    </div>
    </>
  )
}
