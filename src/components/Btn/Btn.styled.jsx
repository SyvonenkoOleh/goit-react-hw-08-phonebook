import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: #b1bbca9d;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #56ae729d;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }
`;
