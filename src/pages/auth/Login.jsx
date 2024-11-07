import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;
  const handlesOnChange = (e) => {
    e.preventDefault();
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlesSubmit = (e) => {
        e.preventDefault();
    console.log(form);
  };

  return (
    <section className="md:flexing mx-20 my-10">
      <div className="w-full md:w-1/2 ">
        <form action="">
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
              Dont have an account ?
              <Link
                to={"/register"}
                className="text-primary hover:cursor-pointer"
              >
                Register
              </Link>
            </p>
            <Link
              to={"/forgot-password"}
              className="text-primary hover:cursor-pointer"
            >
              Forgot password?
            </Link>
          </div>
          <Button text="Register" bg="bg-primary text-white w-full" />
        </form>

        <div className=" my-4 flex items-center text-center before:border-t-2 before:flex-1 before:border-secondary after:border-t-2 after:flex-1  after:border-secondary ">
          <p className="mx-4">OR</p>
        </div>
        <div>
          <Button
            text="Register with Google"
            bg="bg-red-700 border-none text-white w-full"
          />
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Login;
