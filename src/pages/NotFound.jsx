import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import IMAGES from "../utils/assets";

const NotFound = () => {
  return (
    <div className=" w-screen flex justify-center items-center flex-col">
      <img src={IMAGES.Page404} alt="" className="w-[28rem]" />
      <p className="font-medium mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
     
        <Button text="Go to Home" link="/" bg="bg-primary text-white" />
  
    </div>
  );
};

export default NotFound;
