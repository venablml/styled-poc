import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Welcome } from '@storybook/react/demo'
import Button from '../Button'
import Tabs from '../Tabs'
import Tab from '../Tab'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module).add('with text', () => (
  <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>
))

storiesOf('Tabs', module).add('with two tabs', () => (
  <Tabs onChange={() => {}} selectedIndex={1}>
    <Tab onClick={action('clicked')} label={text('Label', 'Peace')} />
    <Tab onClick={action('clicked')} label={text('Label', 'Love')} />
    <Tab onClick={action('clicked')} label={text('Label', 'Understanding')} />
  </Tabs>
))
