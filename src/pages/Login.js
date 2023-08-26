import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { createRef } from "react";
import styles from "../styles/login.module.css";
import { toast } from "react-toastify";

function Login() {
  const auth = useAuth();
  const emailRef = createRef();
  const passwordRef = createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await auth.login(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (response.success) {
      toast.success("Successfully Logged in");
    } else {
      toast.error(response.message);
    }
  };

  if (auth.user) {
    return <Navigate to="/home" />;
  }

  return (
    <div className={styles.loginWrapper}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password </label>
          <input
            ref={passwordRef}
            id="password"
            type="Password"
            placeholder="*******"
            required
          />
        </div>
        <button className={styles.submitBtn}>Login</button>
      </form>
    </div>
  );
}

export default Login;
