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
import TextInput from "../TextInput"
import Label from "../Label"
import InputContainer from "../InputContainer"

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
))

storiesOf("Button", module)
  .add("Primary", () => <Button primary>{text("Label", "View Policy")}</Button>)
  .add("Secondary", () => <Button>{text("Label", "Modify Policy")}</Button>)

storiesOf("Header", module).add("Header", () => <Header />)
storiesOf("Text Input", module)
  .add("TextInput", () => <TextInput value="Mary Shelley" />)
  .add("TextInput with left margin", () => (
    <TextInput marginLeft="50px" value="Joseph Jones" />
  ))
storiesOf("Label", module)
  .add("Label", () => <Label>First Name </Label>)
  .add("Label with min-width", () => (
    <Label minWidth="230px">First Name </Label>
  ))
storiesOf("Input Container", module)
  .add("InputContainer Left Aligned Label", () => (
    <InputContainer direction="row" label="First Name" value="Sergio D" />
  ))
  .add("InputContainer Top Aligned Label", () => (
    <InputContainer direction="column" label="First Name" value="Sergio D" />
  ))

storiesOf("Tabs", module).add("with two tabs", () => (
  <Tabs onChange={() => {}} selectedIndex={1}>
    <Tab label={text("Label", "Quotes")} />
    <Tab label={text("Label", "Policies")} />
    <Tab label={text("Label", "Certificates")} />
  </Tabs>
))
