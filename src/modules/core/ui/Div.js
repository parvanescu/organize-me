import styled from "styled-components"


export const Div = styled.div`
  margin-top: ${props=> props.mt}px;
  margin-bottom: ${props => props.mb}px;
  margin-left: ${props => props.ml}px;
  margin-right: ${props => props.mr}px;
  display: ${props=> props.grid===true?"grid":props.flex===true?"flex":"block"};
  
`