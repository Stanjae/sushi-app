'use client'
import Image from "next/image";
import Beef from '../../public/assets/MAIN_SUSHI_IMAGE-removebg-preview.png'
import HeroCard from "@/Components/HeroCard";
import Image1 from '../../public/assets/_cc226cf5-2147-430e-b16c-84644636b1fe-removebg-preview 1.jpg'
import Image2 from '../../public/assets/_78d38fb4-559d-4cdb-822d-44ecdec0a7f8-removebg-preview 1.png'
import Image3 from '../../public/assets/category.png';
import Image4 from '../../public/assets/category2.jpg';
import Image5 from '../../public/assets/category3.png';
import CategoryCard from "@/Components/CategoryCard";
import {ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import SpecialDishCard from "@/Components/SpecialDishCard";

import Sushi from '../../public/assets/Sushi Salad 1.jpg'
import Sushi2 from '../../public/assets/Sushi Salad -- 2.jpg'
import Sushi3 from '../../public/assets/Sushi Salad -- 3.jpg'

import ChefImage from '../../public/assets/Group 37.jpg';

import Avatar from '../../public/assets/avatar.jpg';
import Avatar2 from '../../public/assets/avatar2.jpg';
import Avatar3 from '../../public/assets/avatar3.jpg';
import ServiceCard from "@/Components/ServiceCard";

const carddetails = [
  {title:'Makizushi', price:'18.00', rating:3, image:Image1},
  {title:'California', price:'23.00', rating:4, image:Image2}

]

const categories = [
  {title:'Main dish', description:'86 dishes', image:Image2},
  {title:'Break Fast', description:'12 breakfast', image:Image3},
  {title:'Sushi Combo', description:'Combo of 6', image:Image4},
  {title:'Browse All', description:'255 items', image:Image5}
]

const specialdishes = [
  {title:'Best Sushi Salad', image:Sushi, price:'10.00', rating:4.9},
  {title:'Zen Zest Sashimi Salad', image:Sushi2, price:'22.00', rating:4.9},
  {title:'Seaside Sushi Salad ', image:Sushi3, price:'18.00', rating:4.9}
]

const services = [
  {title:'CATERING', description:' Delight your guests with our flavors and presentation', 
  image:<svg className=" mx-auto block" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_36_244)">
  <path d="M61.8502 30.9339C60.4334 29.0417 58.4201 27.6824 56.1355 27.0752C57.249 23.8384 58.0718 20.5088 58.5942 17.1259C58.7649 15.8962 58.6478 14.6437 58.2522 13.4669C57.8566 12.2902 57.1932 11.2213 56.3143 10.3445C55.4354 9.46769 54.365 8.80684 53.1873 8.41398C52.0096 8.02113 50.7568 7.907 49.5275 8.08058C49.1915 8.12591 48.1942 8.27258 46.8315 8.53658C47.6753 6.66846 48.0751 4.63035 47.9995 2.58191C47.9883 2.23172 47.9083 1.88716 47.7639 1.56792C47.6195 1.24867 47.4137 0.960986 47.1581 0.721287C46.9026 0.481588 46.6023 0.29457 46.2745 0.17091C45.9467 0.047251 45.5977 -0.010628 45.2475 0.000578124C44.8973 0.0117843 44.5528 0.091856 44.2335 0.236222C43.9143 0.380587 43.6266 0.58642 43.3869 0.841967C43.1472 1.09751 42.9602 1.39777 42.8365 1.72559C42.7129 2.05342 42.655 2.40239 42.6662 2.75258C42.7117 4.04076 42.4474 5.32104 41.8955 6.48591C41.5099 5.44499 40.9598 4.47265 40.2662 3.60591C39.0874 2.2643 37.591 1.23965 35.9139 0.625654C34.2369 0.0116595 32.4326 -0.172078 30.6662 0.0912449C28.7294 0.246714 26.878 0.955768 25.3329 2.13391C23.5861 0.819761 21.4728 0.0833252 19.2875 0.0272448C16.5147 -0.241501 13.7484 0.599431 11.5942 2.36591C10.5004 3.3397 9.61729 4.52686 8.99912 5.85446C8.38095 7.18205 8.04079 8.62203 7.99953 10.0859C7.92635 12.43 8.60883 14.7354 9.9462 16.6619C8.31927 18.0568 7.05635 19.8268 6.26653 21.8191C5.4767 23.8113 5.18372 25.9658 5.41287 28.0966C3.30394 29.2718 1.66045 31.133 0.755289 33.3712C-0.14987 35.6093 -0.26223 38.0898 0.436865 40.4006C2.26356 46.7566 5.66348 52.5494 10.3222 57.2433C14.7915 61.6012 20.7946 64.0281 27.0369 64.0006H36.9622C43.2038 64.0285 49.2062 61.6015 53.6742 57.2433C58.3346 52.5503 61.7356 46.7572 63.5622 40.4006C64.0383 38.7988 64.1314 37.1076 63.834 35.4633C63.5367 33.8189 62.8571 32.2675 61.8502 30.9339ZM50.2689 13.3606C50.6816 13.3049 51.1015 13.3454 51.496 13.4789C51.8904 13.6123 52.2487 13.8352 52.5427 14.13C52.8368 14.4249 53.0587 14.7837 53.1912 15.1785C53.3236 15.5733 53.363 15.9934 53.3062 16.4059C52.747 19.9077 51.8403 23.3452 50.5995 26.6672H43.7702L47.2182 23.2192C47.704 22.7163 47.9727 22.0427 47.9667 21.3435C47.9606 20.6443 47.6801 19.9755 47.1857 19.4811C46.6913 18.9866 46.0225 18.7062 45.3233 18.7001C44.6241 18.694 43.9505 18.9628 43.4475 19.4486L36.2289 26.6672H32.0982C31.9034 25.2647 32.0372 23.8361 32.4888 22.4941C32.9405 21.152 33.6977 19.9333 34.7009 18.9339C35.8395 17.7846 40.2049 14.6672 50.2689 13.3606ZM13.3329 10.2646C13.3489 9.53044 13.5144 8.80727 13.8193 8.13924C14.1242 7.47122 14.5621 6.87236 15.1062 6.37925C16.2064 5.56603 17.5732 5.19838 18.9329 5.34991C19.5896 5.32291 20.2447 5.43511 20.855 5.67915C21.4653 5.92318 22.0171 6.29354 22.4742 6.76591C22.834 7.16795 23.2746 7.48953 23.7672 7.70964C24.2598 7.92974 24.7933 8.04342 25.3329 8.04325C25.8712 8.04059 26.4029 7.92478 26.8935 7.70335C27.3842 7.48192 27.8228 7.15981 28.1809 6.75791C28.5786 6.3372 29.0559 5.99964 29.585 5.7648C30.1142 5.52997 30.6847 5.40254 31.2635 5.38991C32.145 5.2329 33.0517 5.29686 33.9023 5.57609C34.753 5.85531 35.5212 6.34107 36.1382 6.98991C36.9477 8.0263 37.3703 9.31269 37.3329 10.6272C37.3329 10.8006 37.3329 11.1792 37.3329 11.1792C33.7929 12.454 30.7689 14.855 28.7249 18.0139C27.041 16.0205 24.8005 14.575 22.2903 13.8624C19.7801 13.1498 17.1143 13.2026 14.6342 14.0139C13.7493 12.9695 13.2853 11.6327 13.3329 10.2646ZM10.6662 26.6672C10.6662 24.5455 11.5091 22.5107 13.0093 21.0104C14.5096 19.5101 16.5445 18.6672 18.6662 18.6672C20.7879 18.6672 22.8228 19.5101 24.3231 21.0104C25.8233 22.5107 26.6662 24.5455 26.6662 26.6672H10.6662ZM58.4422 38.9046C56.8489 44.3903 53.9165 49.3938 49.9089 53.4646C46.4437 56.8313 41.7934 58.7 36.9622 58.6673H27.0369C22.2043 58.6988 17.5528 56.8304 14.0849 53.4646C10.0771 49.3939 7.14464 44.3904 5.55153 38.9046C5.31247 38.0972 5.2661 37.245 5.41615 36.4165C5.56621 35.588 5.9085 34.8062 6.41553 34.1339C6.9075 33.4703 7.54846 32.9315 8.28678 32.561C9.02509 32.1904 9.84012 31.9985 10.6662 32.0006H53.3329C54.1617 31.996 54.9799 32.1867 55.7211 32.5574C56.4624 32.928 57.106 33.4681 57.5995 34.1339C58.103 34.808 58.4414 35.5906 58.5878 36.4191C58.7341 37.2476 58.6842 38.0988 58.4422 38.9046Z" fill="#5FE26C"/>
  </g>
  <defs>
  <clipPath id="clip0_36_244">
  <rect width="64" height="64" fill="white"/>
  </clipPath>
  </defs>
  </svg>},
  {title: 'FAST DELIVERY', description:'We deliver your order promptly to your door right on time', 
  image:<svg className=" mx-auto block" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_36_243)">
  <path d="M24 63.9983H2.66667C1.95942 63.9983 1.28115 63.7174 0.781049 63.2173C0.280952 62.7172 0 62.0389 0 61.3317C0 60.6244 0.280952 59.9462 0.781049 59.4461C1.28115 58.946 1.95942 58.665 2.66667 58.665H24C24.7072 58.665 25.3855 58.946 25.8856 59.4461C26.3857 59.9462 26.6667 60.6244 26.6667 61.3317C26.6667 62.0389 26.3857 62.7172 25.8856 63.2173C25.3855 63.7174 24.7072 63.9983 24 63.9983Z" fill="#5FE26C"/>
  <path d="M18.6667 53.3334H2.66667C1.95942 53.3334 1.28115 53.0524 0.781049 52.5523C0.280952 52.0522 0 51.3739 0 50.6667C0 49.9594 0.280952 49.2812 0.781049 48.7811C1.28115 48.281 1.95942 48 2.66667 48H18.6667C19.3739 48 20.0522 48.281 20.5523 48.7811C21.0524 49.2812 21.3333 49.9594 21.3333 50.6667C21.3333 51.3739 21.0524 52.0522 20.5523 52.5523C20.0522 53.0524 19.3739 53.3334 18.6667 53.3334Z" fill="#5FE26C"/>
  <path d="M13.3333 42.6683H2.66667C1.95942 42.6683 1.28115 42.3874 0.781049 41.8873C0.280952 41.3872 0 40.7089 0 40.0016C0 39.2944 0.280952 38.6161 0.781049 38.116C1.28115 37.6159 1.95942 37.335 2.66667 37.335H13.3333C14.0406 37.335 14.7189 37.6159 15.219 38.116C15.719 38.6161 16 39.2944 16 40.0016C16 40.7089 15.719 41.3872 15.219 41.8873C14.7189 42.3874 14.0406 42.6683 13.3333 42.6683Z" fill="#5FE26C"/>
  <path d="M34.6671 63.8788C33.9599 63.9103 33.2691 63.6595 32.7468 63.1817C32.2244 62.7039 31.9133 62.0381 31.8818 61.3308C31.8503 60.6236 32.1011 59.9328 32.579 59.4105C33.0568 58.8881 33.7226 58.577 34.4298 58.5455C39.4764 58.0838 44.2869 56.1936 48.2979 53.0964C52.3089 49.9992 55.3544 45.8232 57.0776 41.0576C58.8008 36.2919 59.1304 31.1339 58.0278 26.1877C56.9252 21.2414 54.436 16.7118 50.8518 13.1292C47.2676 9.54671 42.7369 7.05963 37.7901 5.95929C32.8434 4.85896 27.6855 5.19093 22.9207 6.91633C18.1558 8.64174 13.9813 11.6891 10.8859 15.7016C7.79057 19.714 5.90261 24.5254 5.44318 29.5722C5.37953 30.2766 5.03866 30.9269 4.49555 31.3799C3.95245 31.833 3.2516 32.0518 2.54719 31.9882C1.84277 31.9245 1.1925 31.5836 0.739408 31.0405C0.286321 30.4974 0.0675382 29.7966 0.13119 29.0922C0.874893 20.8877 4.75413 13.286 10.9614 7.86968C17.1686 2.45332 25.2257 -0.360454 33.4553 0.0140732C41.6849 0.3886 49.453 3.92257 55.1427 9.88035C60.8323 15.8381 64.005 23.7607 64.0004 31.9988C64.0413 39.9944 61.0709 47.7124 55.6802 53.6175C50.2894 59.5227 42.8733 63.1822 34.9072 63.8682C34.8271 63.8762 34.7445 63.8788 34.6671 63.8788Z" fill="#5FE26C"/>
  <path d="M32.0004 16C31.2932 16 30.6149 16.281 30.1148 16.781C29.6147 17.2811 29.3337 17.9594 29.3337 18.6667V32C29.3339 32.7072 29.6149 33.3854 30.1151 33.8853L38.1151 41.8853C38.618 42.3711 39.2916 42.6399 39.9908 42.6338C40.69 42.6277 41.3588 42.3473 41.8533 41.8528C42.3477 41.3584 42.6281 40.6896 42.6342 39.9904C42.6403 39.2912 42.3715 38.6176 41.8857 38.1147L34.6671 30.896V18.6667C34.6671 17.9594 34.3861 17.2811 33.886 16.781C33.3859 16.281 32.7077 16 32.0004 16Z" fill="#5FE26C"/>
  </g>
  <defs>
  <clipPath id="clip0_36_243">
  <rect width="64" height="64" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  },
  {title:'ONLINE ORDERING', description:'Explore menu & order with ease using our Online Ordering',
   image: 
   <svg className=" mx-auto block" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g clip-path="url(#clip0_36_246)">
   <path d="M18.6663 64.0016C21.6118 64.0016 23.9997 61.6138 23.9997 58.6683C23.9997 55.7228 21.6118 53.335 18.6663 53.335C15.7208 53.335 13.333 55.7228 13.333 58.6683C13.333 61.6138 15.7208 64.0016 18.6663 64.0016Z" fill="#5FE26C"/>
   <path d="M45.3333 64.0016C48.2788 64.0016 50.6666 61.6138 50.6666 58.6683C50.6666 55.7228 48.2788 53.335 45.3333 53.335C42.3878 53.335 40 55.7228 40 58.6683C40 61.6138 42.3878 64.0016 45.3333 64.0016Z" fill="#5FE26C"/>
   <path d="M63.1597 3.56104C62.6596 3.06111 61.9815 2.78027 61.2744 2.78027C60.5673 2.78027 59.8891 3.06111 59.389 3.56104L45.6317 17.3317L41.4957 13.0144C41.253 12.7619 40.963 12.5597 40.6422 12.4193C40.3213 12.2789 39.976 12.203 39.6258 12.1961C39.2757 12.1892 38.9276 12.2513 38.6015 12.3789C38.2753 12.5064 37.9775 12.697 37.725 12.9397C37.4726 13.1824 37.2703 13.4724 37.1299 13.7933C36.9895 14.1141 36.9137 14.4594 36.9068 14.8096C36.8928 15.5167 37.1603 16.2004 37.6504 16.7104L41.9544 21.1877C42.413 21.683 42.9673 22.0802 43.5837 22.3552C44.2002 22.6302 44.8661 22.7774 45.541 22.7877H45.629C46.2905 22.7899 46.9458 22.6607 47.557 22.4075C48.1681 22.1544 48.7229 21.7823 49.189 21.313L63.1597 7.3317C63.6596 6.83163 63.9405 6.15348 63.9405 5.44637C63.9405 4.73927 63.6596 4.06111 63.1597 3.56104Z" fill="#5FE26C"/>
   <path d="M58.4 24.0427C58.0552 23.9804 57.7015 23.9866 57.3592 24.0611C57.0168 24.1355 56.6925 24.2767 56.4047 24.4766C56.117 24.6764 55.8714 24.931 55.6821 25.2258C55.4927 25.5206 55.3634 25.8498 55.3013 26.1947L54.96 28.0853C54.6273 29.9315 53.6565 31.6021 52.2171 32.8051C50.7776 34.0081 48.9613 34.667 47.0853 34.6667H14.448L11.9413 13.3333H29.3333C30.0406 13.3333 30.7189 13.0524 31.2189 12.5523C31.719 12.0522 32 11.3739 32 10.6667C32 9.95942 31.719 9.28115 31.2189 8.78105C30.7189 8.28095 30.0406 8 29.3333 8H11.312L11.2 7.06133C10.9702 5.11626 10.0348 3.32308 8.57117 2.02161C7.10751 0.720145 5.21727 0.000834231 3.25867 0L2.66667 0C1.95942 0 1.28115 0.280952 0.781049 0.781049C0.280952 1.28115 0 1.95942 0 2.66667C0 3.37391 0.280952 4.05219 0.781049 4.55229C1.28115 5.05238 1.95942 5.33333 2.66667 5.33333H3.25867C3.91182 5.33342 4.54223 5.57322 5.03033 6.00724C5.51842 6.44127 5.83025 7.03933 5.90667 7.688L9.576 38.888C9.95694 42.1328 11.5159 45.1248 13.9571 47.296C16.3982 49.4673 19.5516 50.6667 22.8187 50.6667H50.6667C51.3739 50.6667 52.0522 50.3857 52.5523 49.8856C53.0524 49.3855 53.3333 48.7072 53.3333 48C53.3333 47.2928 53.0524 46.6145 52.5523 46.1144C52.0522 45.6143 51.3739 45.3333 50.6667 45.3333H22.8187C21.164 45.3337 19.55 44.8209 18.199 43.8657C16.8479 42.9106 15.8262 41.56 15.2747 40H47.0853C50.2114 40.0002 53.2382 38.902 55.6369 36.8972C58.0355 34.8924 59.6534 32.1085 60.208 29.032L60.5493 27.1387C60.6744 26.4431 60.5183 25.7264 60.1153 25.1459C59.7123 24.5654 59.0954 24.1686 58.4 24.0427Z" fill="#5FE26C"/>
   </g>
   <defs>
   <clipPath id="clip0_36_246">
   <rect width="64" height="64" fill="white"/>
   </clipPath>
   </defs>
   </svg>},
  {title:'GIFT CARDS', description:'Give the gift of exceptional dining with Foodi Gift Cards', 
  image:<svg className=" mx-auto block" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_36_245)">
  <path d="M53.3333 18.6667H48.6987C50.2064 17.3376 51.4032 15.693 52.2042 13.8496C53.0051 12.0062 53.3906 10.0091 53.3333 8C53.3333 7.29276 53.0524 6.61448 52.5523 6.11438C52.0522 5.61428 51.3739 5.33333 50.6667 5.33333C49.9594 5.33333 49.2811 5.61428 48.781 6.11438C48.281 6.61448 48 7.29276 48 8C48 14.992 41.6773 17.4133 36.8693 18.2427C38.644 15.0961 39.7122 11.601 40 8C40 5.87827 39.1571 3.84344 37.6569 2.34315C36.1566 0.842855 34.1217 0 32 0C29.8783 0 27.8434 0.842855 26.3431 2.34315C24.8429 3.84344 24 5.87827 24 8C24.2878 11.601 25.356 15.0961 27.1307 18.2427C22.3227 17.4133 16 14.992 16 8C16 7.29276 15.719 6.61448 15.219 6.11438C14.7189 5.61428 14.0406 5.33333 13.3333 5.33333C12.6261 5.33333 11.9478 5.61428 11.4477 6.11438C10.9476 6.61448 10.6667 7.29276 10.6667 8C10.6094 10.0091 10.9949 12.0062 11.7958 13.8496C12.5968 15.693 13.7936 17.3376 15.3013 18.6667H10.6667C7.83769 18.6667 5.12458 19.7905 3.12419 21.7909C1.12381 23.7912 0 26.5044 0 29.3333L0 32C0 33.4145 0.561903 34.771 1.5621 35.7712C2.56229 36.7714 3.91885 37.3333 5.33333 37.3333V50.6667C5.33757 54.2016 6.74369 57.5905 9.24325 60.0901C11.7428 62.5897 15.1317 63.9958 18.6667 64H45.3333C48.8683 63.9958 52.2572 62.5897 54.7568 60.0901C57.2563 57.5905 58.6624 54.2016 58.6667 50.6667V37.3333C60.0812 37.3333 61.4377 36.7714 62.4379 35.7712C63.4381 34.771 64 33.4145 64 32V29.3333C64 26.5044 62.8762 23.7912 60.8758 21.7909C58.8754 19.7905 56.1623 18.6667 53.3333 18.6667ZM32 5.33333C32.7072 5.33333 33.3855 5.61428 33.8856 6.11438C34.3857 6.61448 34.6667 7.29276 34.6667 8C34.3448 10.8342 33.4366 13.5704 32 16.0347C30.5634 13.5704 29.6552 10.8342 29.3333 8C29.3333 7.29276 29.6143 6.61448 30.1144 6.11438C30.6145 5.61428 31.2928 5.33333 32 5.33333ZM5.33333 29.3333C5.33333 27.9188 5.89524 26.5623 6.89543 25.5621C7.89562 24.5619 9.25218 24 10.6667 24H29.3333V32H5.33333V29.3333ZM10.6667 50.6667V37.3333H29.3333V58.6667H18.6667C16.5449 58.6667 14.5101 57.8238 13.0098 56.3235C11.5095 54.8232 10.6667 52.7884 10.6667 50.6667ZM53.3333 50.6667C53.3333 52.7884 52.4905 54.8232 50.9902 56.3235C49.4899 57.8238 47.4551 58.6667 45.3333 58.6667H34.6667V37.3333H53.3333V50.6667ZM34.6667 32V24H53.3333C54.7478 24 56.1044 24.5619 57.1046 25.5621C58.1048 26.5623 58.6667 27.9188 58.6667 29.3333V32H34.6667Z" fill="#5FE26C"/>
  </g>
  <defs>
  <clipPath id="clip0_36_245">
  <rect width="64" height="64" fill="white"/>
  </clipPath>
  </defs>
  </svg>}
]


