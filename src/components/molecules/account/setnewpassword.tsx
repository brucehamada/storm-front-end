import { Button, Grid, InputLabel, OutlinedInput, Stack, Link, Typography } from '@mui/material';
import AnimateButton from '../../@extended/AnimateButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import { useState } from 'react';

interface ResetPasswordProps {
  /**
   * Reset Password form
   */

  password: String;
  /**
   *Password
   */
  confirmPassword: String;
  /**
   *Password
   */

  resetPassword?: () => void;
  /**
   *Reset Password
   */
  signIn?: () => void;
  /**
   *Sign In
   */
}
export const SetNewPassword = ({ password = '', confirmPassword = '', ...props }: ResetPasswordProps) => {
  const [resetPassword, setResetPassword] = useState('');
  const [completeness, setCompleteness] = useState(0);
  const [confirmResetPassword, setConfirmResetPassword] = useState('');
  const [isEqual, setIsEqual] = useState<boolean>();
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setResetPassword(newPassword);

    const completenessScore = calculatePasswordCompleteness(newPassword);
    setCompleteness(completenessScore);
  };
  const checkConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    setConfirmResetPassword(confirmPassword);
    if (completeness == 3 && confirmPassword == resetPassword) {
      setIsEqual(true);
    } else {
      setIsEqual(false);
    }
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
    }
  }));

  return (
    <>
      <Box
        sx={{
          font: 'caption',
          width: '80%',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10%',
          marginTop: '15%'
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <h2 style={{ textAlign: 'left' }}>Set new password</h2>
              <Typography>Must be at least 8 characters</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type="password"
                value={resetPassword}
                defaultValue={password}
                placeholder="Enter Password"
                onChange={handlePasswordChange}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={completeness == 1 || completeness == 2 || completeness == 3 ? 100 : 0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={completeness == 2 || completeness == 3 ? 100 : 0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={completeness == 3 ? 100 : 0} />
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={3}>
              <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type="password"
                value={confirmResetPassword}
                defaultValue={confirmPassword}
                placeholder="Enter Confirm Password"
                onChange={checkConfirmPassword}
              />
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <AnimateButton scale={completeness == 3 && isEqual == true ? { hover: 1.03, tap: 0.985 } : { hover: 1.0, tap: 1.0 }}>
              <Button
                disableElevation
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                disabled={completeness == 3 && isEqual == true ? false : true}
                style={{
                  pointerEvents: completeness == 3 && isEqual == true ? 'none' : 'auto',
                  cursor: completeness == 3 && isEqual == true ? 'not-allowed' : 'pointer'
                }}
              >
                Reset Password
              </Button>
            </AnimateButton>
          </Grid>

          <Grid item xs={12}>
            <Stack spacing={3}>
              <span style={{ textAlign: 'center' }}>
                <Link href="#" underline="none" display={'inline-flex'} alignItems={'center'}>
                  <ArrowBackIcon /> Back to Sign In
                </Link>
              </span>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={0} />
          </Grid>
          <Grid item xs={4}>
            <BorderLinearProgress variant="determinate" value={100} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
