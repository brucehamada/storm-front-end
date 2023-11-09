import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { JobInfo, JobDetail, JobInExpert, Milestone, Proposal, JobInDetail } from 'types/jobsinfo';
import axiosServices from 'utils/axios';
import { RootState } from 'store';
import { openSnackbar } from './snackbar';

export const getAllJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/job/active');
    if (response.status === 200) {
      dispatch(setJobs(response.data));
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

export const getActiveJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get(`/api/v1/job/active`);
    if (response.status === 200) {
      dispatch(setActiveJobs(response.data[0].activeJobs));
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

export const getHistoryJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get(`/api/v1/job/history`);
    if (response.status === 200) {
      dispatch(setHistoryJobs(response.data[0].activeJobs));
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

export const createJob = (job: JobDetail) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/job', job);
    if (response.status === 201) {
      dispatch(addJob(response.data[0].newResult));
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

export const getJob = (taskid: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.get(`api/task/${taskid}`);
    if (response.status === 200) {
      return response.data;
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

export const findJob = (keyword: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`api/v1/job/search`, { query: keyword });
    if (response.status === 200) {
      dispatch(setSearchResult(response.data[0].result));
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

export const deleteJob = (taskid: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.delete(`/api/task/${taskid}`);
    if (response.status === 200) {
      dispatch(hideJob(taskid));
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
export const updateJob = (job: JobInfo) => async (dispatch: any) => {
  try {
    const response = await axiosServices.put(`/api/task/${job._id}`, job);
    if (response.status === 200) {
      dispatch(setJobs(response.data));
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
export const loadAreasOfExpertise = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('api/v1/data/expertise');
    if (response.status === 200) {
      dispatch(setAreasOfExpertise(response.data.data));
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

export const filterJobs = (budget: string, skills: string[], experience: string, language: string[]) => {};

export const loadToolsOfExpertise = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/data/tool');
    if (response.status === 200) {
      dispatch(setToolsOfExpertise(response.data.data));
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

export const loadIndustries = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/data/industry');
    if (response.status === 200) {
      dispatch(setIndustries(response.data.data));
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

export const loadBudgetRange = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/data/budgetRange');
    if (response.status === 200) {
      dispatch(setBudgetRange(response.data.data));
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

export const loadDuration = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/data/duration');
    if (response.status === 200) {
      dispatch(setDuration(response.data.data));
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

export const loadWeeklyCommitment = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/data/weeklyCommitment');
    if (response.status === 200) {
      dispatch(setWeeklyCommitment(response.data.data));
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

export const getExpertActiveJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/job/expert/active');
    if (response.status === 200) {
      dispatch(setExpertActiveJobs(response.data[0].activeJobs));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please check your network status.',
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
export const getExpertCompletedJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/job/expert/completed');
    if (response.status === 200) {
      dispatch(setExpertCompletedJobs(response.data[0].activeJobs));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please check your network status.',
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
export const getExpertSearchedJobs = (keyword: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post('/api/v1/job/search', { query: keyword });
    if (response.status === 200) {
      dispatch(setSearchResult(response.data[0].result));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please check your network status.',
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

export const getExpertCanceledJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/job/expert/cancelled');
    if (response.status === 200) {
      dispatch(setExpertCanceledJobs(response.data[0].activeJobs));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please check your network status.',
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
export const getExpertDisputedJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/job/expert/disputed');
    if (response.status === 200) {
      dispatch(setExpertDisputedJobs(response.data[0].activeJobs));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please check your network status.',
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

export const getExpertSavedJobs = () => async (dispatch: any) => {
  try {
    const response = await axiosServices.get('/api/v1/job/expert/saved');
    if (response.status === 200) {
      dispatch(setSavedJobs(response.data[0].activeJobs));
    } else {
      dispatch(
        openSnackbar({
          open: true,
          message: 'There is no saved jobs.',
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

export const getJobInDetails = (_id: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.post(`/api/v1/job/overview`, { _id });
    if (response.status === 200) {
      dispatch(setJobInDetails(response.data[0]));
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
        close: 'error'
      })
    );
  }
};

export const getMilestones = (id: string) => async (dispatch: any) => {
  try {
    const response = await axiosServices.get(`/api/v1/job/milestone/${id}`);
    if (response.status === 200) {
      dispatch(setMilestones(response.data[0].milestones[0].milestones));
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

export const sendProposal = (proposals: Proposal) => async (dispatch: any) => {
  try {
    const response = await axiosServices.put('/api/v1/job/proposal', {
      _id: proposals._id,
      milestone: proposals.milestone,
      type: proposals.type,
      coverLetter: proposals.coverLetter
    });
    if (response.status === 200) {
      dispatch(setProposals(response.data[0].result));
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

interface JobState {
  allJobs: JobDetail[];
  activeJobs: JobDetail[];
  historyJobs: JobDetail[];
  areasOfExpertise: string[];
  toolsOfExpertise: string[];
  industries: string[];
  budgetRange: string[];
  duration: string[];
  weeklyCommitment: string[];
  expertActiveJobs: JobInExpert[];
  expertCompletedJobs: JobInExpert[];
  expertCanceledJobs: JobInExpert[];
  expertDisputedJobs: JobInExpert[];
  expertSavedJobs: JobDetail[];
  expertSearchResults: JobDetail[];
  expertRecommendedJobs: JobDetail[];
  milestones: Milestone[];
  proposals: Proposal[];
  jobInDetail: JobInDetail | null;
}

const initialState: JobState = {
  allJobs: [],
  activeJobs: [],
  historyJobs: [],
  areasOfExpertise: [],
  toolsOfExpertise: [],
  industries: [],
  budgetRange: [],
  duration: [],
  weeklyCommitment: [],
  expertActiveJobs: [],
  expertCanceledJobs: [],
  expertCompletedJobs: [],
  expertDisputedJobs: [],
  expertSavedJobs: [],
  expertSearchResults: [],
  expertRecommendedJobs: [],
  milestones: [],
  proposals: [],
  jobInDetail: null
};

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<JobInfo[] | any>) => {
      state.allJobs = action.payload;
    },

    setActiveJobs: (state, action: PayloadAction<JobInfo[] | any>) => {
      state.activeJobs = action.payload;
    },
    setHistoryJobs: (state, action: PayloadAction<JobInfo[] | any>) => {
      state.historyJobs = action.payload;
    },
    addJob: (state, action: PayloadAction<JobDetail | any>) => {
      state.allJobs.push(action.payload);
    },
    hideJob: (state, action: PayloadAction<JobInfo[] | any>) => {
      state.allJobs.filter((item) => item._id !== action.payload);
    },
    setAreasOfExpertise: (state, action: PayloadAction<string[] | any>) => {
      state.areasOfExpertise = action.payload;
    },
    setToolsOfExpertise: (state, action: PayloadAction<string[] | any>) => {
      state.toolsOfExpertise = action.payload;
    },
    setIndustries: (state, action: PayloadAction<string[] | any>) => {
      state.industries = action.payload;
    },
    setBudgetRange: (state, action: PayloadAction<string[] | any>) => {
      state.budgetRange = action.payload;
    },
    setDuration: (state, action: PayloadAction<string[] | any>) => {
      state.duration = action.payload;
    },
    setWeeklyCommitment: (state, action: PayloadAction<string[] | any>) => {
      state.weeklyCommitment = action.payload;
    },
    setExpertActiveJobs: (state, action: PayloadAction<JobInExpert[] | any>) => {
      state.expertActiveJobs = action.payload;
    },
    setExpertCompletedJobs: (state, action: PayloadAction<JobInExpert[] | any>) => {
      state.expertCompletedJobs = action.payload;
    },
    setExpertCanceledJobs: (state, action: PayloadAction<JobInExpert[] | any>) => {
      state.expertCanceledJobs = action.payload;
    },
    setExpertDisputedJobs: (state, action: PayloadAction<JobInExpert[] | any>) => {
      state.expertDisputedJobs = action.payload;
    },
    setSavedJobs: (state, action: PayloadAction<JobDetail[] | any>) => {
      state.expertSavedJobs = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<JobDetail[] | any>) => {
      state.expertSearchResults = action.payload;
    },
    setExpertRecommendedJobs: (state, action: PayloadAction<JobDetail[] | any>) => {
      state.expertRecommendedJobs = action.payload;
    },
    setMilestones: (state, action: PayloadAction<Milestone[] | any>) => {
      state.milestones = action.payload;
    },
    setProposals: (state, action: PayloadAction<Proposal[] | any>) => {
      state.proposals = action.payload;
    },
    setJobInDetails: (state, action: PayloadAction<JobInDetail | any>) => {
      state.jobInDetail = action.payload;
    }
  }
});
export const {
  setJobs,
  setActiveJobs,
  setHistoryJobs,
  addJob,
  hideJob,
  setAreasOfExpertise,
  setBudgetRange,
  setDuration,
  setToolsOfExpertise,
  setIndustries,
  setWeeklyCommitment,
  setExpertActiveJobs,
  setExpertCompletedJobs,
  setExpertCanceledJobs,
  setExpertDisputedJobs,
  setSavedJobs,
  setSearchResult,
  setExpertRecommendedJobs,
  setMilestones,
  setProposals,
  setJobInDetails
} = jobSlice.actions;
export const selectedJobs = (state: RootState) => state.jobs;
export default jobSlice.reducer;
