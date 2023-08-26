import { createRef } from "react";
import styles from "../styles/login.module.css";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const emailRef = createRef();
  const nameRef = createRef();
  const passwordRef = createRef();
  const auth = useAuth();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const response = await auth.signup(name, email, password);
    console.log(response);
    if (response.success) {
      toast.success("Account created success fully");
      return history("/login");
    } else {
      if (response.message === "User Exist") {
        toast.warning("User already exist please login!");
        return history("/login");
      } else {
        toast.error(response.message);
      }
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name </label>
          <input ref={nameRef} id="name" type="text" placeholder="xyz" />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            placeholder="abc@gmail.com"
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password </label>
          <input
            ref={passwordRef}
            id="password"
            type="Password"
            placeholder="*******"
          />
        </div>
        <button className={styles.submitBtn}>Login</button>
      </form>
    </div>
  );
}

export default SignUp;
