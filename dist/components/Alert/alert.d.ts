import React from "react";
declare type AlertType = 'success' | 'default' | 'error' | 'warning';
interface BaseAlertProps {
    title: string;
    description?: string;
    type?: AlertType;
    onColse?: () => void;
    /**
     * Can it be closed
     */
    closeble?: boolean;
    className?: string;
}
/**
 * Displays important alert messages.
 */
export declare const SkuAlert: React.FC<BaseAlertProps>;
export {};
