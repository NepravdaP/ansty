import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
  backdrop-filter: blur(5px);
`;
export const ModalPic = styled.img`
  max-width: 40vw;
  max-height: 80vh;

  border-radius: 10px;
`;

export const ModalText = styled.div`
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;

  width: 40vw;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  border-radius: 10px;
  vertical-align: center;
`;
