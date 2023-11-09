import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Expert, HiredExpertDetail, HriedExpertDetail } from 'types/expert';
import axiosServices from 'utils/axios';
import { RootState } from 'store';
import { openSnackbar } from './snackbar';
import { ExpertsProfile } from 'types/experts-profile';
import { Milestone } from 'types/jobsinfo';

export const createExpert = (data: ExpertsProfile) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/user/expert', data);
    console.log(data);
    if (response.status === 200) {
      dispatch(addExpert(response.data));
    } else {
      dispatch(
        openSnackbar({
          opne: true,
          message: 'Network Error.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch {
    dispatch(
      openSnackbar({
        opne: true,
        message: 'Network Error.',
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getCurrentUser = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/user/current');
    if (response.status === 200) {
      dispatch(setCurrentUser(response.data));
    } else {
      dispatch(
        openSnackbar({
          opne: true,
          message: 'Network Error.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  } catch {
    dispatch(
      openSnackbar({
        opne: true,
        message: 'Network Error.',
        variant: 'alert',
        alert: {
          color: 'error'
        },
        close: true
      })
    );
  }
};

export const getAllExperts = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/experts/all');
    if (response.status === 200) {
      dispatch(setExperts(response.data));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
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

export const getRecommendedExperts = (id: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`/api/v1/user/recommended-expert`, { _id: id });
    if (response.status === 200) {
      dispatch(setRecommededExperts(response.data[0].expert));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
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

export const getHiredExperts = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`/api/v1/user/hired-expert`);
    if (response.status === 200) {
      dispatch(setHiredExperts(response.data[0].result));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
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

export const getExpert = (expertEmail: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`api/v1/user/detail`, { email: expertEmail[0] });
    if (response.status === 200) {
      dispatch(getExpertDetail(response.data[0].userDetail));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
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

export const updateExpert = (expert: ExpertsProfile) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`/api/v1/user/expert`, expert);
    console.log(expert);
    if (response.status === 200) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Profile updated successfully.',
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
          message: 'Connection error, Please reload page.',
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
export const loadYearsOfExperience = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/data/yearsOfExperience');
    if (response.status === 200) {
      dispatch(setYearsOfExperience(response.data));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Connection error, Please reload page.',
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

export const hireExpert =
  (_id: string, selectedExpert: string, additionalInfo: string, milestones: Milestone[]) => async (dispatch: any) => {
    try {
      const response = await axiosServices.put('/api/v1/job/hire', {
        _id: _id,
        selectedExpert: selectedExpert,
        additionalInfo: additionalInfo,
        milestones: milestones
      });
      if (response.status === 200 || response.status === 201) {
        addHiredExperts(response.data[0]);
        dispatch(
          openSnackbar({
            open: true,
            message: 'Hire expert successfully!',
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
            color: 'success'
          },
          close: true
        })
      );
    }
  };

export const findExperts =
  (keyword: string, budget: string, skills: string[], experience: string, language: string[]) => async (dispatch: any) => {
    try {
      const response = await axiosServices.post(`api/v1/user/search-expert`, { keyword: keyword, skills: skills, languages: language });
      if (response.status === 200) {
        dispatch(setExperts(response.data[0].result));
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Connection error, Please reload page.',
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

interface ExpertState {
  allExperts: Expert[];
  hiredExperts: HriedExpertDetail[];
  recommendedExperts: Expert[];
  yearsOfExperience: string[];
  currentUser: Expert[];
  hiredExpertDetail: HiredExpertDetail | null;
}

const initialState: ExpertState = {
  allExperts: [],
  hiredExperts: [],
  recommendedExperts: [],
  yearsOfExperience: [],
  currentUser: [],
  hiredExpertDetail: null
};

export const expertSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setExperts: (state, action: PayloadAction<Expert[] | any>) => {
      state.allExperts = action.payload;
    },

    setRecommededExperts: (state, action: PayloadAction<Expert[] | any>) => {
      state.recommendedExperts = action.payload;
    },
    setHiredExperts: (state, action: PayloadAction<HriedExpertDetail[] | any>) => {
      state.hiredExperts = action.payload;
    },
    setYearsOfExperience: (state, action: PayloadAction<string[] | any>) => {
      state.yearsOfExperience = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<Expert | any>) => {
      state.currentUser = action.payload;
    },
    addExpert: (state, action: PayloadAction<Expert | any>) => {
      state.allExperts.push(action.payload);
    },
    addHiredExperts: (state, action: PayloadAction<Expert[] | any>) => {
      state.hiredExperts.push(action.payload);
    },
    getExpertDetail: (state, action: PayloadAction<HiredExpertDetail[] | any>) => {
      state.hiredExpertDetail = action.payload;
    }
  }
});
export const {
  setExperts,
  setRecommededExperts,
  setHiredExperts,
  setYearsOfExperience,
  addExpert,
  setCurrentUser,
  addHiredExperts,
  getExpertDetail
} = expertSlice.actions;
export const selectedJobs = (state: RootState) => state.jobs;
export default expertSlice.reducer;
