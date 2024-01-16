import React from 'react'

const Card = ({tittle, value}) => {
  return (
    <div className='card sm:w-16 sm:mr-12 mt-8 text-wrap mt-1 flex items-start flex-col ' >
    <h6 className='key text-custom-xs text-custom-gray ' >{tittle}</h6>
    <p className=' value text-custom-xs text-wrap' >{value}</p>
  </div>
  )
}

export default Card
