/*
 * @Author: zxy
 * @Date: 2022-04-15 16:22:36
 * @LastEditTime: 2022-05-21 20:15:10
 * @FilePath: /sku-react-d/src/components/Menu/menu.tsx
 */
import React, { createContext, useState } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: '0' });
export var SkuMenu = function (props) {
    var defaultIndex = props.defaultIndex, className = props.className, mode = props.mode, style = props.style, onSelect = props.onSelect, children = props.children, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1];
    var _b = useState(false), isSeleted = _b[0], setIsSeleted = _b[1];
    var classes = classNames('sku-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus
    };
    /**
     * @description: 防止其他的结构被放入组件中
     * @param {*}
     * @return {*}
     */
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                    isSeleted: isSeleted,
                    subSelect: function (selIndex) {
                        var nowIndex = index.toString();
                        if (selIndex.slice(0, 1) === nowIndex.slice(0, 1) && selIndex.indexOf('-') !== -1) {
                            setIsSeleted(true);
                        }
                        else {
                            setIsSeleted(false);
                        }
                    }
                });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
SkuMenu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: []
};
