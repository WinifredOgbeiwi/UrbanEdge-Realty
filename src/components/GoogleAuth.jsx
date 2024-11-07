import { toast } from "react-toastify";
import Button from "./common/Button";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../../firebase";
import { getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const GoogleAuth = ({page}) => {
  const navigate = useNavigate();

  const handlesGoogleReg = async () => {
    try {
      const auth = getAuth();
      const userCred = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = userCred.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      toast.success("Registration Successful ! ");
      navigate("/");
    } catch (error) {
      toast.error("Error! Could not authorize with google");
    }
  };
  return (
    <div onClick={handlesGoogleReg} className="px-4 mb-5 ">
      <Button
        text={`${page} with Google`}
        bg="bg-red-700 border-none text-white w-full"
      />
    </div>
  );
};

export default GoogleAuth;
