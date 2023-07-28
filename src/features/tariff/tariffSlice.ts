import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

type InitialStateT = {
  minutes: number;
  internet: number;
  operator: string;
  sms: number;
  wiFi: "rent" | "buy";
  socialMedia: number[];
  monthlyPayment: number;
};
const initialState: InitialStateT = {
  minutes: 100,
  internet: 5,
  operator: "operator1",
  sms: 0,
  wiFi: "rent",
  socialMedia: [],
  monthlyPayment: 204,
};
type PayloadType = {
  name: string;
  value: number[] | number | string;
};
const tariffSlice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    setTariff: (state, { payload }: PayloadAction<PayloadType>) => {
      console.log("$$$$$$", payload);
      const newState = {
        ...state,
        [payload.name]: payload.value,
      };
      const { minutes, internet, sms, socialMedia, wiFi } = newState;
      const routerCoust = wiFi == "buy" ? 0 : 99;
      newState.monthlyPayment =
        routerCoust +
        minutes +
        internet +
        sms +
        socialMedia.reduce((a, b) => a + b, 0);
      return newState;
    },
  },
});

export { tariffSlice };
export const selectCount = (state: RootState) => state.tariff;
export const { setTariff } = tariffSlice.actions;
export default tariffSlice.reducer;
