/*
 * @Author: zxy
 * @Date: 2022-04-15 16:37:46
 * @LastEditTime: 2022-04-15 16:41:56
 * @FilePath: /sku-react-d/src/components/Menu/menuItem.tsx
 */
import classNames from "classnames";
import React from "react";

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const SkuMenuItem: React.FC<MenuItemProps> = (props) => {
  const {index, disabled, className, style, children} = props

  const classes = classNames('sku-menu-item', className, {
    'is-disabled': disabled
  })

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}

export default SkuMenuItem