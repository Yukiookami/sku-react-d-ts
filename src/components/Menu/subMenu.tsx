import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";

export interface SubMenuProps {
  index?:number,
  title: string,
  className?: string
}

const SkuSubMenu: React.FC<SubMenuProps> = (props) => {
  const { 
    index,
    title,
    className,
    children
  } = props
  
  const context = useContext(MenuContext)
  const classes = classNames('sku-menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childELement = child as React.FunctionComponentElement<MenuItemProps>

      if (childELement.type.displayName === 'MenuItem') {
        return childELement
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })

    return (
      <ul className="sku-submenu">
        {childrenComponent}
      </ul>
    )
  }

  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
        {title}
      </div>

      {renderChildren()}
    </li>
  )
}

SkuSubMenu.displayName = 'SubMenu'

export default SkuSubMenu