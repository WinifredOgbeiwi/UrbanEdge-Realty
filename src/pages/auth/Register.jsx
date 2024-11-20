import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { db } from "../../../firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";
import IMAGES from "../../utils/assets";
import { ROUTES } from "../../utils/routes";

const Register = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { fullname, email, password } = form;

  const navigate = useNavigate();
  const handlesOnChange = (e) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlesSubmit = async (e) => {
    e.preventDefault();
 if (fullname === "" || email === "" || password === "")
   toast.error("Fill input field");
 else {
   try {
     const auth = getAuth();
     const userCredential = await createUserWithEmailAndPassword(
       auth,
       email,
       password
     );

     updateProfile(auth.currentUser, {
       displayName: fullname,
     });

     const user = userCredential.user;
     await sendEmailVerification(user);

     const formData = { ...form };
     delete formData.password;
     formData.timestamp = serverTimestamp();
     await setDoc(doc(db, "users", user.uid), formData);
     navigate(ROUTES.CONFIRM_REGISTRATION);
   } catch (error) {
     console.log(error);
     toast.error("Error! Try Again");
   }
 }
}

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      <div className="w-full h-full bg-[#E6D8FF] px-10">
        <h1 className="text-5xl mt-10 text-center font-bold">
          <Link to={ROUTES.HOME}>UrbanEdge</Link>
        </h1>
        <h2 className="text-4xl mt-5 text-center font-semibold">Welcome</h2>
        <form onSubmit={handlesSubmit} className="px-4">
          <Input
            id="fullname"
            text="Full Name"
            type="text"
            placeholder="Enter Full Name"
            value={fullname}
            onchange={handlesOnChange}
          />

          <Input
            id="email"
            text="Email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onchange={handlesOnChange}
          />
          <Input
            id="password"
            text="Password"
            type={passwordVisibility ? "password" : "text"}
            placeholder="********"
            setPasswordVisibility={setPasswordVisibility}
            passwordVisibility={passwordVisibility}
            value={password}
            onchange={handlesOnChange}
          />
          <div className="flexing mb-5">
            <p>
              Already have an account ?
              <Link
                to={ROUTES.LOGIN}
                className="text-primary hover:cursor-pointer ml-1"
              >
                Login
              </Link>
            </p>
          </div>
          <Button onclick={handlesSubmit} text="Register" w="w-full" />
        </form>
        <div className=" my-4 flex items-center text-center before:border-t-2 before:flex-1 before:border-secondary after:border-t-2 after:flex-1  after:border-secondary ">
          <p className="mx-4">OR</p>
        </div>
        <GoogleAuth page="Register" />
      </div>

      <div className="hidden sm:flex bg-primary  ">
        <img src={IMAGES.Auth} alt="" />
      </div>
    </section>
  );
};

export default Register;
