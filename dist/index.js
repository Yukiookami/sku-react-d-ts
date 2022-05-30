/*
 * @Author: zxy
 * @Date: 2022-04-11 14:33:08
 * @LastEditTime: 2022-05-31 00:46:09
 * @FilePath: /sku-react-d/src/index.tsx
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
export { default as SkuButton } from './components/Button';
export { default as SkuMenu } from './components/Menu';
export { default as SkuAutoComplete } from './components/AutoComplete/intex';
export { default as SkuIcon } from './components/Icon';
export { default as SkuInput } from './components/Input';
export { default as SkuProgress } from './components/Progress';
export { default as SkuTransition } from './components/Transition';
export { default as SkuUpload } from './components/Upload';
