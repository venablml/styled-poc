import styled from 'styled-components'
import React from 'react'

const StyledTab = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
  color: ${props => (props.selected ? '#505050' : '#428ad8')};
  border-bottom: ${props => (props.selected ? '3px solid #428ad8' : 'none')};
  margin: ${props => props.margin || '20px'};
  outline: none;
`

const Tab = props => {
  return <StyledTab {...props}>{props.label}</StyledTab>
}

export default Tab
