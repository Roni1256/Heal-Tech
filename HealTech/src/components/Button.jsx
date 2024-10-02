import React from 'react'

const Button = ({name,click,style,type,value}) => {
  return (
    <>
    <button className={`text-md text-white my-4 bg-blue-700 px-5 py-2 rounded-lg hover:bg-blue-900 focus:bg-blue-800 w-fit ring-1 ring-white transition-all ease-in-out duration-300 ${style}`} onClick={()=>{click(value)}} type={type}>
            {name}
    </button>
    </>
  )
}

export default Button