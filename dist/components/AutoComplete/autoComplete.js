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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
/*
 * @Author: zxy
 * @Date: 2022-05-23 14:33:35
 * @LastEditTime: 2022-05-29 19:35:43
 * @FilePath: /sku-react-d/src/components/AutoComplete/autoComplete.tsx
 */
import React, { useEffect, useRef, useState } from "react";
import { SkuInput } from "../Input/input";
import { SkuIcon } from '../Icon/Icon';
import useDebounce from '../../hooks/useDebounce';
import classNames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';
import { SkuTransition } from "../Transition/transition";
export var SkuAutoComplete = function (props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, value = props.value, renderOption = props.renderOption, restPorps = __rest(props, ["fetchSuggestions", "onSelect", "value", "renderOption"]);
    var _a = useState(value), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState([]), suggestions = _b[0], setSuggestions = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState(-1), highlightIndex = _d[0], setHightlightIndex = _d[1];
    var _e = useState(false), showDropdown = _e[0], setShowDropdown = _e[1];
    // 防止选择后依然搜索
    var triggerSearch = useRef(false);
    // dom
    var compontentRef = useRef(null);
    // 防抖
    var debounceValue = useDebounce(inputValue, 300);
    // 自定义hook
    useEffect(function () {
        if (debounceValue && triggerSearch.current) {
            setSuggestions([]);
            var results = fetchSuggestions(debounceValue);
            if (results instanceof Promise) {
                setLoading(true);
                results.then(function (data) {
                    setLoading(false);
                    setSuggestions(data);
                    if (data.length > 0) {
                        setShowDropdown(true);
                    }
                });
            }
            else {
                setSuggestions(results);
                setShowDropdown(true);
                if (results.length > 0) {
                    setShowDropdown(true);
                }
            }
        }
        else {
            setShowDropdown(false);
        }
        setHightlightIndex(-1);
    }, [debounceValue, fetchSuggestions]);
    useClickOutside(compontentRef, function () { return setSuggestions([]); });
    // end
    /**
     * @description: change event, 支持异步
     * @param {ChangeEvent} e
     * @return {*}
     */
    var handleChange = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var value;
        return __generator(this, function (_a) {
            value = e.target.value.trim();
            triggerSearch.current = true;
            setInputValue(value);
            return [2 /*return*/];
        });
    }); };
    /**
     * @description: 选择
     * @param {string} item
     * @return {*}
     */
    var handleSelect = function (item) {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    /**
     * @description: 用户自定义模版
     * @param {string} item
     * @return {*}
     */
    var renderTemplate = function (item) {
        return renderOption ? renderOption(item) : item.value;
    };
    /**
     * @description: 下拉菜单
     * @return {*}
     */
    var generateDropdown = function () {
        return (React.createElement(SkuTransition, { in: showDropdown || loading, animation: "zoom-in-top", timeout: 300, onExited: function () { setSuggestions([]); } },
            React.createElement("ul", { className: "sku-suggestion-list" },
                loading &&
                    React.createElement("div", { className: "suggstions-loading-icon" },
                        React.createElement(SkuIcon, { icon: "spinner", spin: true })),
                suggestions.map(function (item, index) {
                    var cnames = classNames('suggestion-item', {
                        'is-active': index === highlightIndex
                    });
                    return (React.createElement("li", { key: index, className: cnames, onClick: function () { return handleSelect(item); } }, renderTemplate(item)));
                }))));
    };
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1;
        }
        setHightlightIndex(index);
    };
    var handleKeyDown = function (e) {
        switch (e.key) {
            case 'Enter':
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]);
                }
                break;
            case 'ArrowUp':
                highlight(highlightIndex - 1);
                break;
            case 'ArrowDown':
                highlight(highlightIndex + 1);
                break;
            case 'Escape':
                setShowDropdown(false);
                break;
            default:
                break;
        }
    };
    return (React.createElement("div", { className: "sku-auto-complete", ref: compontentRef },
        React.createElement(SkuInput, __assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown }, restPorps)),
        generateDropdown()));
};
