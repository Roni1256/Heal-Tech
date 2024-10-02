import React from 'react'
import { FaSearch } from "react-icons/fa";

export const PatientStatus = ({}) => {
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
        Patient Name
      </th>
      <th scope="col" className="px-6 py-4">
        Sickness
      </th>
      <th scope="col" className="px-6 py-4 text-center">
        Date
      </th>
    </tr>
  </thead>


  <tbody className=''>

    <tr className="border-b  hover:bg-neutral-100 ">
      <th scope="row" className="px-6 py-4">Roniwilliams</th>
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4 text-center">Present</td>
    </tr>


  </tbody>

</table>

</div>
    </>
  )
}
