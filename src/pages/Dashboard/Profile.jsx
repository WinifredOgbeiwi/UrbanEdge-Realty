import React from "react";
import Button from "../../components/common/Button";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../../utils/routes";

const Profile = () => {
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
    <section className="mx-12 my-5">
      <Button
        onclick={handlesLogOut}
        text="Log Out"
        bg="text-white bg-primary"
      />
    </section>
  );
};

export default Profile;
