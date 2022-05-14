/*
 * @Author: zxy
 * @Date: 2022-04-15 16:22:36
 * @LastEditTime: 2022-05-15 04:43:22
 * @FilePath: /sku-react-d/src/components/Menu/menu.tsx
 */
import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedInedx: string) => void

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({index: '0'})

const SkuMenu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children, defaultOpenSubMenus } = props

  const [currentActive, setActive] = useState(defaultIndex)
  const [isSeleted, setIsSeleted] = useState(false)

  const classes = classNames('sku-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: string) => {
    setActive(index)
    
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext:IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus: defaultOpenSubMenus
  }

  /**
   * @description: 防止其他的结构被放入组件中
   * @param {*}
   * @return {*}
   */  
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
          isSeleted: isSeleted,
          subSelect: (selIndex: string) => {
            let nowIndex = index.toString()
            if (selIndex.slice(0, 1) === nowIndex.slice(0, 1) && selIndex.indexOf('-') !== -1) {
              setIsSeleted(true)
            } else {
              setIsSeleted(false)
            }
          }
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

SkuMenu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default SkuMenu