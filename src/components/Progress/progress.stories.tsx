/*
 * @Author: zxy
 * @Date: 2022-05-29 16:35:19
 * @LastEditTime: 2022-05-29 16:36:57
 * @FilePath: /sku-react-d/src/components/Progress/progress.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {SkuProgress} from './progress'

export default {
  title: 'Basic/Progress',
  component: SkuProgress,
} as ComponentMeta<typeof SkuProgress>;

const Template: ComponentStory<typeof SkuProgress> = (args) => <SkuProgress {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  percent: 30
};