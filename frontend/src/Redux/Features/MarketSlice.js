import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BACKEND_URL } from "../../Constants/BackendUrl";

const initialState = {
  marketData: [],
  isLoading: false,
  errMsg: "",
  succMessage: "",
};

export const GetMarketData = createAsyncThunk(
  "market/getMarketData",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/waste-product/get-products`
      );

      return response;
    } catch (error) {
      console.log(error);
      let errMsg;
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errMsg = error.response.data.message;
      } else {
        errMsg = "An error occurred while fetching products";
      }

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const MarketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(GetMarketData.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(GetMarketData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.marketData = action.payload.data?.products;
        console.log(action.payload);
      })

      .addCase(GetMarketData.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
        console.log(action.payload);
      });
  },
});

export const {} = MarketSlice.actions;

export default MarketSlice.reducer;
