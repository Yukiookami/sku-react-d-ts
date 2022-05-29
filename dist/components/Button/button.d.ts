import React from "react";
export declare type ButtonSize = 'lg' | 'sm' | 'mid';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseBttonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> & BaseBttonProps;
declare type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> & BaseBttonProps;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Commonly used button.
 */
export declare const SkuButton: React.FC<ButtonProps>;
export {};
