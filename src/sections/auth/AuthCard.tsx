// material-ui
import { Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

// project import
import MainCard, { MainCardProps } from 'components/MainCard';

// ==============================|| AUTHENTICATION - CARD WRAPPER ||============================== //

const AuthCard = ({ children, ...other }: MainCardProps) => (
  <MainCard
    sx={{
      minHeight: { xs: '100vh' },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    }}
    content={false}
    {...other}
    border={false}
    boxShadow
    shadow={(theme: Theme) => theme.customShadows.z1}
  >
    <Box sx={{ p: { xs: 5, sm: 5, md: 5, xl: 5 }, marginRight: '10vw', marginLeft: '10vw' }}>{children}</Box>
  </MainCard>
);

export default AuthCard;
