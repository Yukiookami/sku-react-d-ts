/*
 * @Author: zxy
 * @Date: 2022-05-21 20:14:36
 * @LastEditTime: 2022-05-22 22:50:37
 * @FilePath: /sku-react-d/src/components/Menu/menu.stories.tsx
 */
import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuMenu } from './menu'
import { SkuMenuItem } from './menuItem';
import { SkuSubMenu } from './subMenu';

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
      <SkuMenuItem> 
        cool link
      </SkuMenuItem>
      
      <SkuMenuItem>  
        cool link 2
      </SkuMenuItem>

      <SkuSubMenu title='dropdown'>
        <SkuMenuItem> 
          dropdown 1 
        </SkuMenuItem>

        <SkuMenuItem> 
          dropdown 2
        </SkuMenuItem>

        <SkuMenuItem> 
          dropdown 3 
        </SkuMenuItem>
      </SkuSubMenu>

      <SkuMenuItem> 
        cool link 3
      </SkuMenuItem>
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
