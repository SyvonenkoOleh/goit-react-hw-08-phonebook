import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  padding: 3px;
`;

export const Hint = styled.p`
  font-size: 14px;
  letter-spacing: 0.03em;
  margin: 0 0 16px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin: 0;
  }
`;

export const ListItem = styled.div`
  max-width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  padding: 16px;
  border-radius: 12px;
  background-color: #f1f1f1;

  @media screen and (min-width: 768px) {
    max-width: 50vw;
    padding: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const ContentWrapper = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    padding: 32px;
  }
`;

export const ConfirmationText = styled.p`
  margin: 0;
  font-weight: normal;
  text-align: center;
  & > span {
    font-weight: bold;
  }
`;
