import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";
import IMAGES from "../../utils/assets";

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
    if(email === "" || password === "") toast.error("Fill input field");
   else{
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
  }
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 h-screen">
      <div className="w-full h-full bg-[#E6D8FF] px-10 ">
        <h2 className="text-4xl mt-10 text-center font-bold">Welcome Back</h2>
        <form onSubmit={handlesSubmit} className="px-4">
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
              to={"/reset-password"}
              className="text-primary hover:cursor-pointer "
            >
              Forgot password?
            </Link>
          </div>
          <Button
            onclick={handlesSubmit}
            text="Login"
          />
        </form>
        <div className=" my-4 flex items-center text-center before:border-t-2 before:flex-1 before:border-secondary after:border-t-2 after:flex-1  after:border-secondary ">
          <p className="mx-4">OR</p>
        </div>
        <GoogleAuth page="Login" />
      </div>
      <div className="hidden sm:flex bg-primary  ">
        <img src={IMAGES.Auth} alt="" />
      </div>
    </section>
  );
};

export default Login;
