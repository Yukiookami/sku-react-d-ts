/*
 * @Author: zxy
 * @Date: 2022-05-27 22:37:09
 * @LastEditTime: 2022-05-27 23:37:08
 * @FilePath: /sku-react-d/src/components/Upload/uploadList.tsx
 */
import React from "react";
import { SkuIcon } from "../Icon/Icon";
import { SkuProgress } from '../Progress/progress';
export var SkuUploadList = function (props) {
    var fileList = props.fileList, onRemove = props.onRemove;
    return (React.createElement("ul", { className: "sku-upload-list" }, fileList.map(function (item) {
        return (React.createElement("li", { className: "sku-upload-list-item", key: item.uid },
            React.createElement("span", { className: "file-name file-name-".concat(item.status) },
                React.createElement(SkuIcon, { icon: "file-alt", theme: "secondary" }),
                item.name),
            React.createElement("span", { className: "file-status" },
                (item.status === "uploading" || item.status === "ready") && (React.createElement(SkuIcon, { icon: "spinner", spin: true, theme: "primary" })),
                item.status === "success" && (React.createElement(SkuIcon, { icon: "check-circle", theme: "success" })),
                item.status === "error" && (React.createElement(SkuIcon, { icon: "times-circle", theme: "danger" }))),
            React.createElement("span", { className: "file-actions" },
                React.createElement(SkuIcon, { icon: "times", onClick: function () {
                        onRemove(item);
                    } })),
            item.status === "uploading" &&
                React.createElement(SkuProgress, { percent: item.percent || 0 })));
    })));
};
