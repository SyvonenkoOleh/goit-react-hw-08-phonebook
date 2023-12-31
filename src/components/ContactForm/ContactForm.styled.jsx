import styled from 'styled-components';

export const Form = styled.form`
  height: fit-content;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  border-radius: 12px;
  background-color: #f1f1f1;
  border: 2px solid #d4d4d4;
  color: #010101;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 30vw;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
