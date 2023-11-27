import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
      data: {
        fullname: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        birthdate: "",
      },
    },
    reducers: {
      updateUser: (state, action) => {
        state.data = action.payload;
      },
    },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
