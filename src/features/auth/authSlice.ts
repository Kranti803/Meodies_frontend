import { type IUser } from "../../interfaces/authInterfaces";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user: null,
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
  },
});

export const { setUser,removeUser } = authSlice.actions;
export default authSlice.reducer;
