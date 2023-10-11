import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../Constants/BackendUrl";
import axios from "axios";

const initialState = {
  BlogsData: [],
  isLoading: false,
  errMsg: "",
  succMessage: "",
};

export const GetBlogsData = createAsyncThunk(
  "blog/getBlogs",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/blog/get-blogs`);
      //   return thunkAPI.fulfillWithValue(response);
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
        errMsg = "An error occurred while fetching blogs";
      }

      return thunkAPI.rejectWithValue(errMsg);
    }
  }
);

const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(GetBlogsData.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(GetBlogsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.BlogsData = action.payload.data?.blogs;
      })

      .addCase(GetBlogsData.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.payload;
        console.log(action.payload);
      });
  },
});

export const {} = BlogSlice.actions;

export default BlogSlice.reducer;
