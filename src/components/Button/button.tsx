/*
 * @Author: zxy
 * @Date: 2022-04-12 13:48:03
 * @LastEditTime: 2022-05-18 19:01:28
 * @FilePath: /sku-react-d/src/components/Button/button.tsx
 */
import React from "react";
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseBttonProps {
  className?: string,
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?:string
}

// 让组件拥有原生属性
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseBttonProps
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseBttonProps
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const SkuButton: React.FC<ButtonProps> = (props) => {
  const { 
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props

  // 默认btn
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a 
        className={classes}
        href={href}
        {...restProps}
      >{ children }</a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >{ children }</button>
    )
  }
}

SkuButton.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default SkuButton