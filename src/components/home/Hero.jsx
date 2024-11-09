import React from 'react'

const Hero = () => {
  return (
    <section className=" bg-secondary2 h-[47rem] mt-5 overflow-hidden">
      <div className="flexing bg-secondary2 items-start space-x-3 ">
        <div className="w-1/2 mx-16 ">
          <h1 className="text-7xl font-bold">
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
          <Button
            text={"Browse Properties"}
            bg={"bg-primary text-white"}
            link={"/listings"}
          />
        </div>
        <div className="w-1/2 h-full">
          <img src={IMAGES.Hero} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero