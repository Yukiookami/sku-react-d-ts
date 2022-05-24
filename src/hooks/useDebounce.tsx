/*
 * @Author: zxy
 * @Date: 2022-05-24 13:56:23
 * @LastEditTime: 2022-05-24 14:04:30
 * @FilePath: /sku-react-d/src/hooks/useDebounce.tsx
 */
import React, { useEffect, useState } from "react";

/**
 * @description: 定义防抖
 * @param {any} value
 * @param {*} delay
 * @return {*}
 */
function useDebounce (value: any, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce