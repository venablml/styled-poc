import React from "react"

const TabContainer = props => {
  const container = React.Children.map(props.children, (child, index) => {
    if (index === props.selectedIndex) {
      return child
    }
  })
  return <div>{container}</div>
}

export default TabContainer
/*
1. selected property
2. components
3. show the component that is selected

*/
