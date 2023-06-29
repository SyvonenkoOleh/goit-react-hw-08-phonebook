import { useSelector } from 'react-redux';
import { getLogStatus } from 'redux/authSelectors';
import { HomepageLink } from './Navigation.styled';
export const Navigation = () => {
  const isLoggedIn = useSelector(getLogStatus);
  return (
    <>
      <HomepageLink to="/">
        Home
      </HomepageLink>
      {isLoggedIn && (
        <HomepageLink to="/contacts">
          Contacts
        </HomepageLink>
      )}
    </>
  );
};
