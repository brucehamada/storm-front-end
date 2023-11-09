import { useState, SyntheticEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Link,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import { useTheme } from '@mui/system';
// third party
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
// project import
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import useAuth from 'hooks/useAuth';
import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| JWT - REGISTER ||============================ //

const AuthRegister = () => {
  const { register } = useAuth();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [type, setType] = useState('customer');
  const handleMouseDownPassword = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
          submit: null,
          hasAgreed: false
        }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().max(255).required('Please enter the Full Name'),
          email: Yup.string().email('Please enter a valid Work Email').max(255).required('Please enter the Work Email'),
          password: Yup.string()
            .max(14, 'Password length cannot be more than 14 characters')
            .min(8, 'Password length cannot be less than 8 characters')
            .matches(
              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
              'Please enter a valid Password (Allowed Special Characters are $#@!%^)'
            )
            .required('Please enter the Password'),
          confirmPassword: Yup.string()
            .required('Please enter Confirm Password')
            .test(
              'confirmPassword',
              'Confirm Password must match with Password',
              (confirmPassword, yup) => yup.parent.password === confirmPassword
            )
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (values.hasAgreed === false) {
              dispatch(
                openSnackbar({
                  open: true,
                  message: 'Please Agree to the Terms of Use and Privacy Policy by selecting the Checkbox',
                  variant: 'alert',
                  alert: {
                    color: 'warning'
                  },
                  close: false
                })
              );
            } else {
              register(type, values.email, values.password, values.fullName);
            }
          } catch (err: any) {
            console.error(err);
            dispatch(
              openSnackbar({
                open: true,
                message: err.message,
                variant: 'alert',
                alert: {
                  color: 'error'
                },
                close: false
              })
            );
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={3}>
                  <ToggleButtonGroup value={type} exclusive defaultValue={'customer'} sx={{ marginTop: '15vh', paddingBottom: '3vh' }}>
                    <ToggleButton
                      value="customer"
                      defaultChecked
                      style={{
                        width: '50%',
                        height: '50px',
                        backgroundColor: type === 'customer' ? theme.palette.primary.lighter : theme.palette.secondary.lighter,
                        borderRadius: '5px 0 0 5px',
                        textTransform: 'none',
                        border: 'none'
                      }}
                      onClick={(event: any) => setType(event?.target.value)}
                    >
                      <Typography
                        variant="h3"
                        style={{
                          pointerEvents: 'none',
                          color: type === 'customer' ? theme.palette.primary.darker : theme.palette.secondary.main
                        }}
                      >
                        For Customers
                      </Typography>
                    </ToggleButton>
                    <ToggleButton
                      value="expert"
                      style={{
                        width: '50%',
                        height: '50px',
                        backgroundColor: type === 'expert' ? theme.palette.primary.lighter : theme.palette.secondary.lighter,
                        borderRadius: '0 5px 5px 0',
                        textTransform: 'none',
                        border: 'none'
                      }}
                      onClick={(event: any) => setType(event?.target.value)}
                    >
                      <Typography
                        variant="h3"
                        style={{
                          pointerEvents: 'none',
                          color: type === 'expert' ? theme.palette.primary.darker : theme.palette.secondary.main
                        }}
                      >
                        For Experts
                      </Typography>
                    </ToggleButton>
                  </ToggleButtonGroup>
                  <Typography variant="h3">Sign Up</Typography>
                  <Typography color={'secondary'}>Please enter the following details</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="fullName-signup">Full Name</InputLabel>
                  <OutlinedInput
                    id="fullName-login"
                    type="fullName"
                    value={values.fullName}
                    name="fullName"
                    style={{
                      backgroundColor: theme.palette.secondary.lighter,
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                    }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.fullName && errors.fullName)}
                  />
                  {touched.fullName && errors.fullName && (
                    <FormHelperText error id="helper-text-fullName-signup">
                      {errors.fullName}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Work Email</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    style={{
                      backgroundColor: theme.palette.secondary.lighter,
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                    }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password (8 or more characters)</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
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
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
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
              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <label style={{ display: 'inline-flex' }}>
                    <Field type="checkbox" name="hasAgreed" /> Yes, I agree to &nbsp;
                    <Link variant="body1" component={RouterLink} to="#" color={theme.palette.primary.darker}>
                      Terms of Service
                    </Link>
                    &nbsp; and&nbsp;
                    <Link component={RouterLink} variant="body1" to="#" color={theme.palette.primary.darker}>
                      Privacy Policy
                    </Link>
                  </label>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <Stack spacing={3}>
                  <Typography variant="body1" style={{ display: 'flex ', justifyContent: 'center', fontSize: '14px' }}>
                    Alreay have an account? &nbsp;
                    <Link
                      variant="subtitle1"
                      component={RouterLink}
                      to="/signin"
                      style={{ color: theme.palette.primary.darker, fontSize: '14px' }}
                    >
                      Sign in from here
                    </Link>
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{ color: 'white', backgroundColor: theme.palette.primary.darker }}
                  >
                    Create Account
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;
