/*
 * @Author: zxy
 * @Date: 2022-04-13 14:59:40
 * @LastEditTime: 2022-05-21 18:15:05
 * @FilePath: /sku-react-d/src/components/Alert/alert.tsx
 */
import React, { useState } from "react";
import classNames from "classnames";
/**
 * Displays important alert messages.
 */
export var SkuAlert = function (props) {
    var _a;
    var _b = useState(false), hide = _b[0], setHide = _b[1];
    var _c = useState(false), relHide = _c[0], setRelHide = _c[1];
    var title = props.title, description = props.description, type = props.type, onColse = props.onColse, closeble = props.closeble, className = props.className;
    var classes = classNames('sku-alert', className, (_a = {},
        _a["sku-alert-".concat(type)] = type,
        _a["sku-hide-alert"] = hide,
        _a["sku-rel-hide"] = relHide,
        _a));
    var titleClass = classNames('sku-alert-title', {
        'sku-bold-title': description,
        'sku-bold-des': !description
    });
    var handleClose = function () {
        if (onColse) {
            onColse();
        }
        setHide(true);
        setTimeout(function () {
            setRelHide(true);
        }, 300);
    };
    return (React.createElement("div", { className: classes },
        React.createElement("div", { className: "sku-alert-top-box" },
            React.createElement("span", { className: titleClass }, title),
            closeble && React.createElement("i", { className: "sku-alert-close", onClick: handleClose })),
        description && React.createElement("span", { className: "sku-bold-des" }, description)));
};
SkuAlert.defaultProps = {
    type: 'default',
    closeble: true
};
