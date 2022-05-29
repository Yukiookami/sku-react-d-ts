/*
 * @Author: zxy
 * @Date: 2022-05-27 22:58:02
 * @LastEditTime: 2022-05-27 23:01:33
 * @FilePath: /sku-react-d/src/components/Progress/progress.tsx
 */
import React from 'react';
export var SkuProgress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme;
    return (React.createElement("div", { className: "sku-progress-bar", style: styles },
        React.createElement("div", { className: "sku-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") } },
            React.createElement("div", { className: "sku-progress-bar-inner color-".concat(theme), style: { width: "".concat(percent, "%") } }, showText && React.createElement("span", { className: "inner-text" }, "".concat(percent, "%"))))));
};
SkuProgress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary",
};
