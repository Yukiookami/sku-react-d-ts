import React from "react";
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    isSeleted?: boolean;
    subSelect?: (index: string) => void;
}
export declare const SkuSubMenu: React.FC<SubMenuProps>;
