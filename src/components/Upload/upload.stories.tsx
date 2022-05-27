/*
 * @Author: zxy
 * @Date: 2022-05-23 15:21:51
 * @LastEditTime: 2022-05-27 23:38:16
 * @FilePath: /sku-react-d/src/components/Upload/upload.stories.tsx
 */
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuUpload } from './upload'

export default {
  title: 'FORM/Upload',
  component: SkuUpload,
} as ComponentMeta<typeof SkuUpload>;

const Template: ComponentStory<typeof SkuUpload> = (args) => <SkuUpload {...args}></SkuUpload>

export const Primary = Template.bind({});
Primary.args = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  // defaultFileList: defaultFileList,
  onSuccess: action('success'),
  onError: action('error'),
  onProgress: action('progress'),
  onChange: action('change'),
  // beforeUpload: checkFileSize
}