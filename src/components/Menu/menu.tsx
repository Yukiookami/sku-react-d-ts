/*
 * @Author: zxy
 * @Date: 2022-04-15 16:22:36
 * @LastEditTime: 2022-04-20 17:28:34
 * @FilePath: /sku-react-d/src/components/Menu/menu.tsx
 */
import React, { createContext, useState } from "react";
import classNames from "classnames";

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
    'menu-vertical': mode === 'vertical'
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

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

SkuMenu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default SkuMenu