import { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  return (
    <section className="md:flexing mx-20 my-10">
      <form action="" className="w-full md:w-1/2 ">
        <Input id="email" text="Email" type="email" placeholder="Enter Email" />
        <Input
          id="password"
          text="Password"
          type={passwordVisibility ? "password" : "text"}
          placeholder="********"
          setPasswordVisibility={setPasswordVisibility}
          passwordVisibility={passwordVisibility}
        />
        <Button text="Register" bg="bg-primary text-white w-full" />
      </form>
      <div></div>
    </section>
  );
};

export default Login;
