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

const Register = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = form;

  const navigate = useNavigate();
  const handlesOnChange = (e) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlesSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      updateProfile(auth.currentUser, {
        displayName: firstname + " " + lastname,
      });

      const user = userCredential.user;
      await sendEmailVerification(user);

      const formData = { ...form };
      delete formData.password;
      formData.timestamp = serverTimestamp();
      await setDoc(doc(db, "users", user.uid), formData);
      navigate("/confirm-registration");
    } catch (error) {
      console.log(error);
      toast.error("Error ! Try Again");
    }
    console.log(form);
  };

  const handlesGoogleReg = async (e) => {};
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      <div className="w-full h-full bg-[#E6D8FF]">
        <h2 className="text-4xl mt-5 text-center font-bold mb-2">Welcome </h2>
        <form onSubmit={handlesSubmit} className="px-4">
          <Input
            id="firstname"
            text="First Name"
            type="text"
            placeholder="Enter First Name"
            value={firstname}
            onchange={handlesOnChange}
          />
          <Input
            id="lastname"
            text="Last Name"
            type="text"
            placeholder="Enter Last Name"
            value={lastname}
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
                to={"/login"}
                className="text-primary hover:cursor-pointer ml-1"
              >
                Login
              </Link>
            </p>
          </div>
          <Button text="Register" bg="bg-primary text-white w-full" />
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
