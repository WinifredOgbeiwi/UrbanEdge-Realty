import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { db } from "../../../firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";

const ForgotPassword = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [email, SetEmail] = useState("");

  const navigate = useNavigate();

  const handlesSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email successfully sent!");
    } catch (error) {
      toast.error("Could not send reset password!");
    }
  };

  return (
    <section className="md:flexing mx-20 my-10">
      <div className="w-full md:w-1/2 ">
        <form onSubmit={handlesSubmit}>
          <Input
            id="email"
            text="Email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onchange={(e) => SetEmail(e.target.value)}
          />

          <Button text="Submit" bg="bg-primary text-white w-full mt-3" />
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
