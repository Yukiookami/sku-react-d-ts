/*
 * @Author: zxy
 * @Date: 2022-05-23 08:46:25
 * @LastEditTime: 2022-05-23 11:09:30
 * @FilePath: /sku-react-d/src/components/Input/input.tsx
 */
import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { SkuIcon } from '../Icon/Icon'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type InputSize = 'lg' | 'sm' | 'mid'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' > {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange? : (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string
}

export const SkuInput: React.FC<InputProps> = (props) => {
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props

  const cnames = classNames('sku-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend
  })
  
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }

  if('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={cnames} style={style}>
      {prepend && <div className="sku-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><SkuIcon icon={icon} title={`title-${icon}`}/></div>}
      <input 
        disabled={disabled}
        {...restProps}
        className="sku-input-inner"
      />
      {append && <div className="sku-input-group-append">{append}</div>}
    </div>
  )
}