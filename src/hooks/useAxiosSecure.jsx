import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5050",
});
const useAxiosSecure = () => {
  //request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      //console.log('request stopped by interseptors',token)
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      //do something with request error
      return Promise.reject(error);
    }
  );

  //interceptor 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, (error)=>{
    const status = error.response.status;
    console.log('status error', status)
    return Promise.reject(error)
  });

  return axiosSecure;
};

export default useAxiosSecure;
