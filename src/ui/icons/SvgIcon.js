import styled from "styled-components";

export default styled.svg`
  flex: none;
  width: 35px;
  height: 35px;
  fill: ${props => props.color ? props.color : "white"};
`;
