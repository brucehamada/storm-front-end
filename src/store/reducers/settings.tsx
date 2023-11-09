import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Account, ExpertSetting, Organization } from 'types/user-profile';
import axiosServices from 'utils/axios';
import { RootState } from 'store';
import { openSnackbar } from './snackbar';

export const setAccountSettings = (account: Account) => async (dispatch: any) => {
  try {
    const response = await axiosServices.put('/api/v1/user/update-account', {
      firstName: account.firstName,
      lastName: account.lastName,
      password: account.password,
      phoneNumber: account.phoneNumber
    });
    if (response.status === 200) {
      dispatch(setSetting(response.data));
      dispatch(
        openSnackbar({
          open: true,
          message: 'Account information changed successfully',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: 'true'
        })
      );
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please try again.',
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

export const setOrganizationSettings = (organization: Organization) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/user/client-organization', { organization });
    if (response.status === 200) {
      dispatch(setOrganizationInfo(response.data[0].organizationSettings));
      dispatch(
        openSnackbar({
          open: true,
          message: 'Organization Details saved successfully.',
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
          message: 'Please try again.',
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

export const setExpertSetting = (service: boolean[], hourlyRate: number) => async (dispatch: any) => {
  try {
    const response = await axiosServices.put('/api/v1/user/expert', { service: service, hourlyRate: hourlyRate });
    if (response.status === 200) {
      setExpertSettings(response.data[0].result);
      dispatch(
        openSnackbar({
          open: true,
          message: 'Update expert settings successfully.',
          variant: 'alert',
          alert: {
            color: 'success'
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
interface SettingState {
  accountSetting: Account | null;
  organizationSetting: Organization | null;
  expertSettings: ExpertSetting | null;
}

const initialState: SettingState = {
  accountSetting: null,
  organizationSetting: null,
  expertSettings: null
};

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<Account | any>) => {
      state.accountSetting = action.payload;
    },
    setOrganizationInfo: (state, action: PayloadAction<Organization | null>) => {
      state.organizationSetting = action.payload;
    },
    setExpertSettings: (state, action: PayloadAction<string[]> | any) => {
      state.expertSettings = action.payload;
    }
  }
});
export const { setSetting, setOrganizationInfo, setExpertSettings } = settingSlice.actions;
export const selectedSettings = (state: RootState) => state.settings;
export default settingSlice.reducer;
