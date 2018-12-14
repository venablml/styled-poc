import React from "react"
import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  border-radius: 3px;
  color: #fff;
  background-color: ${props =>
    props.primary ? props.theme.primary : props.theme.secondary};
  border: 1px solid ${props => (props.primary ? "#f3a309" : "#438bd7")};
  padding: 10px 20px;
  transition: all 0.2s ease-out;
  outline: none;
  &:hover {
    background-color: ${props => props.theme.hoverBgColor};
    border-color: ${props => props.theme.hoverColorBorder};
    color: ${props => props.theme.hoverColor};
  }
`

export default Button
