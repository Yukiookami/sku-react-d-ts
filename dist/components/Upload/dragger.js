/*
 * @Author: zxy
 * @Date: 2022-05-28 00:35:14
 * @LastEditTime: 2022-05-28 00:54:24
 * @FilePath: /sku-react-d/src/components/Upload/dragger.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";
export var SkuDragger = function (props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var klass = classNames('sku-uploader-dragger', {
        'is-dragover': dragOver
    });
    /**
     * @description: 松开
     * @param {DragEvent} e
     * @return {*}
     */
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    /**
     * @description: 拖拽
     * @param {DragEvent} e
     * @param {boolean} over
     * @return {*}
     */
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    return (React.createElement("div", { className: klass, onDragOver: function (e) { handleDrag(e, true); }, onDragLeave: function (e) { handleDrag(e, false); }, onDrop: handleDrop }, children));
};
