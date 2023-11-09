import React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';

import useTheme from '@mui/system/useTheme';
// third party
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

// project import
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

// ============================|| JWT - LOGIN ||============================ //

const AuthLogin = () => {
  const { login } = useAuth();
  const scriptedRef = useScriptRef();
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };
  const [userMode, setUserMode] = useState('customer');
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null,
          hasRememebered: false
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await login(userMode, values.email, values.password, values.hasRememebered);
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err: any) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => {
          return (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack spacing={3}>
                    <ToggleButtonGroup
                      value={userMode}
                      exclusive
                      defaultValue={'customer'}
                      sx={{ marginTop: '15vh', paddingBottom: '5vh' }}
                    >
                      <ToggleButton
                        value="customer"
                        defaultChecked
                        style={{
                          width: '50%',
                          height: '50px',
                          backgroundColor: userMode === 'customer' ? theme.palette.primary.lighter : theme.palette.secondary.lighter,
                          borderRadius: '5px 0 0 5px',
                          textTransform: 'none',
                          border: 'none'
                        }}
                        onClick={(event: any) => setUserMode(event?.target.value)}
                      >
                        <Typography variant="h3" style={{ pointerEvents: 'none', color: userMode === 'customer' ? '#130c96' : '#b1b2ba' }}>
                          For Customers
                        </Typography>
                      </ToggleButton>
                      <ToggleButton
                        value="expert"
                        style={{
                          width: '50%',
                          height: '50px',
                          backgroundColor: userMode === 'expert' ? theme.palette.primary.lighter : theme.palette.secondary.lighter,
                          borderRadius: '0 5px 5px 0',
                          textTransform: 'none',
                          border: 'none'
                        }}
                        onClick={(event: any) => setUserMode(event?.target.value)}
                      >
                        <Typography
                          variant="h3"
                          style={{
                            pointerEvents: 'none',
                            color: userMode === 'expert' ? theme.palette.primary.darker : theme.palette.secondary.main
                          }}
                        >
                          For Experts
                        </Typography>
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <Typography variant="h3">Sign In</Typography>
                    <InputLabel htmlFor="email-login">Email</InputLabel>
                    <OutlinedInput
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
                      placeholder="Enter email address"
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="standard-weight-helper-text-email-login">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="password-login">Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                      id="-password-login"
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      style={{
                        backgroundColor: theme.palette.secondary.lighter,
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 0 5px rgba(0,0,0,0.2)'
                      }}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
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
                      <FormHelperText error id="standard-weight-helper-text-password-login">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>

                <Grid item xs={12} sx={{ mt: -1 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <label>
                      <Field type="checkbox" name="hasRememebered" /> Remember me
                    </label>

                    <Link variant="h6" component={RouterLink} to="/forgot-password" color={theme.palette.primary.darker}>
                      Forgot Password?
                    </Link>
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
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      style={{ color: 'white', backgroundColor: theme.palette.primary.darker }}
                    >
                      Sign In
                    </Button>
                  </AnimateButton>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction={'row'} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} spacing={1}>
                    <Typography variant="h6">Don't have an account?</Typography>
                    <Typography variant="h6" component={RouterLink} to="/signup" color="#130c96" style={{ textDecoration: 'none' }}>
                      Sign Up
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default AuthLogin;
