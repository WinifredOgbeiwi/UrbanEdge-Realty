import Button from "../common/Button";

const CTA = () => {
  return (
    <section className="bg-[#100A55] flex justify-center items-center px-5">
      <div className="text-center py-10">
        <h5 className="text-primary font-bold text-xl">No Spam Promise</h5>
        <h2 className="my-4 text-white font-bold text-4xl">Are you a landlord?</h2>
        <p className="text-gray-400">
          Discover ways to increase your home's value and get listed. No Spam.
        </p>
        <div className="sm:bg-white my-4 py-2 px-4 rounded-md flex flex-col sm:flex-row justify-between">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
            className=" outline-none flex-1 p-1 sm:p-0 rounded-md"
          />
          <Button text="Submit" w="sm:py-1 py-0 mt-4 sm:mt-0 w-full"/>  
             </div>
          <p className="text-gray-400">
            Join <span className="text-white">10,000+ </span>other landlords in
            our estatery community.
          </p>
   
      </div>
    </section>
  );
}

export default CTA