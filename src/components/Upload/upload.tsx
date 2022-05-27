/*
 * @Author: zxy
 * @Date: 2022-05-27 00:49:25
 * @LastEditTime: 2022-05-27 23:37:15
 * @FilePath: /sku-react-d/src/components/Upload/upload.tsx
 */
import React, { ChangeEvent, useRef, useState } from "react";
import axios from "axios";

import { SkuButton } from "../Button/button";
import { SkuUploadList } from "./uploadList";

export interface UploadProps {
  action: string;
  // 文件列表
  defaultFileList?: UploadFile[];
  // 删除
  onRemove?: (file: UploadFile) => void;
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

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export const SkuUpload: React.FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove
  } = props

  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])

  /**
   * @description: 新增文件列表
   * @param {UploadFile} updateFile
   * @param {Partial} updateObj
   * @return {*}
   */  
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList((prevList) => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return {...file, ...updateObj}
        } else {
          return file
        }
      })
    })
  } 

  /**
   * @description: 删除文件列表
   * @param {UploadFile} file
   * @return {*}
   */  
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })

    if (onRemove) {
      onRemove(file)
    }
  }

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
    // 上传列表
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }

    setFileList([_file, ...fileList])

    const formData = new FormData()
      formData.append(file.name, file)

      try {
        const res = await axios.post(action, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (e) => {
            let percentage = Math.round((e.loaded * 100) / e.total) || 0;

            if (percentage <= 100) {
              updateFileList(_file, { percent: percentage, status: 'uploading'})
              if (onProgress) {
                onProgress(percentage, file)
              }
            }
          }
        })
      
        updateFileList(_file, {status: 'success', response: res.data})
        if (onSuccess) {
          onSuccess(res.data, file)
        }
        
        if (onChange) {
          onChange(file)
        }
      } catch (err) {
        updateFileList(_file, { status: 'error', error: err})
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

      <SkuUploadList fileList={fileList}
      onRemove={handleRemove}></SkuUploadList>
    </div>
  )
}