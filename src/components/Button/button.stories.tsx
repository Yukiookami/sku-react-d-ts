import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {SkuButton} from './button'

export default {
  title: 'Button',
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