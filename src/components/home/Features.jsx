import React from 'react'
import Button from '../common/Button';
import IMAGES from '../../utils/assets';
import { Features } from '../../utils/data-arrays';

const FeaturesSection = () => {
  return (
    <section className='flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 mt-10 mx-16'>
      <div className='w-full md:w-[45%] border-2 bg-secondary2 border-secondary px-5 rounded-lg py-5 relative'>
        <h3 className='text-3xl font-semibold'>The new way to find your new home</h3>
        <p className='my-5'>
          Find your dream place to live in with more than 10k+ properties
          listed.
        </p>
        <Button text="Browse Properties" />
        <img src={IMAGES.FeatureSection} alt="" className='mt-6 ml-0 flex-1' />
      </div>

      <div className='grid grid-cols-2 w-full md:w-[55%] space-x-5'>
        {
            Features.map((item)=>(
                <div key={item.id} className="flex flex-col items-center text-center">
                <img src={item.img} alt="" />
                <h5 className='text-xl font-bold my-4'>{item.heading}</h5>
                <p className='text-textPrimary'>{item.paragraph}</p>
                </div>
            ))
        }
      </div>
    </section>
  );
}

export default FeaturesSection;