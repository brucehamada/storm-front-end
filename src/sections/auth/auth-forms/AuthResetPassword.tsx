import { useEffect, useState, SyntheticEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// material-ui
import { Button, FormHelperText, Grid, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';
import useTheme from '@mui/system/useTheme';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import useAuth from 'hooks/useAuth';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| STATIC - RESET PASSWORD ||============================ //

const AuthResetPassword = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { resetPassword } = useAuth();
  const location = useLocation();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [completeness, setCompleteness] = useState(0);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  const calculatePasswordCompleteness = (password: string) => {
    let score = 0;

    // Check password length
    if (password.length > 8) {
      score += 1;
    }

    // Check for special character
    if (/[!@#$%^&*()\-_=+[\]{};:'"\\|<>,./?`~]/.test(password.toString())) {
      score += 1;
    }

    // Check for number
    if (/\d/.test(password as string)) {
      score += 1;
    }
    return score;
  };
  const handlePasswordChange = (password: string) => {
    const newPassword = password;
    const completenessScore = calculatePasswordCompleteness(newPassword);
    setCompleteness(completenessScore);
  };

  useEffect(() => {}, []);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#bcc7eb' : '#bcc7eb'
    }
  }));
  return (
    <Formik
      initialValues={{
        password: '',
        confirmPassword: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .max(14, 'Password length cannot be more than 14 characters')
          .required('Please enter the Password')
          .min(8, 'Password length cannot be less than 8 characters')
          .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
            'Please enter a valid Password (Allowed Special Characters are $#@!%^)'
          ),
        confirmPassword: Yup.string()
          .required('Please enter Confirm Password')
          .test(
            'Password match',
            'Confirm Password must match with Password',
            (confirmPassword, yup) => yup.parent.password === confirmPassword
          )
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        await resetPassword(location?.state.email, values.password).then(
          () => {
            navigate(isLoggedIn ? '/auth/signin' : '/signin');
          },
          (error: any) => {
            dispatch(
              openSnackbar({
                open: true,
                message: error.message,
                variant: 'alert',
                alert: {
                  color: 'error'
                },
                close: true
              })
            );
          }
        );
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="password-reset">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.password && errors.password)}
                  id="password-reset"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  name="password"
                  style={{
                    backgroundColor: theme.palette.secondary.lighter,
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                  }}
                  onBlur={handleBlur}
                  onChange={(e) => {
                    handleChange(e);
                    handlePasswordChange(e?.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        color="secondary"
                      >
                        {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                      </IconButton>
                    </InputAdornment>
                  }
                  placeholder="Enter password"
                />
                {touched.password && errors.password && (
                  <FormHelperText error id="helper-text-password-reset">
                    {errors.password}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <BorderLinearProgress
                variant="determinate"
                value={completeness === 1 || completeness === 2 || completeness === 3 ? 100 : 0}
              />
            </Grid>
            <Grid item xs={4}>
              <BorderLinearProgress variant="determinate" value={completeness === 2 || completeness === 3 ? 100 : 0} />
            </Grid>
            <Grid item xs={4}>
              <BorderLinearProgress variant="determinate" value={completeness === 3 ? 100 : 0} />
            </Grid>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="confirm-password-reset">Confirm Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                  id="confirm-password-reset"
                  type="password"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  style={{
                    backgroundColor: theme.palette.secondary.lighter,
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter confirm password"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <FormHelperText error id="helper-text-confirm-password-reset">
                    {errors.confirmPassword}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            <Grid item xs={12}>
              <AnimateButton>
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  style={{ color: 'white', backgroundColor: theme.palette.primary.darker, borderRadius: '10px' }}
                >
                  Reset Password
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default AuthResetPassword;
