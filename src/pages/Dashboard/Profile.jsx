import React, { useState } from "react";
import Button from "../../components/common/Button";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../utils/routes";
import Input from "../../components/common/Input";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    fullname: auth.currentUser.displayName,
    email: auth.currentUser.email,
    //password:auth.currentUser.
  });
  const [edit, setEdit] = useState(false);
  const getInitials = (fullname) => {
    const nameAbbr = fullname.split(" ");
    if (nameAbbr.length > 1) {
      let firstName = nameAbbr[0].charAt(0);
      let lastName = nameAbbr[nameAbbr.length - 1].charAt(0);
      return firstName + lastName;
    }
    return nameAbbr.slice(0, 1);
  };

  const handlesEdit = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const handlesEditandSubmit = async () => {
    setEdit(() => !edit);
    if (edit) {
      try {
        if (auth.currentUser.displayName !== userInfo.fullname) {
          await updateProfile(auth.currentUser, {
            displayName: userInfo.fullname,
          });
          const docRef = doc(db, "users", auth.currentUser.uid);
          await updateDoc(docRef, {
            fullname: userInfo.fullname,
          });
        }
        toast.success("Profile Updated");
      } catch (error) {
        toast.error("Could not update");
      }
    }
  };

  const handlesLogOut = async () => {
    try {
      await auth.signOut();
      navigate(ROUTES.HOME);
    } catch (error) {
      toast.error("Can't log out");
    }
  };
  return (
    <section className="mx-12 my-14 px-7 md:px-0 flex items-center justify-center flex-col  ">
      {!auth.currentUser.emailVerified && (
        <div className="bg-secondary md:w-1/2  text-center my-5 text-2xl w-full p-3 rounded-md ">
          Please verify your account
        </div>
      )}
      <div className="w-full md:w-1/2 border-2 bg-secondary2 border-secondary px-5 rounded-lg py-5 relative">
        <h2 className="text-center font-bold text-3xl">My Profile</h2>
        <div className="m-auto w-24 h-24 mt-4 rounded-full bg-secondary border-2 border-primary flex justify-center items-center">
          <p className="text-3xl font-extrabold">
            {" "}
            {getInitials(userInfo.fullname)}
          </p>
        </div>
        <Input
          text={"Full Name"}
          placeholder={"full name"}
          id="fullname"
          value={userInfo.fullname}
          onchange={handlesEdit}
          disabled={!edit}
        />
        <Input
          text={"Email"}
          placeholder={"full name"}
          id="email"
          value={userInfo.email}
          disabled={true}
          onchange={handlesEdit}
        />
        <Input
          text={"Old Password"}
          placeholder={"*******"}
          id="oldpassword"
          value=""
          onchange={handlesEdit}
          disabled={!edit}
        />
        <Input
          text={"New Password"}
          placeholder={"*******"}
          id="newpassword"
          value=""
          onchange={handlesEdit}
          disabled={!edit}
        />
        <Button
          onclick={handlesEditandSubmit}
          text={edit ? "Update" : "Edit"}
          bg="text-white bg-primary"
          w=" w-full"
        />
      </div>
   <div className="w-full md:w-[50%]">


        <Button
          onclick={handlesLogOut}
          text="Log Out"
          bg="text-white bg-primary"
          w="w-full mt-8 bg-red-600 border-red-600"
        /> 
          </div>
      </section>
  );
};

export default Profile;
