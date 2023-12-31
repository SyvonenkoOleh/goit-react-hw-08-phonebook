import styled from 'styled-components';

export const Input = styled.input`
  min-width: 50%;
  border-radius: 8px;
  font-size: 12px;
  placeholder: grey;
  padding: 8px 12px;
  outline-color: #d4d4d4;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 12px 16px;
    margin-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    padding: 12px 16px;
    margin-left: 16px;
  }
`;
