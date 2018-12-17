import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

import { Welcome } from "@storybook/react/demo"
import Button from "../Button"
import Header from "../Header"
import Tabs from "../Tabs"
import Tab from "../Tab"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

storiesOf("Button", module)
  .add("Primary", () => <Button primary>{text("Label", "View Policy")}</Button>)
  .add("Secondary", () => <Button>{text("Label", "Modify Policy")}</Button>)

storiesOf("Header", module).add("Header", () => <Header />)
storiesOf("Tabs", module).add("with two tabs", () => (
  <Tabs onChange={() => {}} selectedIndex={1}>
    <Tab label={text("Label", "Quotes")} />
    <Tab label={text("Label", "Policies")} />
    <Tab label={text("Label", "Certificates")} />
  </Tabs>
))
