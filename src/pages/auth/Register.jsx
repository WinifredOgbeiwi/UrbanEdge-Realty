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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

      toast.error("Registration Successful ! ");

      navigate("/");
      
    } catch (error) {
      console.log(error);
      toast.error("Error ! Try Again");
    }
    console.log(form);
  };

  return (
    <section className="md:flexing mx-20 my-10">
      <form onSubmit={handlesSubmit} className="w-full md:w-1/2 ">
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
        <Button text="Register" bg="bg-primary text-white w-full" />
      </form>
      <div></div>
    </section>
  );
};

export default Register;
