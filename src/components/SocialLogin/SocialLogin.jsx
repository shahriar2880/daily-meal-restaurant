import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaYahoo,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
        console.log(result.user);
        const userInfo = {
            email : result.user?.email,
            name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res =>{
            console.log(res.data)
            navigate('/')
        })
    })
  };
  return (
    <div className="pb-6 flex gap-x-3 justify-center">
      <div>
        <button onClick={handleGoogleSignIn} className="btn ">
          <FaGoogle></FaGoogle>
          Google
        </button>
      </div>
      <div>
        <button className="btn ">
          <FaFacebook></FaFacebook>
          Facebook
        </button>
      </div>
      <div>
        <button className="btn ">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
