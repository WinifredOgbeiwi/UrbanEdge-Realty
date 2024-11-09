import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import IMAGES from "../../utils/assets";
import { ROUTES } from "../../utils/routes";

const ForgotPassword = () => {
  const [email, SetEmail] = useState("");

  const handlesSubmit = async (e) => {
    e.preventDefault();
    if(email === "")  toast.error("Enter email");
     else {
       try {
         const auth = getAuth();
         await sendPasswordResetEmail(auth, email);
         toast.success("Email successfully sent!");
       } catch (error) {
         toast.error("Could not send reset password!");
       }
     }
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      <div className="w-full h-full bg-[#E6D8FF] px-20 flex flex-col justify-center">
        <h2 className="text-4xl mb-5 text-center font-bold">
          Forgot Password ?
        </h2>
        <h3 className="text-3xl font-bold"></h3>
        <p className="">
          No worries, we'll send you reset instructions. Enter the email
          associated with your UrbanEdge Realty's account.
        </p>
        <div className="w-full ">
          <form onSubmit={handlesSubmit} className="mt-5">
            <Input
              id="email"
              text="Email"
              type="email"
              placeholder="Enter Email"
              value={email}
              onchange={(e) => SetEmail(e.target.value)}
            />

            <Button
              text="Request reset link"
              onclick={handlesSubmit}
            />
            <p className="mt-3">
              Back to
              <Link to={ROUTES.LOGIN} className="text-primary ml-1">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden sm:flex bg-primary  ">
        <img src={IMAGES.Auth} alt="" />
      </div>
    </section>
  );
};

export default ForgotPassword;
