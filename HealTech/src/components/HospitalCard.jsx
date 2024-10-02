import React from 'react'


export const HospitalCard = ({name,specality,desc,helpline,image,handleHospitals,id}) => {
  return (
    <>
    <div className=" flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg  h-fit  ">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src={image} alt="card-image" />
  </div>
  <div className="p-4">
    <h6 className="mb-2 text-slate-800 text-2xl font-bold">{name}</h6>
    <h6 className="mb-2 text-slate-600 text-xl font-semibold">{specality}</h6>
    <p className="text-slate-700 leading-normal font-medium overflow-hidden h-[100px] line-clamp-4">{desc}</p>
  </div>
  <span className='text-slate-900 font-bold mb-4 bg-gray-200 px-2 py-1 w-fit rounded-full mx-5 '>Helpline-{helpline}</span>
  <div className="px-4 pb-4 pt-0 mt-2">
    <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={()=>{handleHospitals(id)}}>
      Select
    </button >
  </div>
</div>  
    </>
  )
}