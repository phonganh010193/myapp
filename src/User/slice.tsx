import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchError, fetchStart, fetchSuccess } from '../AppRedux/commonSlice';
import UserApi from './api'
import UserModel from './model';

// First, create the thunk
export const fetchUser = createAsyncThunk(
  'users/fetchByIdStatus',
  async (data: any, thunkAPI) => {
    try {
        await thunkAPI.dispatch(fetchStart());
        const response = await UserApi.getUser();
        await thunkAPI.dispatch(fetchSuccess());
        return response.data;
      } catch (error) {
        if (error instanceof Error) {
          await thunkAPI.dispatch(fetchError(error.message));
        }
        return thunkAPI.rejectWithValue(error);
      }
  }
)
export const fetchDetailUser = createAsyncThunk(
    'usersdetail/fetchByIdStatus',
    async (id: number, thunkAPI) => {
      try {
          await thunkAPI.dispatch(fetchStart());
          const response = await UserApi.getUserDetail(id);
          console.log('detail user', response);
          await thunkAPI.dispatch(fetchSuccess());
          return response.data;
        } catch (error) {
          if (error instanceof Error) {
            await thunkAPI.dispatch(fetchError(error.message));
          }
          return thunkAPI.rejectWithValue(error);
        }
    }
  )

interface UsersState {
  post: Array<UserModel>
  loading: boolean
  userDetail: any
}

const initialState = {
  post: [],
  loading: false,
  userDetail:null
} as UsersState

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    
    builder
    .addCase(fetchUser.pending, (state, action) => {
      
      state.loading = true
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
        state.post = action.payload.data
        state.loading = false
    })
    .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false
    })
  },
})


export default usersSlice.reducer