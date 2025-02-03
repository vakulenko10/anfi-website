import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { getProfile, login, UserCredentials } from '@/services/authAPI';

interface UserData {
  username: string;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export interface UserState {
  user: UserData;
  token: string;
  refresh_token: string | undefined;
}

const initialState: UserState = {
  user: { username: '', isAdmin: false, isAuthenticated: false },
  token: '',
  refresh_token: ''
};

// Login async thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials: UserCredentials) => {
    const data = await login(userCredentials);
    data?.token && Cookies.set('access_token', data.token, { secure: true, sameSite: 'Strict' });
    data?.refresh_token && Cookies.set('refresh_token', data.refresh_token, { secure: true, sameSite: 'Strict' });
    return data;
  }
);

// Auto-login async thunk
export const autoLoginUser = createAsyncThunk<UserState | undefined, string>(
  'auth/autoLoginUser',
  async (token: string) => {
    let stateEmpty: UserState = { user: { username: '', isAdmin: false, isAuthenticated: false }, token: '', refresh_token: '' };
    console.log('token inside autoLogin async thunk:', token)
    if (token) {
      try {
        const profile = await getProfile(token);
        console.log('received profile:', profile)
        const profileData: UserData = { username: profile.username, isAdmin: profile.role === 'admin', isAuthenticated: true }
        const refresh_token = Cookies.get('refresh_token') || ''; // Ensure it's a string
        const state = { user: profileData, token, refresh_token };
        console.log('state sending to the case:', state)
        return state;
      } catch (error) {
        console.error('Auto login failed:', error);
        return stateEmpty;  // Return undefined if profile fetch fails
      }
    }
    return stateEmpty;  // Return undefined if no token is available
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
      })
      .addCase(autoLoginUser.fulfilled, (state, action: PayloadAction<UserState | undefined>) => {
        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.refresh_token = action.payload.refresh_token;
        } else {
          // If payload is undefined, do nothing or reset state
          state.user = { username: '', isAuthenticated: false, isAdmin: false };
          state.token = '';
          state.refresh_token = '';
        }
      });
  },
});

export default AuthSlice.reducer;
