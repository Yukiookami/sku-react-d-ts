/*
 * @Author: zxy
 * @Date: 2022-05-31 01:20:59
 * @LastEditTime: 2022-05-31 01:25:08
 * @FilePath: /sku-react-d/src/welcome.stories.tsx
 */
import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome', module)
  .add('welcome', () => {
    return (
      <>
        <h1>Welcome to sku-react-d</h1>
        <p>The sku component library is built for learning typescript and react hooks</p>
        <h3>Install and try</h3>
        <code>
          npm i sku-react-d
        </code>
      </>
    )
  }, { info : { disable: true }})