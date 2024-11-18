import React, { useState } from 'react';
import Button from '../Components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../Constants';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../Components/ShoeCard';
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
    id='home'
    className='w-full flex flex-col xl:flex-row  justify-center min-h-screen  border-collapse gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddig-x pt-28'> 
    <p className='text-xl font-montserrat text-coral-red'>Our Summary Collection</p>
    <h1 className='mt-10 font-palanquin text-8xl max-sm-text-[72px] max-sm:leading-[82px] font-bold 
    '>
      <span className='xl-bg-white xl:whitespace-nowrap relative z-10 pr-10 flex-1'>The New Arrival</span>
      <br />
      <span className='text-coral-red inline-block mt-3'>Nike </span>
      Shoes
    </h1>
    <p className='font font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14'>Discover Stylish Nike <span>arrivals</span>, Quality comfort,
      and  innovation for your active life.
    </p>
    <Button Label="Shop now" iconURL={arrowRight} />
    
      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
    {statistics.map((stat) => (
      <div key={stat.label}>
        <p className='font-palanquin font-bold text-4xl'>{stat.value}</p>
        <p className='font-montserrat leading-7 text-slate-gray hover:text-coral-red'>{stat.label}</p>
      </div>
    ))}
      </div>
</div>
     
<div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[4%] sm:left-[12%] max-sm:px-6'>
          {shoes.map((shoe,index) =>  (
              <div key={index}>
                <ShoeCard 
                index={index}
                imgURL={shoe}
                changeBigShoeImage=
                {(shoe)=>setBigShoeImg(shoe)}
                bigShoeImg= {bigShoeImg}
                />
              </div>
            )
          )}
          </div>
        </div>

    </section>
  )
}

export default Hero