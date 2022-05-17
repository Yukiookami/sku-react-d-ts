import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps
}

const SkuIcon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restPropes } = props
  const classes = classNames('sku-icon', className, {
    [`icon-${theme}`]: theme
  })

  return (
    <FontAwesomeIcon className={classes} {...restPropes}></FontAwesomeIcon>
  )
}

export default SkuIcon