export default function Home() {
  return (
    <section className=" ">
      <div className=" justify-center pb-10 items-center md:flex">

        <div className=" px-6 2xl:px-0 py-16 2xl:py-0 md:w-2/4 2xl:space-y-[63px] space-y-[50px]">
            <h1 className=" font-extrabold 2xl:text-[62px] text-[57px] leading-[55px] 2xl:leading-[75px]">Sushi Bliss, Every <br/> Roll a Flavorful <span className=" text-primary ">Kiss</span></h1>
            <h4 className=" text-secondary font-medium 2xl:leading-[44.33px] leading-9 text-xl 2xl:text-[26px]">Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations, Where Tradition Meets Innovation!</h4>

            <div className=" gap-x-7 sm:justify-start justify-center flex">
              <button className=" shadow-primarygradient leading-10 shadow-xl sm:leading-[44.33px] font-semibold text-lg sm:text-[26px] rounded-[40px] bg-primary text-light sm:py-[18px] py-[11px] px-[40px] sm:px-[47px]">Order Now</button>
              <button className="items-center gap-x-4 leading-10 sm:leading-[44.33px] font-semibold text-lg sm:text-[26px] flex ">
                Watch Video
                <span className=" rounded-full shadow-2xl bg-linear1 p-[14px] sm:p-[22px]">
                  <svg className=" sm:w-[24px] w-[14px] sm:h-[24px] h-[14px]"  viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.49999 26.9904C2.49999 28.1451 -1.34201e-06 26.7017 -1.24107e-06 24.3923L-3.32543e-07 3.60769C-2.31596e-07 1.29829 2.5 -0.145083 4.5 1.00962L22.5 11.4019Z" fill="#1E1E1E"/>
                  </svg>
                </span>
              </button>
            </div>
        </div>
        <div className=" md:w-2/4 relative">
          <Image className=" relative object-cover z-50 block w-full" src={Beef}height={'856px'} alt="equilibrium" />
          <div className=" -z-0 gap-x-3 absolute sm:bottom-3 bottom-1 left- flex sm:flex-row flex-col justify-center ">
            {carddetails.map((item, idx)=>(
              <HeroCard key={idx} item={item}/>
            ))}
            
          </div>
        </div>
      </div>

      <div className=" py-10 my-10">
        <h1 className=" text-errorbg text-center text-[22px] leading-[26.63px] font-bold">CUSTOMER FAVORITES</h1>
        <h2 className=" my-4 text-dark sm:text-6xl text-5xl font-bold text-center">Popular Categories</h2>

        <div className=" my-[60px] flex justify-center flex-wrap gap-5">
          {categories.map((item, idx)=>(
            <div className=" w-[300px]" key={idx}>
              <CategoryCard item={item}/>
            </div>
           ))}

        </div>
      </div>

      <div className=" px-6 2xl:px-0 py-10 my-32">
        <h1 className=" text-errorbg text-[22px] leading-[26.63px] font-bold">SPECIAL DISHES</h1>
        <div className="  md:my-12 my-8 flex flex-col md:flex-row justify-between md:items-center">
            <h2 className="  font-bold md:text-6xl text-5xl text-dark md:leading-[72.61px] leading-[65px] ">Best Dishes <br className=" hidden md:inline-block"/> From Our Menu </h2>
            <div className=" gap-x-3 flex justify-end">
              <button className=" bg-lightash md:p-5 p-3 rounded-full ">
                <ChevronLeftIcon className=" w-7 h-7 text-darkash"/>
              </button>
              <button className=" md:p-5 p-3 rounded-full bg-primary">
                <ChevronRightIcon className=" w-7 h-7 text-light"/>
              </button>
            </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-center gap-7">
            {specialdishes.map((item, idx)=>(
              <div key={idx} className=" w-full md:w-[446px]">
                <SpecialDishCard item={item}/>
              </div>
            ))}
        </div>
      </div>

      <div className=" py-10 my-32">
        <div className="flex px-5 2xl:px-0 flex-col md:flex-row  gap-x-5 justify-center">
          <div >
            <Image alt='chef TESTIMONIALS' className=" md:w-[645px] w-full mx-auto block " src={ChefImage}/>
          </div>
          <div className=" space-y-10 md:w-2/4">
            <h1 className=" text-errorbg text-[22px] leading-[26.63px] font-bold">TESTIMONIALS</h1>
            <h2 className="  font-bold md:text-6xl text-5xl text-dark leading-[65px] md:leading-[72.61px] ">What Our Customers Say About Us</h2>
            <p className=" sm:text-[26px] text-[24px] leading-9  sm:leading-[41.34px] text-darkash ">“I had the pleasure of dining at Foodi last night, 
              and I&apos;m still raving about the experience! The attention to detail in presentation and service was impeccable”</p>

            <div className=" flex gap-6 items-center">
              <div className='flex -space-x-8'>
                  <span className=" shadow p-2 rounded-full bg-linear1"><Image className=" w-20 h-[20] rounded-full" src={Avatar} alt='avatar'/></span>
                  <span className=" shadow p-2 rounded-full bg-linear1"><Image className=" w-20 h-[20] rounded-full" src={Avatar3} alt='avatar'/></span>
                  <span className=" shadow p-2 rounded-full bg-linear1"><Image className=" w-20 h-[20] rounded-full" src={Avatar2} alt='avatar'/></span>
              </div> 
              <div>
                <h4 className=" text-[26px] font-semibold leading-[31.4px] ">Customer Feedback</h4>
                <div className=" inline-flex items-center space-x-2">
                  <svg className=" sm:w-[24px] w-[18px] sm:h-[24px] h-[18px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_36_232)">
                  <path d="M1.3267 12.4003L4.8867 15.0003L3.53471 19.1873C3.31622 19.8367 3.31345 20.5393 3.52681 21.1904C3.74018 21.8415 4.15825 22.4062 4.7187 22.8003C5.26956 23.2071 5.9371 23.425 6.62186 23.4216C7.30662 23.4182 7.97195 23.1936 8.51871 22.7813L11.9997 20.2193L15.4817 22.7783C16.0316 23.1828 16.6955 23.4025 17.3781 23.4058C18.0607 23.4091 18.7267 23.1959 19.2805 22.7968C19.8342 22.3978 20.2472 21.8334 20.46 21.1848C20.6728 20.5362 20.6744 19.8369 20.4647 19.1873L19.1127 15.0003L22.6727 12.4003C23.2218 11.9988 23.6301 11.4341 23.8391 10.7867C24.048 10.1394 24.0471 9.44251 23.8364 8.79571C23.6257 8.14891 23.2159 7.58525 22.6657 7.18523C22.1155 6.7852 21.453 6.56929 20.7727 6.56832H16.3997L15.0727 2.43232C14.864 1.78128 14.454 1.21333 13.9017 0.810386C13.3494 0.407437 12.6834 0.190308 11.9997 0.190308C11.316 0.190308 10.65 0.407437 10.0977 0.810386C9.54544 1.21333 9.13538 1.78128 8.92671 2.43232L7.59971 6.56832H3.23071C2.55045 6.56929 1.8879 6.7852 1.33768 7.18523C0.787473 7.58525 0.377745 8.14891 0.167026 8.79571C-0.0436933 9.44251 -0.044626 10.1394 0.164361 10.7867C0.373348 11.4341 0.781566 11.9988 1.3307 12.4003H1.3267Z" fill="#FFE605"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_36_232">
                  <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <span className=" text-[#454545] text-[20px] sm:text-[26px] font-semibold leading-[31.4px]">4.9</span>
                  <span className=" leading-[29.05px] text-lg sm:text-2xl text-[#807E7E] font-medium ">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
            
           

          </div>
        </div>


        
      </div>

      <div className=" py-10 my-28 md:my-32">
        <div className=" px-6 2xl:px-0 flex gap-x-5 flex-col md:flex-row justify-center">
          <div className=" space-y-10 md:w-2/4">
            <h1 className=" text-errorbg text-[22px] leading-[26.63px] font-bold">OUR STORY & SERVICES</h1>
            <h2 className="  font-bold sm:text-6xl text-5xl leading-[65px]  text-dark sm:leading-[72.61px] ">Our Culinary Journey And Services</h2>
            <p className=" sm:text-[26px] text-[23px] leading-9 sm:leading-[41.34px] text-darkash ">Rooted in passion, we curate unforgettable dining experiences
             and offer exceptional services, blending culinary artistry with warm hospitality.</p>

          </div>
          <div className=" md:w-2/4">
            <div className="  grid grid-cols-4 gap-8 ">
              {services.map((item, idx)=>(
                <div key={idx} className=" col-span-4 sm:col-span-2"><ServiceCard item={item}/></div>
              ))}
              
            </div>
          </div>
        </div>


        
      </div>
    </section>
  );
}
