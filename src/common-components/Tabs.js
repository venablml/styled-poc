import React from 'react'

const Tabs = props => {
  const tabs = React.Children.map(props.children, (child, index) => {
    return React.cloneElement(child, {
      index: index,
      onClick: () => props.onChange(index),
      selected: props.selectedIndex === index,
    })
  })
  return <div>{tabs}</div>
}

export default Tabs
/*
    On a page, we want to create an array of tabs and pass them into the Tabs Component
    The tabs component:
         should have a selectedTab property
         should have a handler that sets the selectedTab value
         should trigger an event that loads the content of each tab
    This property will be passed into each tab so that we can correctly adjust the css
*/
