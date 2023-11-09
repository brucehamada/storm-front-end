// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { Link as RouterLink } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import useScriptRef from 'hooks/useScriptRef';

// ============================|| FIREBASE - FORGOT PASSWORD ||============================ //

const AuthForgotPassword = () => {
  const scriptedRef = useScriptRef();
  const { sendOtpRequest } = useAuth();

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await sendOtpRequest(values.email).then(
              () => {
                setStatus({ success: true });
                setSubmitting(false);

                // WARNING: do not set any formik state here as formik might be already destroyed here. You may get following error by doing so.
                // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.
                // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
                // github issue: https://github.com/formium/formik/issues/2430
              },
              (err: any) => {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            );
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
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-forgot">Email</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-forgot"
                    type="email"
                    value={values.email}
                    name="email"
                    style={{ backgroundColor: '#f0f0f2', borderRadius: '8px', border: 'none', boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-forgot">
                      {errors.email}
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
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    style={{ color: 'white', backgroundColor: '#0b257a', borderRadius: '10px' }}
                  >
                    Reset Password
                  </Button>
                </AnimateButton>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  spacing={3}
                  direction="row"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                >
                  <Typography
                    component={RouterLink}
                    variant="h5"
                    to="/signin"
                    style={{ display: 'inline-flex', textDecoration: 'none', color: '#0b257a' }}
                  >
                    <ArrowBackIcon /> Back to Sign In
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthForgotPassword;
