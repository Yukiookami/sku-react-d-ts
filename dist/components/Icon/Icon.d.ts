import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
/**
 * Icon component based on fortawesome
 *
 * doc: https://fontawesome.com/v6/icons/angle-down?s=solid
 */
export declare const SkuIcon: React.FC<IconProps>;
