import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
`;

export const ContainerUnlogged = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
`;

export const ImgWrapper = styled.div`
  z-index: -100;
  transform: translateY(-20%);

  @media screen and (min-width: 1280px) {
    transform: translateY(-10%);
  }
`;

export const ImgWrapperUnlogged = styled.div`
  z-index: -1000;
  @media screen and (min-width: 1280px) {
    /* transform: translateY(-5%); */
  }
`;

export const HomeMain = styled.main`
  text-align: center;
`;

export const HomeTitle = styled.p`
font-size: 20px;
font-weight: 500;
color: black;

span {
  color: rgba(48, 205, 137, 0.787);
  margin-left: 10px;
}
@media screen and (min-width: 768px) {
  font-size: 25px;
}
`;

export const HomeTitleUnlogged = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;

  span {
    color: rgba(48, 205, 137, 0.787);
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;