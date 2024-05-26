import axios from "axios";

 const axiosSecure = axios.create({
  baseURL: 'http://localhost:5050'
});
const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    console.log('request stopped by interseptors',token)
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function(error){
    //do something with request error
    return Promise.reject(error)
  })
    return axiosSecure;
};

export default useAxiosSecure;
