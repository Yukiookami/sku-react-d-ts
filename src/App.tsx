/*
 * @Author: zxy
 * @Date: 2022-04-11 14:33:08
 * @LastEditTime: 2022-04-12 17:01:09
 * @FilePath: /sku-react-d/src/App.tsx
 */
import React from 'react';
import SkuButton, { ButtonType, ButtonSize } from './components/Button/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SkuButton>hello</SkuButton>

        <SkuButton disabled>Disabled Button</SkuButton>

        <SkuButton size={ButtonSize.Large}>Large Button</SkuButton>

        <SkuButton size={ButtonSize.Small}>Small Button</SkuButton>

        <SkuButton btnType={ButtonType.Primary}>Primary Button</SkuButton>

        <SkuButton btnType={ButtonType.Danger}>Danger Button</SkuButton>

        <SkuButton btnType={ButtonType.Link} href="www.bilibili.com">Link Button</SkuButton>

        <SkuButton btnType={ButtonType.Link} href="www.bilibili.com" disabled>Link Button disabled</SkuButton>
      </header>
    </div>
  );
}

export default App;
