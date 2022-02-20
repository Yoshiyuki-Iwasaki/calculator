import styled from "styled-components";

export const Main = styled.div`
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  background: #333;
`;
export const ButtonArea = styled.div`
  display: flex;
`;
export const NumberArea = styled.div`
  width: 75%;
`;
export const Number = styled.div`
  display: flex;
`;
export const Operator = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;
