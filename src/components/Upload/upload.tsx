/*
 * @Author: zxy
 * @Date: 2022-05-27 00:49:25
 * @LastEditTime: 2022-05-27 11:22:07
 * @FilePath: /sku-react-d/src/components/Upload/upload.tsx
 */
import React, { ChangeEvent, useRef } from "react";
import axios from "axios";

import { SkuButton } from "../Button/button";

export interface UploadProps {
  action: string,
  // 上传之前
  beforeUpload?: (file: File) => boolean | Promise<File>;
  // 上传中
  onProgress?: (percentage: number, file: File) => void;
  // 上传成功
  onSuccess?: (data: any, file: File) => void;
  // 上传失败
  onError?: (err: any, file: File) => void;
  // 变化
  onChange?: (file: File) => void;
}

export const SkuUpload: React.FC<UploadProps> = (props) => {
  const {
    action,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange
  } = props

  const fileInput = useRef<HTMLInputElement>(null)

  /**
   * @description: 点击按钮展开input
   * @return {*}
   */  
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files) {
      return
    }

    uploadFiles(files)

    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  /**
   * @description: 上传文件,包含三种生命周期
   * @param {FileList} files
   * @return {*}
   */  
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)

    postFiles.forEach(async file => {
      if (!beforeUpload) {
        postReq(file)
      } else {
        const res = beforeUpload(file)

        if (res && res instanceof Promise) {
          const processedFile = await res
          postReq(processedFile)
        } else if (res !== false) {
          postReq(file)
        }
      }
    })
  }

  /**
   * @description: 文件上传
   * @param {File} file
   * @return {*}
   */  
  const postReq = async (file: File) => {
    const formData = new FormData()
      formData.append(file.name, file)

      const res = await axios.post(action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (e) => {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            // updateFileList(_file, { percent: percentage, status: 'uploading'})
            if (onProgress) {
              onProgress(percentage, file)
            }
          }
        }
      })

      try {
        if (onSuccess) {
          onSuccess(res.data, file)

          if (onChange) {
            onChange(file)
          }
        }
      } catch (err) {
        if (onError) {
          onError(err, file)
        }

        if (onChange) {
          onChange(file)
        }
      }
  }

  return (
    <div className="sku-upload-compent">
      <SkuButton btnType="primary"
      onClick={handleClick}>Upload File</SkuButton>

      <input
      className="sku-file-input"
      style={{display: 'none'}}
      onChange={handleFileChange}
      ref={fileInput}
      type="file" />
    </div>
  )
}