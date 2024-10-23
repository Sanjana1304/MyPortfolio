import React from 'react'

const ExpBox = ({role,org,desc}) => {
  return (
    <div className='w-3/4 p-5 py-7 gradient-anim-4 rounded shadow-lg'>
        <h1 className='font-semibold text-xl'>{role}</h1>
        <i>{org}</i>
        <ul className='text-sm list-disc list-inside text-gray-700'>
            {desc && desc.map((d,index) => <li key={index}>{d}</li>)}
        </ul>

    </div>
  )
}

export default ExpBox