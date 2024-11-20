import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user
          .reload()
          .then(() => {
            if (user.emailVerified) {
              toast.success("Email verified! Redirecting to login...");
              navigate("/login");
            }
          })
          .catch((error) => {
            console.error("Error during user reload:", error);
          });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <section className="confirm-container">
      <h2>Please check your email for the verification link.</h2>
      <p>
        If you have verified your email, you will be redirected to the login
        page.
      </p>
    </section>
  );
};

export default ConfirmRegistration;
