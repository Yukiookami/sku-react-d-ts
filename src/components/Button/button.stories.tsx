import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

const defaultButton = () => (
  <>
  <Button onClick={action('clicked')}> default button </Button>
  </>
)

const buttonWithSize = () => (
  <>
    <div className="margin-around display-ib">
      <Button size="lg"> large button </Button>
    </div>
    <div className="margin-around display-ib">
      <Button size="sm"> small button </Button>
    </div>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)
storiesOf('Button', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)