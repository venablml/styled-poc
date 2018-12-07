import React, { Component } from "react"
import Tabs from "./common-components/Tabs"
import Tab from "./common-components/Tab"
import TabContainer from "./common-components/TabContainer"

const ClaimsInfo = () => {
  return <div>This is the Claims Info Component</div>
}

const CreateClaim = () => {
  return <div>This is the Create Claim Component</div>
}
class App extends Component {
  state = { selectedIndex: 0 }

  handleChange = index => {
    console.log("index", index)
    this.setState({ selectedIndex: index })
  }
  render() {
    return (
      <React.Fragment>
        <Tabs
          onChange={this.handleChange}
          selectedIndex={this.state.selectedIndex}
        >
          <Tab label="Claims Info" />
          <Tab label="Create a Claim" />
        </Tabs>
        <TabContainer selectedIndex={this.state.selectedIndex}>
          <ClaimsInfo />
          <CreateClaim />
        </TabContainer>
      </React.Fragment>
    )
  }
}

export default App
