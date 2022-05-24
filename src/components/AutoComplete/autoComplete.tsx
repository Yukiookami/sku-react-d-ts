/*
 * @Author: zxy
 * @Date: 2022-05-23 14:33:35
 * @LastEditTime: 2022-05-24 19:45:38
 * @FilePath: /sku-react-d/src/components/AutoComplete/autoComplete.tsx
 */
import React, { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import { SkuInput, InputProps } from "../Input/input";
import { SkuIcon } from '../Icon/Icon';
import useDebounce from '../../hooks/useDebounce';
import classNames from 'classnames';
import useClickOutside from '../../hooks/useClickOutside';
import Transition from "../Transition/transition";

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
  const [highlightIndex, setHightlightIndex] = useState(-1)
  const [ showDropdown, setShowDropdown] = useState(false)
  // 防止选择后依然搜索
  const triggerSearch = useRef(false)
  // dom
  const compontentRef = useRef<HTMLDivElement>(null)

  // 防抖
  const debounceValue = useDebounce(inputValue, 300)

  // 自定义hook
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      setSuggestions([])
      const results = fetchSuggestions(debounceValue)
      if (results instanceof Promise) {
        setLoading(true)
        results.then(data => {
          setLoading(false)
          setSuggestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSuggestions(results)
        setShowDropdown(true)
        if (results.length > 0) {
          setShowDropdown(true)
        } 
      }
    } else {
      setShowDropdown(false)
    }
    setHightlightIndex(-1)
  }, [debounceValue, fetchSuggestions])
  
  useClickOutside(compontentRef, () => setSuggestions([]))
  // end

  /**
   * @description: change event, 支持异步
   * @param {ChangeEvent} e
   * @return {*}
   */  
  const handleChange = async (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    triggerSearch.current = true
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
    triggerSearch.current = false
  }

  /**
   * @description: 用户自定义模版
   * @param {string} item
   * @return {*}
   */  
  const renderTemplate = (item: DataSorceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  /**
   * @description: 下拉菜单
   * @return {*}
   */  
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {setSuggestions([])}}
      >
        <ul className="sku-suggestion-list">
          { loading &&
            <div className="suggstions-loading-icon">
              <SkuIcon icon="spinner" spin/>
            </div>
          }
          {suggestions.map((item, index) => {
            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })
            return (
              <li key={index} className={cnames} onClick={() => handleSelect(item)}>
                {renderTemplate(item)}
              </li>
            )
          })}
        </ul>
      </Transition>
    )
  }

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    
    setHightlightIndex(index)
  }

  const handleKeyDown = (e: any) => {
    switch(e.key) {
      case 'Enter':
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 'ArrowUp':
        highlight(highlightIndex - 1)
        break
      case 'ArrowDown':
        highlight(highlightIndex + 1)
        break
      case 'Escape':
        setShowDropdown(false)
        break
      default:
        break
    }
  }

  return (
    <div className="sku-auto-complete" ref={compontentRef}>
      <SkuInput
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
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