import { type IUser } from "../../interfaces/authInterfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  user: IUser | null;
  tempUserEmail: string;
}

const initialState: UserState = {
  user: null,
  tempUserEmail: '',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },

    removeUser: (state) => {
      state.user = null;
    },
    setTempUserEmail: (state, action) => {
      state.tempUserEmail = action.payload;
    },
    removeTempUserEmail: (state) => {
      state.tempUserEmail = '';
    },
  },
});

export const { setUser, removeUser,setTempUserEmail,removeTempUserEmail } = authSlice.actions;
export default authSlice.reducer;
