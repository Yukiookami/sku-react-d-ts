/*
 * @Author: zxy
 * @Date: 2022-05-21 17:58:58
 * @LastEditTime: 2022-05-22 21:36:56
 * @FilePath: /sku-react-d/src/components/Alert/alert.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuAlert } from './alert'

export default {
  title: 'Feedback/Alert',
  component: SkuAlert,
} as ComponentMeta<typeof SkuAlert>;

const Template: ComponentStory<typeof SkuAlert> = (args) => <SkuAlert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'alert',
  description: 'alert description',
  type: 'default',
  onColse: () => {},
  closeble: true,
  className: ''
};

export const Withoutdescription = Template.bind({});
Withoutdescription.args = {
  title: 'only title',
  type: 'default',
  closeble: true,
  className: ''
};

export const CloseEvent = Template.bind({});
CloseEvent.args = {
  title: 'click and close',
  type: 'default',
  closeble: true,
  onColse: () => alert('close'),
  className: ''
};