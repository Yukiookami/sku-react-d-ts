var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useContext, useRef, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { SkuIcon } from "../Icon/Icon";
import { SkuTransition } from "../Transition/transition";
export var SkuSubMenu = function (props) {
    var index = props.index, title = props.title, className = props.className, children = props.children, isSeleted = props.isSeleted, subSelect = props.subSelect;
    var context = useContext(MenuContext);
    var openSubMenus = context.defaultOpenSubMenus;
    var isOpen = (index && context.mode === 'vertical' ? openSubMenus === null || openSubMenus === void 0 ? void 0 : openSubMenus.includes(index) : false);
    var _a = useState(isOpen), menuOpen = _a[0], setMenuOpen = _a[1];
    // 解决组件库内部报错
    var CssTransitionNodeRef = useRef(null);
    var classes = classNames('sku-menu-item submenu-item', className, {
        'is-active': context.index === index || isSeleted,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });
    var subMenuClasses = classNames('sku-submenu', {
        'menu-open': menuOpen
    });
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setMenuOpen(toggle);
        }, 300);
    };
    var handleClick = function (e) {
        setMenuOpen(!menuOpen);
        e.preventDefault();
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    var renderChildren = function () {
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childELement = child;
            if (childELement.type.displayName === 'MenuItem') {
                return React.cloneElement(childELement, {
                    index: "".concat(index, "-").concat(i),
                    subSelect: function (index) {
                        if (subSelect) {
                            subSelect(index);
                        }
                    }
                });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component");
            }
        });
        return (React.createElement(SkuTransition, { nodeRef: CssTransitionNodeRef, in: menuOpen, timeout: 300, animation: 'zoom-in-top' },
            React.createElement("ul", { ref: CssTransitionNodeRef, className: subMenuClasses }, childrenComponent)));
    };
    return (React.createElement("li", __assign({ key: index, className: classes }, hoverEvents),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(SkuIcon, { icon: "angle-down", className: "arrow-icon" })),
        renderChildren()));
};
SkuSubMenu.displayName = 'SubMenu';
