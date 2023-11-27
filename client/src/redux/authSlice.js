import { createSlice } from '@reduxjs/toolkit';
const roleMap = {
  1: 'user', 
  2: 'admin', 
};
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    login:{
        currenUser:null,
        isFleching:false,
        error:false,
        userRole:null
    },
    register:{
      success:false,
      isFleching:false,
      error:false,
    },
  },
  reducers: {
    loginStart: (state) =>{
        state.login.isFleching = true
    },
    loginSuccess: (state,actions) =>{
        state.login.isFleching = true
        state.login.currenUser = actions.payload.data
        state.login.error = false
        state.login.userRole = roleMap[actions.payload.data.user.roles]; // Sử dụng roleMap để lấy tên vai trò
    },
    loginFailed: (state,actions) =>{
        state.login.isFleching = false
        state.login.error = true
    },

    regisStart: (state) =>{
      state.register.isFleching = true
    },
    regisSuccess: (state) =>{
      state.register.isFleching = true
      state.register.success = true
      state.register.error = false
    },
    regisFailed: (state,actions) =>{
      state.register.isFleching = false
      state.register.error = true
    },
  },
});

export const { loginStart, loginSuccess, loginFailed,regisStart, regisSuccess, regisFailed } = authSlice.actions;
export default authSlice.reducer;
