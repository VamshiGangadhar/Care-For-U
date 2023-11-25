import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const initialState = {
  userRole: "role",
  userToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
  },
});

const persistConfig = {
  key: "user",
  storage,
  stateReconciler: autoMergeLevel2, 
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const { setUserRole, setUserToken } = userSlice.actions;
export const selectUserRole = (state) => state.user.userRole;
export const selectUserToken = (state) => state.user.userToken;

export default persistedReducer;
