/*
 * @Author: zxy
 * @Date: 2022-05-16 19:09:05
 * @LastEditTime: 2022-05-29 19:30:27
 * @FilePath: /sku-react-d/src/components/Icon/Icon.tsx
 */
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