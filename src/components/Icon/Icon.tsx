import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

/**
 * Icon component based on fortawesome
 * 
 * use component in React: 
 * 
 * import { SkuIcon } from './components/Icon/Icon'; <br>
 * import { library } from '@fortawesome/fontawesome-svg-core';<br>
 * import { fas } from '@fortawesome/free-solid-svg-icons';<br>
 * library.add(fas)
 * 
 * doc: https://fontawesome.com/v6/icons/angle-down?s=solid
 */
export const SkuIcon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restPropes } = props
  const classes = classNames('sku-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} {...restPropes}></FontAwesomeIcon>
  )
}