import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuIcon } from './Icon'

export default {
  title: 'Icon',
  component: SkuIcon,
} as ComponentMeta<typeof SkuIcon>;

const Template: ComponentStory<typeof SkuIcon> = (args) => <SkuIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  icon: "coffee",
  size: '10x',
  className: ''
}
