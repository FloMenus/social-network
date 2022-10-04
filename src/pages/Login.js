import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";

import "../App.css";



const Login = () => {
  const navigate = useNavigate()
  const {fetchUser} = useContext(UserContext);
  const formik = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "12eA!",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter an email")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    }),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: () => {
      fetchUser();
      navigate("/profil")
    },
  });

  return (
    <>
      <h1>Login</h1>
      <form className="form-group" onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          handleChange={formik.handleChange}
          error={formik.errors.email}
        />
        <Input
          type="text"
          name="password"
          placeholder="password"
          handleChange={formik.handleChange}
          error={formik.errors.password}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
