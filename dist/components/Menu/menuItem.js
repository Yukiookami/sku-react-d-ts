/*
 * @Author: zxy
 * @Date: 2022-04-15 16:37:46
 * @LastEditTime: 2022-05-21 20:16:15
 * @FilePath: /sku-react-d/src/components/Menu/menuItem.tsx
 */
import classNames from "classnames";
import React from "react";
import { useContext } from "react";
import { MenuContext } from "./menu";
export var SkuMenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children, subSelect = props.subSelect;
    var context = useContext(MenuContext);
    var classes = classNames('sku-menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && typeof index === 'string') {
            context.onSelect(index);
            if (subSelect) {
                subSelect(index);
            }
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
SkuMenuItem.displayName = 'MenuItem';
