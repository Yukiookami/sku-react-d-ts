import React from "react";
export interface MenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    isSeleted?: boolean;
    subSelect?: (index: string) => void;
}
export declare const SkuMenuItem: React.FC<MenuItemProps>;
