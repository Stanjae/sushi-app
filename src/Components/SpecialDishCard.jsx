import React from 'react';
import Image from 'next/image';
import {HeartIcon } from '@heroicons/react/24/outline'

const SpecialDishCard = ({item}) => {
  return (
    <div className=' pb-[60px] shadow-2xl rounded-[40px] m-0 w-full'>
        <div className=' flex justify-end'>
            <div className=' flex justify-center items-center py-10 w-[87px] h-[75px] rounded-tr-[40px] rounded-bl-3xl bg-primary'><HeartIcon className=' w-10 h-10 text-light'/></div>
        </div>
        <Image alt='lol'className=' object-contain mx-auto block w-[262px] h-[262px]' src={item.image}/>
        <div className=' px-[42px] '>
            <h2 className=' font-bold text-3xl text-dark'>{item.title}</h2>
            <h4 className=' text-[22px] leading-[26.63px] font-medium text-darkash'>Description of the item</h4>

            <div className=' mt-8 flex items-center justify-between'>
                <h2 className=' font-bold text-3xl'><span className=' text-[22px] text-errorbg leading-[26.63px]'>$</span>{item.price}</h2>
                <h6 className=' font-semibold inline-flex text-darkash text-[22px] leading-[26.63px] '>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4025 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3978 20.2473 21.8334 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1394 24.0472 9.44251 23.8365 8.79571C23.6258 8.14891 23.216 7.58525 22.6658 7.18523C22.1156 6.7852 21.4531 6.56929 20.7728 6.56832H16.3998L15.0728 2.43232C14.8641 1.78128 14.4541 1.21333 13.9018 0.810386C13.3495 0.407437 12.6835 0.190308 11.9998 0.190308C11.3161 0.190308 10.6501 0.407437 10.0978 0.810386C9.54553 1.21333 9.13548 1.78128 8.9268 2.43232L7.5998 6.56832H3.2308C2.55054 6.56929 1.88799 6.7852 1.33778 7.18523C0.787564 7.58525 0.377837 8.14891 0.167118 8.79571C-0.0436018 9.44251 -0.0445344 10.1394 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z" fill="#FFE605"/>
                    </svg>
                    {item.rating}</h6>
            </div>
        </div>
        

    </div>
  )
}

export default SpecialDishCard