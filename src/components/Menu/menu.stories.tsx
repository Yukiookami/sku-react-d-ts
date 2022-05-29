/*
 * @Author: zxy
 * @Date: 2022-05-21 20:14:36
 * @LastEditTime: 2022-05-29 15:45:33
 * @FilePath: /sku-react-d/src/components/Menu/menu.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as SkuMenu } from './index'

export default {
  title: 'Navigation/Menu',
  component: SkuMenu,
} as ComponentMeta<typeof SkuMenu>;

const Template: ComponentStory<typeof SkuMenu> = (args) => {
  const { defaultIndex, className, mode, style, onSelect, defaultOpenSubMenus } = args
  return (
    <SkuMenu className={className}  
    mode={mode}
    style={style}
    defaultOpenSubMenus={defaultOpenSubMenus}
    defaultIndex={defaultIndex} onSelect={onSelect}>
      <SkuMenu.Item> 
        cool link
      </SkuMenu.Item>
      
      <SkuMenu.Item>  
        cool link 2
      </SkuMenu.Item>

      <SkuMenu.SubMenu title='dropdown'>
        <SkuMenu.Item> 
          dropdown 1 
        </SkuMenu.Item>

        <SkuMenu.Item> 
          dropdown 2
        </SkuMenu.Item>

        <SkuMenu.Item> 
          dropdown 3 
        </SkuMenu.Item>
      </SkuMenu.SubMenu>

      <SkuMenu.Item> 
        cool link 3
      </SkuMenu.Item>
    </SkuMenu>
  )
}


export const Primary = Template.bind({});
Primary.args = {
  mode: 'horizontal',
  style: {},
  onSelect: () => {},
  defaultOpenSubMenus: [],
  className: ''
}
