import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { login, UserCredentials } from '@/services/authAPI';

interface UserData {
  username: string;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export interface UserState {
  user: UserData;
  token: string;
  refresh_token: string;
}

const initialState: UserState = {
  user: { username: '', isAdmin: false, isAuthenticated: false },
  token: '',
  refresh_token: ''
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials: UserCredentials) => {
    const data = await login(userCredentials);
    data?.token && Cookies.set('access_token', data.token, { secure: true, sameSite: 'Strict' });
    data?.refresh_token && Cookies.set('refresh_token', data.refresh_token, { secure: true, sameSite: 'Strict' });
    return data;
  }
);

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.user = { username: '', isAuthenticated: false, isAdmin: false };
        state.token = '';
        state.refresh_token = '';
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<UserState | undefined>) => {
        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.refresh_token = action.payload.refresh_token;
        }
      });
  },
});
// export const { loginUser} = AuthSlice.actions;

export default AuthSlice.reducer;
