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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/**
 * Icon component based on fortawesome
 *
 * use component in React:
 *
 * import { SkuIcon } from './components/Icon/Icon'; <br>
 * import { library } from '@fortawesome/fontawesome-svg-core';<br>
 * import { fas } from '@fortawesome/free-solid-svg-icons';<br>
 * library.add(fas)
 *
 * doc: https://fontawesome.com/v6/icons/angle-down?s=solid
 */
export var SkuIcon = function (props) {
    var _a;
    var className = props.className, theme = props.theme, restPropes = __rest(props, ["className", "theme"]);
    var classes = classNames('sku-icon', className, (_a = {},
        _a["icon-".concat(theme)] = theme,
        _a));
    return (React.createElement(FontAwesomeIcon, __assign({ className: classes }, restPropes)));
};
