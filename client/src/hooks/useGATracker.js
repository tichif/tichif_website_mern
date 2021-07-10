import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

const useGATracker = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.initialize('UA-201842381-1');

    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default useGATracker;
