/*
 * @Author: zxy
 * @Date: 2022-05-24 13:56:23
 * @LastEditTime: 2022-05-24 14:04:30
 * @FilePath: /sku-react-d/src/hooks/useDebounce.tsx
 */
import { useEffect, useState } from "react";
/**
 * @description: 定义防抖
 * @param {any} value
 * @param {*} delay
 * @return {*}
 */
function useDebounce(value, delay) {
    if (delay === void 0) { delay = 300; }
    var _a = useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    useEffect(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}
export default useDebounce;
