import axiosServices from 'utils/axios';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { openSnackbar } from './snackbar';
import { Invitation } from 'types/invitation';
export const sendInvitation = (jobId: string, invitationType: string, message: string, expertEmail: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.put('/api/v1/job/invite', {
      _id: jobId,
      type: invitationType,
      message: message,
      expertEmail: expertEmail
    });
    if (response.status === 200) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Send Invitation Successfully',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: 'true'
        })
      );
    }
  } catch (error: any) {
    if (error[0]?.code === 409) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'You have already sent invitation.',
          variant: 'alert',
          alert: {
            color: 'warning'
          },
          close: true
        })
      );
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Sending Invitaion Failed, Please try again',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  }
};
export const getInvitation = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/expert/invitation');
    if (response.status === 200) {
      setInvitation(response.data[0].invitation);
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'There is no Invitaion.',
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

interface InvitationState {
  invitations: Invitation[];
}
const initialState: InvitationState = {
  invitations: []
};
export const invitationsSlice = createSlice({
  name: 'invitation',
  initialState,
  reducers: {
    setInvitation: (state, action: PayloadAction<Invitation[] | any>) => {
      state.invitations = action.payload;
    }
  }
});
export const { setInvitation } = invitationsSlice.actions;
export const gettedInvitations = (state: RootState) => state.invitation;

export default invitationsSlice.reducer;
