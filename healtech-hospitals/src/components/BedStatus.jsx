import React from 'react'
import { Input } from './Input'
import axios from 'axios'
import { FaSearch } from "react-icons/fa";

export const BedStatus = ({data}) => {

    const bedCount=async(e,bedId)=>{
        
        await axios.put(`http://localhost:8000/hospital/bed/${data._id}/bedCount/${bedId}`,{count:e.target.value})
        .then((res)=>{console.log(res)}) 
        .catch((err)=>console.log(err))
    }

  return (
    <>
    <div className="overflow-x-auto bg-white   overflow-y-scroll">

<div className="relative m-[2px] mb-3 mr-5 float-left">
  <label for="inputSearch" className="sr-only">Search </label>
  <input id="inputSearch" type="text" placeholder="Search..." className="block w-64 rounded-lg border  py-2 pl-10 pr-4 text-sm focus:border-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-400" />
  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform"><FaSearch /></span>
</div>


<table className="min-w-full text-left text-sm whitespace-nowrap">


  <thead className="uppercase tracking-wider sticky top-0 bg-cyan-950 text-white outline outline-2 outline-neutral-200 ">
    <tr>
      <th scope="col" className="px-6 py-4">
        Bed Type
      </th>
      <th scope="col" className="px-6 py-4">
        Bed Count
      </th>
      <th scope="col" className="px-6 py-4 text-center">
        Set Count
      </th>
    </tr>
  </thead>


  <tbody className=''>
    {
        data.beds.map((bed)=>{
            return <>
                <tr className="border-b  hover:bg-neutral-100 ">
                    <th scope="row" className="px-6 py-4 w-full">{bed.bedtype}</th>
                    <td className="px-6 py-4 w-full">{bed.count}</td>
                    <td className="px-6 py-4 flex items-center justify-center"><input type="number" min={0} step={1} value={bed.count} onChange={(e)=>{bedCount(e,bed._id)}} className='text-lg p-2 w-fit  ring-1 ring-slate-800 rounded-lg outline-1 ' /></td>
                </tr>
            </>
        })
    }



  </tbody>

</table>

</div>
    </>
  )
}
