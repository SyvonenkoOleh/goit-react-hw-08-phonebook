import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 16px 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) {
    padding: 0 16px 32px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 42px 64px 42px;
  }
`;
export const Header = styled.h2`
  align-self: center;
  text-transform: uppercase;
`;

export const GoBackLinkWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const FormWrapper = styled.div`
  padding: 18px 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 24px;

  @media screen and (min-width: 768px) {
    padding: 40px;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  padding: 18px 16px;
  border-radius: 32px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 28px 36px;
  }
`;

export const ImgWrapper = styled.div`
  min-width: 25%;
  flex-basis: 60%;
`;

export const InputsWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;
  gap: 8px;
  align-self: flex-end;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const BtnWrapper = styled.div`
  position: relative;

  &:hover > p,
  &:focus > p {
    opacity: 1;
  }
`;

export const Input = styled.input`
  padding: 6px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;
  color: black;
  outline-color: #d4d4d4;

  &:hover {
    border-bottom: 1px solid #d4d4d4;
  }

  &:focus + .lightbox-modal__auth-label {
    color: #d4d4d4;
  }
  @media screen and (min-width: 768px) {
    padding: 6px 12px;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 16px;
  color: black;

  &:hover,
  &:focus {
    color: #d4d4d4;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
