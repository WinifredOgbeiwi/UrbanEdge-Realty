import React, { useState } from "react";
import Button from "../../components/common/Button";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../utils/routes";
import Input from "../../components/common/Input";

const Profile = () => {

const [userInfo, setUserInfo] = useState({
  name:"winnie",
  email:"imade@gmail.com"
})

  const auth = getAuth();
  const navigate = useNavigate();
  const handlesLogOut = async () => {
    try {
      await auth.signOut();
      navigate(ROUTES.HOME);
    } catch (error) {
      toast.error("Can't log out");
    }
  };
  return (
    <section className="mx-12 my-5 flex items-center justify-center flex-col ">
      <div className="w-full md:w-[45%] border-2 bg-secondary2 border-secondary px-5 rounded-lg py-5 relative">
        <h2 className="text-center font-bold text-3xl">My Profile</h2>
        <div className="m-auto w-20 h-20 mt-4 rounded-full bg-secondary border-2 border-primary flex justify-center items-center">
          <p className="text-3xl font-extrabold"> {userInfo.name[0]}</p>
        </div>
        <Input
          text={"Full Name"}
          placeholder={"full name"}
          id="fullname"
          value={userInfo.name}
          onchange=""
        />
        <Input
          text={"Email"}
          placeholder={"full name"}
          id="fullname"
          value={userInfo.email}
        />
        <Input
          text={"Old Password"}
          placeholder={"*******"}
          id="oldpassword"
          value=""
          onchange=""
        />
        <Input
          text={"New Password"}
          placeholder={"*******"}
          id="newpassword"
          value=""
          onchange=""
        />
      </div>
      <Button
        onclick={handlesLogOut}
        text="Log Out"
        bg="text-white bg-primary"
        w="w-full mt-4"
      />
    </section>
  );
};

export default Profile;
