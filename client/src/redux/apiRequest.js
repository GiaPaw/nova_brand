import axios from "axios";
import { loginFailed, loginStart, loginSuccess, regisFailed, regisStart, regisSuccess } from "./authSlice";


export const getAuthorizedInstance = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'http://localhost:3001', // Thay đổi thành URL của máy chủ
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const loginUser = async(user, dispatch,navigate) =>{
  dispatch(loginStart());
  try { 
      const response = await axios.post("http://localhost:3001/api-user/login",user);
      dispatch(loginSuccess(response.data));
      localStorage.setItem("token",response.data.data.token)
      if (response.data.data.user.roles === 2) {
        navigate('/homeAdmin'); // Chuyển hướng đến trang admin
        console.log(response.data.data.user);
        console.log(response.data.data.token);
      } else {
        navigate('/'); // Chuyển hướng đến trang home
        console.log(response.data.data.user);
        console.log(response.data.data.token);
      }
    } catch (error) {
      dispatch(loginFailed())
    }
}

export const regisUser = async(user, dispatch,navigate) =>{
    dispatch(regisStart());
    try {
         await axios.post("http://localhost:3001/api-user/signup",user);
        dispatch(regisSuccess());
        navigate("/Login"); // Chuyển hướng đến trang chủ (homepage)
      } catch (error) {
        dispatch(regisFailed())
      }
}

