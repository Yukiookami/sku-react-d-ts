import React from "react";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}
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
export declare const SkuIcon: React.FC<IconProps>;
