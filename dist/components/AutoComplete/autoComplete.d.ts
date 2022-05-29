import React, { ReactElement } from "react";
import { InputProps } from "../Input/input";
interface DataSourceObject {
    value: string;
}
export declare type DataSorceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSorceType[] | Promise<DataSorceType[]>;
    onSelect?: (item: DataSorceType) => void;
    renderOption?: (item: DataSorceType) => ReactElement;
}
export declare const SkuAutoComplete: React.FC<AutoCompleteProps>;
export {};
