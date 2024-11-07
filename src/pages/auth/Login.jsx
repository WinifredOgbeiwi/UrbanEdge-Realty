import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../../../firebase";
import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;
  const navigate = useNavigate();

  const handlesOnChange = (e) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlesSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) navigate("/");
    } catch (error) {
      toast.error("Error! Can't login");
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
              Don't have an account ?
              <Link
                to={"/register"}
                className="text-primary hover:cursor-pointer ml-1"
              >
                Register
              </Link>
            </p>
            <Link
              to={"/forgot-password"}
              className="text-primary hover:cursor-pointer "
            >
              Forgot password?
            </Link>
          </div>
          <Button text="Login" bg="bg-primary text-white w-full mt-3" />
        </form>
        <div className=" my-4 flex items-center text-center before:border-t-2 before:flex-1 before:border-secondary after:border-t-2 after:flex-1  after:border-secondary ">
          <p className="mx-4">OR</p>
        </div>
        <GoogleAuth page="Login" />
      </div>
    </section>
  );
};

export default Login;
