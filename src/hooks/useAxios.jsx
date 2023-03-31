import axios from "axios"
import { useSelector } from "react-redux";



const useAxios  = () => {

    const {token} = useSelector(state => state.auth)

    
const axiosPublic = axios.create({
    baseURL: "https://12256.fullstack.clarusway.com/",

    
  });

const axiosWithToken = axios.create({
    baseURL: "https://12256.fullstack.clarusway.com/"

   
  });

  return {axiosWithToken,axiosPublic}
}
export default useAxios