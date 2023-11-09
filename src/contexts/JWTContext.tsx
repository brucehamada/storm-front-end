import React, { createContext, useEffect } from 'react';

// third-party

// reducer - state management
import { LOGIN, LOGOUT } from 'store/reducers/actions';

// project import
import Loader from 'components/Loader';
import axios from 'utils/axios';
import { JWTContextType } from 'types/auth';
import { openSnackbar } from 'store/reducers/snackbar';
import { useDispatch, useSelector } from 'store';
import { useNavigate } from 'react-router-dom';

const setSession = (serviceToken?: string | null) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    axios.defaults.headers.common = { Authorization: `bearer ${serviceToken}` };
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //

const JWTContext = createContext<JWTContextType | null>(null);
export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken) {
          setSession(serviceToken);
          const response = await axios.get('/api/v1/user/current');
          const user = response.data[0].currentUser;
          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              user
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, [, navigate]);
  const loadUser = async () => {
    const response = await axios.get('/api/user/current');
    const { user } = response.data[0].currentUser;
    dispatch({
      type: LOGIN,
      payload: {
        isLoggedIn: true,
        user
      }
    });
  };
  const login = async (type: string, email: string, password: string) => {
    try {
      const response = await axios.post('/api/v1/user/login', { type, email, password });
      const serviceToken = response.data[0].token;
      const user = response.data[0].info;

      if (user.type === 'expert') {
        navigate('/expert/home');
      } else if (user.type === 'customer') {
        navigate('/client/home');
      }
      setSession(serviceToken);
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: true,
          user
        }
      });
    } catch (error: any) {
      if (error[0]?.code == 403) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'You are not verified. Please verify first.',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: true
          })
        );
        setTimeout(() => navigate('email-verification', { state: { email: email } }), 1500);
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: error[0]?.message,
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

  const register = async (type: string, email: string, password: string, fullName: string) => {
    try {
      const response = await axios.post('/api/v1/user/register', { type, email, password, fullName });
      if (response.status === 201) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Send verification message. Please check your email',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: true
          })
        );

        setTimeout(() => navigate('/email-verification', { state: { email: email } }), 1000);
      }
    } catch (error: any) {
      dispatch(
        openSnackbar({
          open: true,
          message: error[0]?.message,
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/v1/user/reset-password', { email, password });
      if (response.status === 200) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Successfully reset password. Please sign in again',
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
            message: 'You face some error while resetting password',
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
          message: error[0]?.message,
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  };
  const sendOtpRequest = async (email: string) => {
    try {
      const response = await axios.post('/api/v1/user/otp-verify-send', { email });
      if (response.status === 200) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Sent verification code, Please check your email.',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: true
          })
        );
        setTimeout(() => {
          navigate('/code-verification', { state: { email: email } });
        }, 1500);
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Resend',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: true
          })
        );
      }
    } catch (error: any) {
      if (error[0]?.code === 403) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Please verify your email first',
            variant: 'alert',
            alert: {
              color: 'error'
            },
            close: true
          })
        );
        setTimeout(() => navigate('email-verification'), 1500);
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: error[0]?.message,
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
  const sendOtpCode = async (email: string, otp: string) => {
    try {
      const response = await axios.post('/api/v1/user/verify-otp', { email, otp });
      if (response.status === 200) {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Successfully verified. Please reset your password.',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: true
          })
        );
        setTimeout(() => {
          navigate('/reset-password', { state: { email: email } });
        }, 1500);
      } else {
        dispatch(
          openSnackbar({
            open: true,
            message: 'Please enter correct OTP code',
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
          message: error[0]?.message,
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    }
  };
  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return (
    <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, sendOtpRequest, loadUser, updateProfile, sendOtpCode }}>
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
