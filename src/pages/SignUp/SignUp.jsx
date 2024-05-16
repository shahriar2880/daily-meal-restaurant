import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (value) => {
    console.log(value);
    createUser(value.email, value.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(value.name, value.photoURL)
        .then(() => {
          console.log("user profile info update");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User create successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };
  //https://ibb.co/LrRQMyh
  return (
    <>
      <Helmet>
        <title>Daily Meal || SignUp</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-700">Name is required!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Enter Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-700">Photo URL is required!</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i,
                  })}
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-700">Email is required!</span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="text-red-700">Email pattern is wrong</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })}
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-700">Password is required!</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-700">
                    Password must be 6 character long
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-700">
                    Password length not over 20 character long
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center pb-5">
              <small>
                Already have an account?{" "}
                <Link to="/login" className="text-blue-700 underline">
                  Please Login
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
