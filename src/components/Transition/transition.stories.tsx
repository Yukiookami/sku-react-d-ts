/*
 * @Author: zxy
 * @Date: 2022-05-29 16:43:23
 * @LastEditTime: 2022-05-29 16:44:33
 * @FilePath: /sku-react-d/src/components/Transition/transition.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuTransition } from './transition'

export default {
  title: 'Basic/Transition',
  component: SkuTransition,
} as ComponentMeta<typeof SkuTransition>;

const Template: ComponentStory<typeof SkuTransition> = (args) => <SkuTransition {...args} />;

export const Primary = Template.bind({});
Primary.args = {

}
