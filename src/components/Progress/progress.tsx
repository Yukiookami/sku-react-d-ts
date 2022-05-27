/*
 * @Author: zxy
 * @Date: 2022-05-27 22:58:02
 * @LastEditTime: 2022-05-27 23:01:33
 * @FilePath: /sku-react-d/src/components/Progress/progress.tsx
 */
import React, { FC } from 'react'
import { ThemeProps } from '../Icon/Icon'
export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}

export const SkuProgress: FC<ProgressProps> = (props) => {
  const {
    percent,
    strokeHeight,
    showText,
    styles,
    theme,
  } = props
  return (
    <div className="sku-progress-bar" style={styles}>
      <div className="sku-progress-bar-outer" style={{ height: `${strokeHeight}px`}}>
        <div 
          className={`sku-progress-bar-inner color-${theme}`}
          style={{width: `${percent}%`}}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  )
}

SkuProgress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
}
