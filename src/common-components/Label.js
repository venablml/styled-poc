import styled, { css } from "styled-components"

const Label = styled.label`
  box-sizing: border-box;
  color: ${props => props.theme.label.textColor};
  font-size: 14px;
  max-width: ${props => (props.maxWidth ? props.maxWidth : "100px")};
  min-width: ${props => (props.minWidth ? props.minWidth : "100px")};
  ${props =>
    props.direction === "row"
      ? css`
          padding-right: 12px;
          text-align: right;
        `
      : css`
          padding-top: 12px;
          text-align: left;
        `}
`

export default Label

//padding-right: ${props => (props.paddingRight ? props.paddingRight : "12px")};
