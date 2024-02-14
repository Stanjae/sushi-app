import React from 'react'
import Image from 'next/image'

const CategoryCard = ({item}) => {
  return (
    <div className=' rounded-[40px] px-[60px] pt-[50px] pb-[33px] shadow-2xl relative w-full'>
        <div className=' bg-[#C1F1C6] mx-auto justify-center flex items-center rounded-full w-[153px] h-[153px]'>
            <Image className='block w-[131px] h-[150px] object-contain ' src={item.image} alt='category image'/>
        </div>
        
        <div className=' mt-2 text-center'>
            <h4 className=' leading-[36.31px] text-[30px] font-semibold '>{item.title}</h4>
            <h6 className=' mt-1.5 text-sectext leading-[26.63px] text-[22px] font-medium'>({item.description})</h6>
        </div>
    </div>
  )
}

export default CategoryCard