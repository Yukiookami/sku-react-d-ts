/*
 * @Author: zxy
 * @Date: 2022-04-15 16:22:36
 * @LastEditTime: 2022-04-15 16:29:51
 * @FilePath: /sku-react-d/src/components/Menu/menu.tsx
 */
import React from "react";
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical'

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedInedx: number) => void;
}

const SkuMenu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect } = props

  const classes = classNames('sku-menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  return (
    <ul className={classes} style={style}>
      
    </ul>
  )
}

SkuMenu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default SkuMenu