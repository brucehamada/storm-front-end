import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// project import
import useAuth from 'hooks/useAuth';
import { useContext } from 'react';
// types
import { GuardProps } from 'types/auth';
import JWTContext from 'contexts/JWTContext';

// ==============================|| GUEST GUARD ||============================== //

const GuestGuard = ({ children }: GuardProps) => {
  const userContext = useContext(JWTContext);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      if (userContext?.user?.type === 'customer') {
        navigate(location?.state?.from ? location?.state?.from : '/client/home', {
          state: {
            from: ''
          },
          replace: true
        });
      } else {
        navigate(location?.state?.from ? location?.state?.from : '/expert/home', {
          state: {
            from: ''
          },
          replace: true
        });
      }
    }
  }, [isLoggedIn, navigate, location]);

  return children;
};

export default GuestGuard;
