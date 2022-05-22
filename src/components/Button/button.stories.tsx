/*
 * @Author: zxy
 * @Date: 2022-05-19 15:20:05
 * @LastEditTime: 2022-05-22 21:37:10
 * @FilePath: /sku-react-d/src/components/Button/button.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {SkuButton} from './button'

export default {
  title: 'Basic/Button',
  component: SkuButton,
} as ComponentMeta<typeof SkuButton>;

const Template: ComponentStory<typeof SkuButton> = (args) => <SkuButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  btnType: 'primary',
  children: 'Button',
  disabled: false,
  size: 'mid',
  className: ''
};