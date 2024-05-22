import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

// 创建异步的API调用thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
  }
);

// 创建slice来管理状态
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});
 
export default userSlice.reducer