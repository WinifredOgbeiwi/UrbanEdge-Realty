import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ConfirmRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const interval = setInterval(() => {
      // Refresh the user to check if their email is verified
      onAuthStateChanged(auth, (user) => {
        if (user) {
          user.reload().then(() => {
            if (user.emailVerified) {
              clearInterval(interval);
              toast.success("Email verified! Redirecting to login...");
              navigate("/login");
            }
          });
        }
      });
    }, 3000)

    return () => clearInterval(interval); 
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
