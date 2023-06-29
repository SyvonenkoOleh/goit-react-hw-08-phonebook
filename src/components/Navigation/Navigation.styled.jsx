import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomepageLink = styled(NavLink)`
  margin: 0 10px 0 0;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
  box-shadow: none;
  height: fit-content;
  border: 1px solid transparent;

  &:hover,
  &:focus {
    background-color: rgba(248, 220, 92, 0.7);
  }

  &.active {
    color: white;
    background-color: rgba(0, 128, 75, 0.7);

    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
  }

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }
`;

