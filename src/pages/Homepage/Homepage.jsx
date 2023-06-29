import { useSelector } from 'react-redux';

import {
  HomeMain,
  HomeTitle,
  Container,
  ContainerUnlogged,
  HomeTitleUnlogged,
} from './Homepage.styled';
import { getLogStatus, getUserName } from 'redux/authSelectors';
import { PhonebookLogo } from 'components/Logo/Logo';
const Homepage = () => {
  const isLoggedIn = useSelector(getLogStatus);
  const name = useSelector(getUserName);
  return (
    <HomeMain>
      {isLoggedIn ? (
        <Container>
          <HomeTitle>
            <span>{name}</span>, let's check your <PhonebookLogo /> !
          </HomeTitle>
        </Container>
      ) : (
        <ContainerUnlogged>
          <HomeTitleUnlogged>
            Welcome to <PhonebookLogo /> !
          </HomeTitleUnlogged>
        </ContainerUnlogged>
      )}
    </HomeMain>
  );
};

export default Homepage;
