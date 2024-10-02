import axios from 'axios';
import React,{useState} from 'react'


export const Toggle = ({hospitalId,doctorId}) => {
    const [isChecked,setIsChecked]=useState(false)

    const handleToggle = async() => {
        setIsChecked(!isChecked);
        await axios.post(`http://localhost:8000/hospital/${hospitalId}/doctor/doctorstatus/${doctorId}`,{status:!isChecked})
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))

    };


    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={handleToggle}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
    );
};
