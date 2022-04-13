/*
 * @Author: zxy
 * @Date: 2022-04-11 14:33:08
 * @LastEditTime: 2022-04-13 16:47:38
 * @FilePath: /sku-react-d/src/App.tsx
 */
import React from 'react';
import SkuButton, { ButtonType, ButtonSize } from './components/Button/button';
import SkuAlert, { AlertType } from './components/Alert/alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SkuButton>hello</SkuButton>

          <SkuButton disabled>Disabled Button</SkuButton>

          <SkuButton size={ButtonSize.Large}>Large Button</SkuButton>

          <SkuButton size={ButtonSize.Small}>Small Button</SkuButton>

          <SkuButton btnType={ButtonType.Primary}>Primary Button</SkuButton>

          <SkuButton btnType={ButtonType.Danger}>Danger Button</SkuButton>

          <SkuButton btnType={ButtonType.Link} href="www.bilibili.com">Link Button</SkuButton>

          <SkuButton btnType={ButtonType.Link} href="www.bilibili.com" disabled>Link Button disabled</SkuButton>
        </div>
        <br></br>
        <div>
          <SkuAlert title='test Alert'></SkuAlert>

          <SkuAlert title='test Alert' description='test des' onColse={() => alert('close')}></SkuAlert>

          <SkuAlert title='test Alert' type={AlertType.success}></SkuAlert>

          <SkuAlert title='test Alert' type={AlertType.danger} closeble={false}></SkuAlert>

          <SkuAlert title='test Alert' type={AlertType.warning}></SkuAlert>
        </div>
      </header>
    </div>
  );
}

export default App;
