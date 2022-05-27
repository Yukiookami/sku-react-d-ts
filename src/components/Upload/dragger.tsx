/*
 * @Author: zxy
 * @Date: 2022-05-28 00:35:14
 * @LastEditTime: 2022-05-28 00:54:24
 * @FilePath: /sku-react-d/src/components/Upload/dragger.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";

interface DraggerProps {
  onFile: (files: FileList) => void;
}

export const SkuDragger: React.FC<DraggerProps> = (props) => {
  const { onFile , children } = props

  const [ dragOver, setDragOver ] = useState(false)

  const klass = classNames('sku-uploader-dragger', {
    'is-dragover': dragOver
  })

  /**
   * @description: 松开
   * @param {DragEvent} e
   * @return {*}
   */  
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)
  }
  
  /**
   * @description: 拖拽
   * @param {DragEvent} e
   * @param {boolean} over
   * @return {*}
   */  
  const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }

  return (
    <div 
      className={klass}
      onDragOver={e => { handleDrag(e, true)}}
      onDragLeave={e => { handleDrag(e, false)}}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}