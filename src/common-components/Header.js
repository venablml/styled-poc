import styled from "styled-components"

const Header = styled.header`
  background-color: ${props => props.theme.headerBgColor};
  height: 56px;
  width: 100%;
  position: fixed;
`

export default Header
