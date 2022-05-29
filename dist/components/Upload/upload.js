var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*
 * @Author: zxy
 * @Date: 2022-05-27 00:49:25
 * @LastEditTime: 2022-05-28 01:18:07
 * @FilePath: /sku-react-d/src/components/Upload/upload.tsx
 */
import React, { useRef, useState } from "react";
import axios from "axios";
import { SkuButton } from "../Button/button";
import { SkuUploadList } from "./uploadList";
import { SkuDragger } from './dragger';
export var SkuUpload = function (props) {
    var action = props.action, defaultFileList = props.defaultFileList, beforeUpload = props.beforeUpload, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, onChange = props.onChange, onRemove = props.onRemove, headers = props.headers, name = props.name, data = props.data, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, drag = props.drag, children = props.children;
    var fileInput = useRef(null);
    var _a = useState(defaultFileList || []), fileList = _a[0], setFileList = _a[1];
    /**
     * @description: 新增文件列表
     * @param {UploadFile} updateFile
     * @param {Partial} updateObj
     * @return {*}
     */
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    /**
     * @description: 删除文件列表
     * @param {UploadFile} file
     * @return {*}
     */
    var handleRemove = function (file) {
        setFileList(function (prevList) {
            return prevList.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    /**
     * @description: 点击按钮展开input
     * @return {*}
     */
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var handleFileChange = function (e) {
        var files = e.target.files;
        if (!files) {
            return;
        }
        uploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    /**
     * @description: 上传文件,包含三种生命周期
     * @param {FileList} files
     * @return {*}
     */
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) { return __awaiter(void 0, void 0, void 0, function () {
            var res, processedFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!beforeUpload) return [3 /*break*/, 1];
                        postReq(file);
                        return [3 /*break*/, 4];
                    case 1:
                        res = beforeUpload(file);
                        if (!(res && res instanceof Promise)) return [3 /*break*/, 3];
                        return [4 /*yield*/, res];
                    case 2:
                        processedFile = _a.sent();
                        postReq(processedFile);
                        return [3 /*break*/, 4];
                    case 3:
                        if (res !== false) {
                            postReq(file);
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * @description: 文件上传
     * @param {File} file
     * @return {*}
     */
    var postReq = function (file) { return __awaiter(void 0, void 0, void 0, function () {
        var _file, formData, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _file = {
                        uid: Date.now() + 'upload-file',
                        status: 'ready',
                        name: file.name,
                        size: file.size,
                        percent: 0,
                        raw: file
                    };
                    setFileList(function (prevList) { return __spreadArray([_file], prevList, true); });
                    formData = new FormData();
                    formData.append(name || 'file', file);
                    if (data) {
                        Object.keys(data).forEach(function (key) {
                            formData.append(key, data[key]);
                        });
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios.post(action, formData, {
                            headers: __assign({ 'Content-Type': 'multipart/form-data' }, headers),
                            withCredentials: withCredentials,
                            onUploadProgress: function (e) {
                                var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                                if (percentage <= 100) {
                                    updateFileList(_file, { percent: percentage, status: 'uploading' });
                                    if (onProgress) {
                                        onProgress(percentage, file);
                                    }
                                }
                            }
                        })];
                case 2:
                    res = _a.sent();
                    updateFileList(_file, { status: 'success', response: res.data });
                    if (onSuccess) {
                        onSuccess(res.data, file);
                    }
                    if (onChange) {
                        onChange(file);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    updateFileList(_file, { status: 'error', error: err_1 });
                    if (onError) {
                        onError(err_1, file);
                    }
                    if (onChange) {
                        onChange(file);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "sku-upload-compent" },
        React.createElement("div", { className: "sku-upload-input", style: { display: 'inline-block' }, onClick: handleClick },
            drag ?
                React.createElement(SkuDragger, { onFile: function (files) { uploadFiles(files); } }, children) :
                React.createElement(SkuButton, { btnType: "primary", onClick: handleClick }, children),
            React.createElement("input", { className: "sku-file-input", style: { display: 'none' }, ref: fileInput, onChange: handleFileChange, type: "file", accept: accept, multiple: multiple })),
        React.createElement(SkuUploadList, { fileList: fileList, onRemove: handleRemove })));
};
SkuUpload.defaultProps = {
    drag: false,
    multiple: false,
    withCredentials: false
};
