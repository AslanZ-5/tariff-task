import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { tariffSlice } from "./features/tariff/tariffSlice";
// ...
const store = configureStore({
  reducer: {
    tariff: tariffSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
