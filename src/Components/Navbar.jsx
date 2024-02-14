'use client'
import Image from 'next/image'
import Logo from '../../public/assets/LOGO.jpg'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, } from '@heroicons/react/24/outline'
import {HomeIcon, CubeIcon, StarIcon, ShieldCheckIcon, BoltIcon } from '@heroicons/react/24/solid';
import {usePathname} from 'next/navigation';


const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  fallback:'Inter'
})

const Navi = [{title:'Home', url:'/', icon:<HomeIcon className=' h-6 w-6'/>}, {title:'Menu', url:'/menu', icon:<CubeIcon className=' h-6 w-6'/>},
{title:'About', url:'/about', icon:<ShieldCheckIcon className=' h-6 w-6'/>}, 
{title:'Services', url:'/services', icon:<StarIcon className=' h-6 w-6'/>}, 
{title:'Offers', url:'/offers', icon:<BoltIcon className=' h-6 w-6'/>}
]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();


  return (
    <nav className={poppins.className}>
      <div className=" items-center lg:py-[50px] px-7 py-3 sm:py-[25px] sm:px-[50px] 2xl:px-[155px] xl:px-[135px] lg:px-[115px] md:px-[45px] flex justify-between ">
        <Link href={"/"}>
          <Image
            className=""
            weight={"125px"}
            height={"60px"}
            alt=" Logo"
            src={Logo}
          />
        </Link>

        <div className="">
          <ul className=" xl:text-xl lg:text-lg md:text-base sm:text-sm gap-x-3 lg:gap-x-7 hidden flex-1 md:flex justify-center">
            {Navi.map((item, index) => (
              <li className=" p-0.5" key={index}>
                <Link className={`${pathname === item.url ? ' text-primary':''}`} href={item.url}> {item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile menubar */}
        <div className=" items-center gap-x-5 md:hidden flex">
        <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className=" h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_82_95)">
                <path
                  d="M21 6H18C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H6V10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10V8H16V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z"
                  fill="#272727"
                />
              </g>
              <defs>
                <clipPath id="clip0_82_95">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-light bg-primary border-white rounded-full -top-0 -end-1 ">
              20
            </div>
          </button>

          <button className=" flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
          </button>
          <button onClick={() => setOpen(true)}>
            <svg
              className=" fill-sectext"
              width="24px"
              height="24px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fillRule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
              />
            </svg>
          </button>
        </div>

          {/* shopping cart section  */}
        <div className="hidden md:flex lg:gap-x-9 justify-end  items-center">
          <button
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className=" h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_82_95)">
                <path
                  d="M21 6H18C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H6V10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10V8H16V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z"
                  fill="#272727"
                />
              </g>
              <defs>
                <clipPath id="clip0_82_95">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-light bg-primary border-white rounded-full -top-0 -end-1 ">
              20
            </div>
          </button>

          <button className=" flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="24px"
              height="24px"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
          </button>

          <button className=" flex  gap-x-4 items-center justify-center transition-all  py-[15px] px-[31px] rounded-[40px] bg-primary hover:stroke-primary text-light border hover:border-primary hover:bg-linear1 hover:text-primary ">
            <svg
              className=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_82_93)">
                <path
                  d="M12.9999 1.00013C12.9999 0.734916 13.1053 0.480562 13.2928 0.293025C13.4803 0.105489 13.7347 0.000132124 13.9999 0.000132124C16.6512 0.00304372 19.193 1.05755 21.0678 2.93228C22.9425 4.80701 23.997 7.34886 23.9999 10.0001C23.9999 10.2654 23.8945 10.5197 23.707 10.7072C23.5195 10.8948 23.2651 11.0001 22.9999 11.0001C22.7347 11.0001 22.4803 10.8948 22.2928 10.7072C22.1053 10.5197 21.9999 10.2654 21.9999 10.0001C21.9975 7.87913 21.1539 5.84568 19.6541 4.34591C18.1544 2.84613 16.1209 2.00251 13.9999 2.00013C13.7347 2.00013 13.4803 1.89478 13.2928 1.70724C13.1053 1.5197 12.9999 1.26535 12.9999 1.00013ZM13.9999 6.00013C15.0608 6.00013 16.0782 6.42156 16.8283 7.17171C17.5785 7.92185 17.9999 8.93927 17.9999 10.0001C17.9999 10.2654 18.1053 10.5197 18.2928 10.7072C18.4803 10.8948 18.7347 11.0001 18.9999 11.0001C19.2651 11.0001 19.5195 10.8948 19.707 10.7072C19.8945 10.5197 19.9999 10.2654 19.9999 10.0001C19.9983 8.40932 19.3657 6.88412 18.2408 5.75925C17.1159 4.63437 15.5907 4.00172 13.9999 4.00013C13.7347 4.00013 13.4803 4.10549 13.2928 4.29303C13.1053 4.48056 12.9999 4.73492 12.9999 5.00013C12.9999 5.26535 13.1053 5.5197 13.2928 5.70724C13.4803 5.89478 13.7347 6.00013 13.9999 6.00013ZM23.0929 16.7391C23.6724 17.3202 23.9978 18.1074 23.9978 18.9281C23.9978 19.7488 23.6724 20.536 23.0929 21.1171L22.1829 22.1661C13.9929 30.0071 -5.93707 10.0821 1.78292 1.86613L2.93292 0.866132C3.51469 0.302809 4.29485 -0.0088188 5.10462 -0.00133303C5.91439 0.00615273 6.68866 0.332151 7.25992 0.906132C7.29092 0.937132 9.14391 3.34413 9.14391 3.34413C9.69374 3.92176 9.99982 4.68906 9.99851 5.48654C9.99721 6.28401 9.68863 7.05031 9.13691 7.62613L7.97892 9.08213C8.61976 10.6392 9.56198 12.0544 10.7514 13.2462C11.9409 14.4381 13.3541 15.3831 14.9099 16.0271L16.3749 14.8621C16.9508 14.3108 17.717 14.0026 18.5142 14.0015C19.3114 14.0004 20.0785 14.3065 20.6559 14.8561C20.6559 14.8561 23.0619 16.7081 23.0929 16.7391ZM21.7169 18.1931C21.7169 18.1931 19.3239 16.3521 19.2929 16.3211C19.0869 16.1169 18.8085 16.0023 18.5184 16.0023C18.2283 16.0023 17.9499 16.1169 17.7439 16.3211C17.7169 16.3491 15.6999 17.9561 15.6999 17.9561C15.564 18.0643 15.4022 18.1352 15.2306 18.1619C15.0589 18.1885 14.8832 18.17 14.7209 18.1081C12.7054 17.3577 10.8746 16.1829 9.35275 14.6632C7.83085 13.1436 6.65332 11.3146 5.89992 9.30013C5.83312 9.13559 5.81134 8.95622 5.83682 8.78047C5.86231 8.60472 5.93413 8.43893 6.04492 8.30013C6.04492 8.30013 7.65192 6.28213 7.67892 6.25613C7.88318 6.05012 7.99779 5.77175 7.99779 5.48163C7.99779 5.19152 7.88318 4.91315 7.67892 4.70713C7.64792 4.67713 5.80692 2.28213 5.80692 2.28213C5.59782 2.09464 5.32492 1.99423 5.04417 2.00148C4.76341 2.00873 4.49606 2.1231 4.29692 2.32113L3.14692 3.32113C-2.49507 10.1051 14.7759 26.4181 20.7209 20.8001L21.6319 19.7501C21.8454 19.5524 21.9736 19.2794 21.9895 18.9888C22.0053 18.6983 21.9076 18.4129 21.7169 18.1931Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_82_93">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Contact
          </button>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-linear1 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col bg-linear2 overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Panel title
                        </Dialog.Title>
                      </div>
                      <div className="relative space-y-5 mt-6 flex-1 px-2 sm:px-2">
                        <ul className=" py-2 flex flex-col gap-4">
                          {Navi.map((item, index) => (
                            <Link href={item.url} key={index}>
                              <li className=" hover:text-primary text-darkash hover:border-b-primary w-full border-b-2 border-b-darkash text-lg gap-x-3 p-3 inline-flex items-center">
                                {item?.icon} <span>{item.title}</span>
                              </li>
                            </Link>
                          ))}
                        </ul>

                        <div>
                        <button className=" w-full flex  gap-x-4 items-center justify-center transition-all  py-[15px] px-[31px] rounded-[20px] bg-primary hover:stroke-primary text-light border hover:border-primary hover:bg-linear1 hover:text-primary ">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_82_93)">
                              <path
                                d="M12.9999 1.00013C12.9999 0.734916 13.1053 0.480562 13.2928 0.293025C13.4803 0.105489 13.7347 0.000132124 13.9999 0.000132124C16.6512 0.00304372 19.193 1.05755 21.0678 2.93228C22.9425 4.80701 23.997 7.34886 23.9999 10.0001C23.9999 10.2654 23.8945 10.5197 23.707 10.7072C23.5195 10.8948 23.2651 11.0001 22.9999 11.0001C22.7347 11.0001 22.4803 10.8948 22.2928 10.7072C22.1053 10.5197 21.9999 10.2654 21.9999 10.0001C21.9975 7.87913 21.1539 5.84568 19.6541 4.34591C18.1544 2.84613 16.1209 2.00251 13.9999 2.00013C13.7347 2.00013 13.4803 1.89478 13.2928 1.70724C13.1053 1.5197 12.9999 1.26535 12.9999 1.00013ZM13.9999 6.00013C15.0608 6.00013 16.0782 6.42156 16.8283 7.17171C17.5785 7.92185 17.9999 8.93927 17.9999 10.0001C17.9999 10.2654 18.1053 10.5197 18.2928 10.7072C18.4803 10.8948 18.7347 11.0001 18.9999 11.0001C19.2651 11.0001 19.5195 10.8948 19.707 10.7072C19.8945 10.5197 19.9999 10.2654 19.9999 10.0001C19.9983 8.40932 19.3657 6.88412 18.2408 5.75925C17.1159 4.63437 15.5907 4.00172 13.9999 4.00013C13.7347 4.00013 13.4803 4.10549 13.2928 4.29303C13.1053 4.48056 12.9999 4.73492 12.9999 5.00013C12.9999 5.26535 13.1053 5.5197 13.2928 5.70724C13.4803 5.89478 13.7347 6.00013 13.9999 6.00013ZM23.0929 16.7391C23.6724 17.3202 23.9978 18.1074 23.9978 18.9281C23.9978 19.7488 23.6724 20.536 23.0929 21.1171L22.1829 22.1661C13.9929 30.0071 -5.93707 10.0821 1.78292 1.86613L2.93292 0.866132C3.51469 0.302809 4.29485 -0.0088188 5.10462 -0.00133303C5.91439 0.00615273 6.68866 0.332151 7.25992 0.906132C7.29092 0.937132 9.14391 3.34413 9.14391 3.34413C9.69374 3.92176 9.99982 4.68906 9.99851 5.48654C9.99721 6.28401 9.68863 7.05031 9.13691 7.62613L7.97892 9.08213C8.61976 10.6392 9.56198 12.0544 10.7514 13.2462C11.9409 14.4381 13.3541 15.3831 14.9099 16.0271L16.3749 14.8621C16.9508 14.3108 17.717 14.0026 18.5142 14.0015C19.3114 14.0004 20.0785 14.3065 20.6559 14.8561C20.6559 14.8561 23.0619 16.7081 23.0929 16.7391ZM21.7169 18.1931C21.7169 18.1931 19.3239 16.3521 19.2929 16.3211C19.0869 16.1169 18.8085 16.0023 18.5184 16.0023C18.2283 16.0023 17.9499 16.1169 17.7439 16.3211C17.7169 16.3491 15.6999 17.9561 15.6999 17.9561C15.564 18.0643 15.4022 18.1352 15.2306 18.1619C15.0589 18.1885 14.8832 18.17 14.7209 18.1081C12.7054 17.3577 10.8746 16.1829 9.35275 14.6632C7.83085 13.1436 6.65332 11.3146 5.89992 9.30013C5.83312 9.13559 5.81134 8.95622 5.83682 8.78047C5.86231 8.60472 5.93413 8.43893 6.04492 8.30013C6.04492 8.30013 7.65192 6.28213 7.67892 6.25613C7.88318 6.05012 7.99779 5.77175 7.99779 5.48163C7.99779 5.19152 7.88318 4.91315 7.67892 4.70713C7.64792 4.67713 5.80692 2.28213 5.80692 2.28213C5.59782 2.09464 5.32492 1.99423 5.04417 2.00148C4.76341 2.00873 4.49606 2.1231 4.29692 2.32113L3.14692 3.32113C-2.49507 10.1051 14.7759 26.4181 20.7209 20.8001L21.6319 19.7501C21.8454 19.5524 21.9736 19.2794 21.9895 18.9888C22.0053 18.6983 21.9076 18.4129 21.7169 18.1931Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_82_93">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          Contact
                        </button>
                      </div>
                      </div>
                     
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </nav>
  );
}

export default Navbar
