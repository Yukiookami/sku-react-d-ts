/*
 * @Author: zxy
 * @Date: 2022-05-21 19:33:52
 * @LastEditTime: 2022-05-22 21:37:19
 * @FilePath: /sku-react-d/src/components/Icon/icon.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuIcon } from './Icon'

export default {
  title: 'Basic/Icon',
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
