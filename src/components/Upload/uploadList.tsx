/*
 * @Author: zxy
 * @Date: 2022-05-27 22:37:09
 * @LastEditTime: 2022-05-27 23:37:08
 * @FilePath: /sku-react-d/src/components/Upload/uploadList.tsx
 */
import React, { FC } from "react";
import { UploadFile } from "./upload";
import { SkuIcon } from "../Icon/Icon";
import { SkuProgress } from '../Progress/progress'
interface UploadListProps {
  fileList: UploadFile[];
  onRemove: (_file: UploadFile) => void;
}

export const SkuUploadList: FC<UploadListProps> = (props) => {
  const { fileList, onRemove } = props;

  return (
    <ul className="sku-upload-list">
      {fileList.map((item) => {
        return (
          <li className="sku-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <SkuIcon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === "uploading" || item.status === "ready") && (
                <SkuIcon icon="spinner" spin theme="primary" />
              )}
              {item.status === "success" && (
                <SkuIcon icon="check-circle" theme="success" />
              )}
              {item.status === "error" && (
                <SkuIcon icon="times-circle" theme="danger" />
              )}
            </span>
            <span className="file-actions">
              <SkuIcon
                icon="times"
                onClick={() => {
                  onRemove(item);
                }}
              />
            </span>
            {
              item.status === "uploading" &&
              <SkuProgress
                percent={item.percent || 0}
              />
            }
          </li>
        );
      })}
    </ul>
  );
};
