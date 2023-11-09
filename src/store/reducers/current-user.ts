import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// project import
import axios from 'utils/axios';

// types
import { CurrentUser } from 'types/current-user';

// initial state
const initialState: CurrentUser = {
  email: '',
  fullName: '',
  emailVerifyStatus: '',
  type: '',
  expert: {
    email: '',
    avatar: '',
    titleName: '',
    phoneNumber: '',
    birthday: null,
    country: '',
    address: '',
    zipCode: '',
    weeklyCommitment: 0,
    projectPreference: '',
    hourlyRate: 0,
    profileCompleteness: 0,
    verifiedStatus: false,
    tools: [],
    skills: [],
    education: null,
    experience: null,
    socialMedia: null,
    languages: null,
    summary: '',
    rating: 0,
    totalEarning: 0,
    completedJobs: 0
  },
  client: {
    email: '',
    avatar: '',
    gender: '',
    nationality: '',
    designation: '',
    department: '',
    country: '',
    state: '',
    city: '',
    address1: '',
    address2: '',
    birthday: null,
    languages: null,
    profileCompleteness: 0,
    socialMedia: null,
    organization: null
  }
};

// ==============================|| SLICE - MENU ||============================== //

export const fetchCurrentUser = createAsyncThunk('', async () => {
  const response = await axios.get('/api/v1/user/current');
  const res = response.data[0];
  if (res['code'] === 200) return res['currentUser'];
});

const currentUser = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.fullName = action.payload.fullName;
      state.emailVerifyStatus = action.payload.emailVerifyStatus;
      state.type = action.payload.type;
      state.expert = action.payload.expert;
      state.client = action.payload.client;
    });
  }
});

export default currentUser.reducer;
