import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuMenu } from './menu'

export default {
  title: 'Menu',
  component: SkuMenu,
} as ComponentMeta<typeof SkuMenu>;

const Template: ComponentStory<typeof SkuMenu> = (args) => <SkuMenu {...args} />;

export const Primary = Template.bind({});
