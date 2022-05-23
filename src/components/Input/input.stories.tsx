/*
 * @Author: zxy
 * @Date: 2022-05-23 11:06:03
 * @LastEditTime: 2022-05-23 11:35:37
 * @FilePath: /sku-react-d/src/components/Input/input.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuInput } from './input'

export default {
  title: 'Form/Input',
  component: SkuInput,
} as ComponentMeta<typeof SkuInput>;

const Template: ComponentStory<typeof SkuInput> = (args) => <SkuInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  size: 'mid',
  placeholder: 'value input',
  style: {width: '300px'}
}

export const prependInput = Template.bind({});
prependInput.args = {
  disabled: false,
  size: 'mid',
  placeholder: 'value input',
  style: {width: '300px'},
  prepend: "https://"
}

export const appendInput = Template.bind({});
appendInput.args = {
  disabled: false,
  size: 'mid',
  placeholder: 'value input',
  style: {width: '300px'},
  append: ".com"
}

export const iconInput = Template.bind({});
iconInput.args = {
  disabled: false,
  size: 'mid',
  placeholder: 'input with icon',
  style: {width: '300px'},
  icon: 'search'
}
