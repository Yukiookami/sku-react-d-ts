/*
 * @Author: zxy
 * @Date: 2022-04-15 16:37:46
 * @LastEditTime: 2022-05-21 20:16:15
 * @FilePath: /sku-react-d/src/components/Menu/menuItem.tsx
 */
import classNames from "classnames";
import React from "react";
import { useContext } from "react";
import { MenuContext } from "./menu";

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  isSeleted?: boolean;
  subSelect?: (index: string) => void;
}

export const SkuMenuItem: React.FC<MenuItemProps> = (props) => {
  const {index, disabled, className, style, children, subSelect} = props
  const context = useContext(MenuContext)

  const classes = classNames('sku-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
      if (subSelect) {
        subSelect(index)
      }
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

SkuMenuItem.displayName = 'MenuItem'
