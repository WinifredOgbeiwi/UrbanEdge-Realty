import React from 'react'
import IMAGES from '../../utils/assets';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className=" bg-secondary2 md:h-[47rem] mt-5 overflow-hidden">
      <div className="flex flex-col md:flex-row md:justify-between justify-center m-auto bg-secondary2 items-center space-x-3 ">
        <div className="md:w-1/2 mx-16 my-20 md:my-0 flex flex-col items-center text-center md:text-start">
          <h1 className="text-6xl sm:text-7xl font-bold">
            Buy, rent, or sell your property easily
          </h1>
          <p className="my-4 text-xl font-medium">
            A great platform to buy, sell, or even rent your properties without
            any commisions.
          </p>
          <div className="flexing  w-fit space-x-16 my-10">
            <div className="border-l-4 px-3 border-secondary">
              <h4 className=" text-primary font-bold text-2xl">50k+</h4>
              <p>renters</p>
            </div>
            <div className="border-l-4 border-secondary px-3">
              <h4 className=" text-primary font-bold text-2xl">10k+</h4>
              <p>properties</p>
            </div>
          </div>
          <div>
               <Button
            text={"Browse Properties"}
            link={"/listings"}
          />
          </div>
       

        </div>
        <div className="md:w-1/2 h-full">
          <img src={IMAGES.Hero} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero