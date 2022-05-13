/*
 * @Author: zxy
 * @Date: 2022-04-15 16:22:36
 * @LastEditTime: 2022-05-13 22:55:17
 * @FilePath: /sku-react-d/src/components/Menu/menu.tsx
 */
import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedInedx: number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0})

const SkuMenu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props

  const [currentActive, setActive] = useState(defaultIndex)

  const classes = classNames('sku-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })

  const handleClick = (index: number) => {
    setActive(index)
    
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext:IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
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
          index
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
  defaultIndex: 0,
  mode: 'horizontal'
}

export default SkuMenu