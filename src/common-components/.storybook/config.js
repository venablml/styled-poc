import { configure, addDecorator } from "@storybook/react"
import { withThemesProvider } from "storybook-addon-styled-component-theme"
import { ZurichTheme, CwTheme, AonTheme } from "../theme"
import GlobalStyles from "../globalStyle"
import React from "react"

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  )
}

const themes = [CwTheme, ZurichTheme, AonTheme]
addDecorator(withThemesProvider(themes))
addDecorator(withGlobalStyles)

function loadStories() {
  require("../stories")
}

configure(loadStories, module)
