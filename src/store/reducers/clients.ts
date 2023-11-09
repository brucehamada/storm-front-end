import axiosServices from 'utils/axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { openSnackbar } from './snackbar';
import { ClientHistory, ClientsProfile } from 'types/clients-profile';
export const setClientsProfile = (profile: ClientsProfile) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/job/invite', {
      profile
    });
    if (response.status === 200) {
      setProfile(response.data[0].result);
      dispatch(
        openSnackbar({
          open: true,
          message: 'Set Profile Successfully',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: 'true'
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: 'Setting Profile Failed, Please try again',
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getClientHistory = (email: any) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/user/client-history', { email: email });
    if (response.status === 200) {
      setHistory(response.data[0].result);
    }
  } catch (error: any) {
    // dispatch(
    //   openSnackbar({
    //     open: true,
    //     message: 'Getting client history failed, Please try again',
    //     variant: 'alert',
    //     alert: {
    //       color: 'error'
    //     },
    //     close: true
    //   })
    // );
  }
};
interface ClientProfileStatus {
  profile: ClientsProfile | null;
  clientHistory: ClientHistory | null;
}
const initialState: ClientProfileStatus = {
  profile: null,
  clientHistory: null
};
export const clientProfileSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ClientsProfile | any>) => {
      state.profile = action.payload;
    },
    setHistory: (state, action: PayloadAction<ClientHistory | any>) => {
      state.clientHistory = action.payload;
    }
  }
});

export const createClientProfile = (client: ClientsProfile) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/user/client', {
      birthday: client.birthday,
      avatar: client.avatar,
      country: client.country,
      languages: client.languages,
      socialMedia: client.socialMedia,
      state: client.state,
      city: client.city,
      address1: client.address1,
      address2: client.address2,
      designation: client.designation,
      department: client.department,
      gender: client.gender,
      nationality: client.nationality
    });
    if (response.status === 200) {
      setProfile(response.data[0].result);
      dispatch(
        openSnackbar({
          open: true,
          message: 'Profile updated successfully.',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: true
        })
      );
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Network Error, Please try again.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch (error: any) {
    dispatch(
      openSnackbar({
        open: true,
        message: error[0].message,
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};
export const { setProfile, setHistory } = clientProfileSlice.actions;
export const gettedClientProfile = (state: RootState) => state.clients;

export default clientProfileSlice.reducer;
