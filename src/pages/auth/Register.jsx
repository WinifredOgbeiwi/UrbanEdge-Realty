import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../../firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";

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

      const formData = { ...form };

      delete formData.password;

      formData.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formData);

      console.log(user);

      toast.success("Registration Successful ! ");

      navigate("/");

    } catch (error) {
      console.log(error);
      toast.error("Error ! Try Again");
    }
    console.log(form);
  };

 const  handlesGoogleReg = async (e) =>{

 }
  return (
    <section className="md:flexing mx-20 my-10">
      <div className="w-full md:w-1/2 ">
        <form onSubmit={handlesSubmit}>
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
          <Button text="Register" bg="bg-primary text-white w-full mt-3" />
        </form>
        <div className=" my-4 flex items-center text-center before:border-t-2 before:flex-1 before:border-secondary after:border-t-2 after:flex-1  after:border-secondary ">
          <p className="mx-4">OR</p>
        </div>
        <GoogleAuth page="Register"/>
      </div>
    </section>
  );
};

export default Register;
