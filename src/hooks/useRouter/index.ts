import { useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { History, Location } from 'history';

export interface Router {
  replace(): void;
  pathname: string;
  location: Location;
  history: History;
  next(): void;
}

export function useRouter(): Router {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  return useMemo(() => {
    dispatch({ type: 'NAVIGATE' });
    return {
      // For convenience add pathname at top level
      pathname: location.pathname,
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      history,
      location,
    } as Router;
  }, [location, history]);
}
