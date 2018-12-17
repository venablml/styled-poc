import styled from "styled-components"

const TextInput = styled.input`
  width: ${props => (props.width ? props.width : "200px")};
  color: ${props => props.theme.input.textColor};
  height: 38px;
  background-color: ${props => props.theme.input.bgColor};
  border-radius: 0;
  padding-left: ${props => props.theme.input.paddingLeft};
  font-size: ${props => props.theme.input.fontSize};
  font-weight: ${props => props.theme.input.fontWeight};
  text-align: left;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : "0px")};
  margin-top: ${props => (props.marginTop ? props.marginTop : "0px")};
`
export default TextInput
