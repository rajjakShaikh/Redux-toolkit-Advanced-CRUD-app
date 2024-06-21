import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatedata = state.find((user) => user.id == id);
      if (updatedata) {
        updatedata.id = id;
        updatedata.name = name;
        updatedata.email = email;
      }
      console.log(action);
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const index = state.find((user) => user.id == id);
      if (index) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});
export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
