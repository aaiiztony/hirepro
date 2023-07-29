import React from "react";
import { useFormik } from "formik";
import Lottie from "lottie-react";
import LoginAnimation from "../assets/loginAnimation.json";
import { useAuth0 } from "@auth0/auth0-react";


const Login = ({isMobile}) => {
  const { loginWithRedirect } = useAuth0();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      localStorage.setItem("credentials", JSON.stringify(values))
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full min-h-full flex justify-center items-center">
      <div className={`h-full flex justify-center mt-0 sm:mt-10 ${
        isMobile ? "flex-wrap" : ""
      }`}>
        <Lottie
          animationData={LoginAnimation}
          className="sm:h-[400px] w-full"
        />
        <div className="login__containe">
          <h1 className="font-extrabold md:text-4xl sm:text-3xl text-2xl font-dsans mt-0 sm:mt-20 ml-2">
            {" "}
            Already have an account?
            <br />
          </h1>
          <span className="font-semibold text-sm font-dsans mb-10 ml-2">
            Go to your dashboard👨‍🏫
          </span>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col space-y-2 sm:max-w-[450px] w-full mx-auto px-2 mt-5"
          >
            <input
               className="form-input"
              placeholder="Email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />{" "}
            <input
              className="form-input"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button
              type="submit"
              className="bg-accent form-button border border-slate-300"
            >
              Submit
            </button>
            <button onClick={(e) => {loginWithRedirect(); e.preventDefault()}} className="bg-red-400 form-button">Google Auth</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
