import React from "react";
import { useFormik } from "formik";
import Lottie from "lottie-react";
import LoginAnimation from "../assets/loginAnimation.json";

const Login = ({isMobile}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
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
        <div className="login__container">
          <h1 className="font-extrabold sm:text-4xl text-xl font-dsans mt-0 sm:mt-20 mb-3 ml-2">
            {" "}
            Already have an account?
            <br />
          </h1>
          <span className="font-semibold text-sm font-dsans mb-3 ml-2">
            Go to your dashboard👨‍🏫
          </span>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col space-y-2 sm:max-w-[450px] w-full mx-auto px-2"
          >
            <input
              className="mt-2 rounded-md bg-white p-2 text-sm shadow"
              placeholder="Email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />{" "}
            <input
              className="mt-2 rounded-md bg-white shadow p-2 text-sm"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button
              type="submit"
              className="bg-accent hover:bg-primary opacity-50 hover:opacity-100 focus:opacity-100 focus:bg-primary py-1 mt-2 rounded-md shadow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
