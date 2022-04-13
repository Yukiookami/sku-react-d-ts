/*
 * @Author: zxy
 * @Date: 2022-04-13 14:59:40
 * @LastEditTime: 2022-04-13 16:42:45
 * @FilePath: /sku-react-d/src/components/Alert/alert.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";

export enum AlertType {
  success = 'suc',
  default = 'def',
  danger = 'dan',
  warning = 'warn'
}

interface BaseAlertProps {
  title: string,
  description?: string,
  type?: AlertType,
  onColse?: () => void,
  closeble?: boolean,
  className?: string 
}

const SkuAlert: React.FC<BaseAlertProps> = (props) => {
  const [hide, setHide] = useState(false)
  const [relHide, setRelHide] = useState(false)

  const { 
    title,
    description,
    type,
    onColse,
    closeble,
    className
  } = props

  const classes = classNames('sku-alert', className, {
    [`sku-alert-${type}`]: type,
    [`sku-hide-alert`]: hide,
    [`sku-rel-hide`]: relHide
  })

  const titleClass = classNames('sku-alert-title', {
    'sku-bold-title': description
  })

  const handleClose = () => {
    if (onColse) {
      onColse()
    }

    setHide(true)

    setTimeout(() => {
      setRelHide(true)
    }, 300) 
  }

  return (
    <div 
      className={classes}
    >
      <div className="sku-alert-top-box">
        <span className={titleClass}>{ title }</span>

        { closeble && <i className="sku-alert-close" onClick={handleClose}></i> }  
      </div>
      { description && <span className="sku-bold-des">{ description }</span> } 
    </div>
  )
}

SkuAlert.defaultProps = {
  type: AlertType.default,
  closeble: true
}

export default SkuAlert