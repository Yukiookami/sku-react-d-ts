/*
 * @Author: zxy
 * @Date: 2022-05-23 14:33:35
 * @LastEditTime: 2022-05-24 14:07:45
 * @FilePath: /sku-react-d/src/components/AutoComplete/autoComplete.tsx
 */
import React, { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { SkuInput, InputProps } from "../Input/input";
import { SkuIcon } from '../Icon/Icon'
import useDebounce from '../../hooks/useDebounce'

// 让用户可以自由传入类型
interface DataSourceObject {
  value: string;
}

export type DataSorceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps ,'onSelect'> {
  fetchSuggestions: (str: string) => DataSorceType[] | Promise<DataSorceType[]>;
  onSelect?: (item:DataSorceType) => void;
  renderOption?: (item:DataSorceType) => ReactElement;
}

export const SkuAutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restPorps
  } = props

  const [inputValue, setInputValue] = useState(value as string)
  const [suggestions, setSuggestions] = useState<DataSorceType[]>([])
  const [loading, setLoading] = useState(false)

  // 防抖
  const debounceValue = useDebounce(inputValue, 300)

  useEffect(() => {
    if (debounceValue) {
      const results = fetchSuggestions(debounceValue)
      if (results instanceof Promise) {
        setLoading(true)

        results.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }
  }, [debounceValue])

  /**
   * @description: change event, 支持异步
   * @param {ChangeEvent} e
   * @return {*}
   */  
  const handleChange = async (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
  }

  /**
   * @description: 选择
   * @param {string} item
   * @return {*}
   */  
  const handleSelect = (item: DataSorceType) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
  }

  /**
   * @description: 用户自定义模版
   * @param {string} item
   * @return {*}
   */  
  const renderTemplate = (item: DataSorceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          return (
            <li key={index} onClick={() => handleSelect(item)}>
              {renderTemplate(item)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="sku-auto-complete">
      <SkuInput
      value={inputValue}
      onChange={handleChange}
      {...restPorps}
      ></SkuInput>
      { loading &&
            <div className="suggstions-loading-icon">
              <SkuIcon icon="spinner" spin/>
            </div>
          }
      {suggestions.length > 0 && generateDropdown()}
    </div>
  )
}