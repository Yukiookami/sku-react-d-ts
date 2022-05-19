import React, { useContext, useRef, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menuItem";
import SkuIcon from "../Icon/Icon";

import Transition from "../Transition/transition";

export interface SubMenuProps {
  index?: string,
  title: string,
  className?: string,
  isSeleted?:boolean,
  subSelect?: (index: string) => void
}

const SkuSubMenu: React.FC<SubMenuProps> = (props) => {
  const { 
    index,
    title,
    className,
    children,
    isSeleted,
    subSelect
  } = props

  const context = useContext(MenuContext)

  const openSubMenus = context.defaultOpenSubMenus
  const isOpen = (index && context.mode === 'vertical' ? openSubMenus?.includes(index) : false)

  const [ menuOpen, setMenuOpen ] = useState(isOpen)

  // 解决组件库内部报错
  const CssTransitionNodeRef = useRef(null)

  const classes = classNames('sku-menu-item submenu-item', className, {
    'is-active': context.index === index || isSeleted,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })

  const subMenuClasses = classNames(
    'sku-submenu',
    {
      'menu-open': menuOpen
    }
  )

  let timer:any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const handleClick = (e: React.MouseEvent) => {
    setMenuOpen(!menuOpen)
    e.preventDefault()
  }


  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {handleMouse(e, true)},
    onMouseLeave: (e: React.MouseEvent) => {handleMouse(e, false)}
  } : {}
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childELement = child as React.FunctionComponentElement<MenuItemProps>

      if (childELement.type.displayName === 'MenuItem') {
        return React.cloneElement(childELement, {
          index: `${index}-${i}`,
          subSelect: (index: string) => {
            if (subSelect) {
              subSelect(index)
            }
          }
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })

    return (
      <Transition 
      nodeRef={CssTransitionNodeRef}
      in={menuOpen} 
      timeout={300} 
      animation='zoom-in-top'>
        <ul ref={CssTransitionNodeRef} className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}

        <SkuIcon icon="angle-down" className="arrow-icon"/>
      </div>

      {renderChildren()}
    </li>
  )
}

SkuSubMenu.displayName = 'SubMenu'

export default SkuSubMenu