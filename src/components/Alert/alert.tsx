/*
 * @Author: zxy
 * @Date: 2022-04-13 14:59:40
 * @LastEditTime: 2022-05-21 18:15:05
 * @FilePath: /sku-react-d/src/components/Alert/alert.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";

type AlertType = 'success' | 'default' | 'error' | 'warning'

interface BaseAlertProps {
  title: string,
  description?: string,
  type?: AlertType,
  onColse?: () => void,
  /**
   * Can it be closed
   */
  closeble?: boolean,
  className?: string 
}

/**
 * Displays important alert messages.
 */
export const SkuAlert: React.FC<BaseAlertProps> = (props) => {
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
    'sku-bold-title': description,
    'sku-bold-des': !description
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
  type: 'default',
  closeble: true
}