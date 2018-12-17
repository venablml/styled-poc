import styled, { css } from "styled-components"
import React from "react"

import Label from "./Label"
import TextInput from "./TextInput"

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
`

const InputContainer = props => {
  return (
    <StyledInputContainer direction={props.direction}>
      <Label {...props}>{props.label}</Label>
      <TextInput value={props.value} />
    </StyledInputContainer>
  )
}

export default InputContainer
