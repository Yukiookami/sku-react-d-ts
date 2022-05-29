import { FC } from "react";
import { UploadFile } from "./upload";
interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}
export declare const SkuUploadList: FC<UploadListProps>;
export {};
