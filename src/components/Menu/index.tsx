/*
 * @Author: zxy
 * @Date: 2022-05-29 15:25:25
 * @LastEditTime: 2022-05-29 15:30:48
 * @FilePath: /sku-react-d/src/components/Menu/index.tsx
 */
import React from "react";
import { SkuMenu, MenuProps } from './menu'
import { SkuMenuItem, MenuItemProps } from './menuItem'
import { SkuSubMenu, SubMenuProps } from './subMenu'

export type IMenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>,
  SubMenu: React.FC<SubMenuProps>
}

const TransMenu = SkuMenu as IMenuComponent

TransMenu.Item = SkuMenuItem
TransMenu.SubMenu = SkuSubMenu

export default TransMenu