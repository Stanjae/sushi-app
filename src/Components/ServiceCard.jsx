import React from 'react'

const ServiceCard = ({item}) => {
  return (
    <div className=' pb-[40px] px-[34px] pt-[56px] shadow-2xl rounded-[40px] w-full'>
        <span className=' mx-auto block'>{item.image}</span>
        <div className=' space-y-2 text-center'>
            <h4 className=' text-2xl font-bold text-primary'>{item.title}</h4>
            <p className=' text-xl leading-6 text-[#90BD95]'>{item.description}</p>
        </div>
    </div>
  )
}

export default ServiceCard