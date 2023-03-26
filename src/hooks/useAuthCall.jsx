
import axios from "axios"
import { fetchFail, fetchStart, loginSuccess,registerSuccess, logoutSuccess } from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"




const useAuthCall = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const BASE_URL = "https://12256.fullstack.clarusway.com/"

  const login = async (userInfo) => {
    

    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      )
      dispatch(loginSuccess(data))
      navigate("/stock")
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }
  const register = async (userInfo) => {
  
     dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      )
      dispatch(registerSuccess(data))
      navigate("/stock")
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }
  const logout = async () => {
  
     dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/logout/`,
      
      )
      dispatch(logoutSuccess())
      navigate("/")
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }

  return { login,register,logout }
}

export default useAuthCall