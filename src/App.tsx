/*
 * @Author: zxy
 * @Date: 2022-04-11 14:33:08
 * @LastEditTime: 2022-04-15 16:42:53
 * @FilePath: /sku-react-d/src/App.tsx
 */
import React from 'react';
import SkuButton from './components/Button/button';
import SkuAlert from './components/Alert/alert';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <SkuButton>hello</SkuButton>

          <SkuButton disabled>Disabled Button</SkuButton>

          <SkuButton size={'lg'}>Large Button</SkuButton>

          <SkuButton size={'sm'}>Small Button</SkuButton>

          <SkuButton btnType={'primary'}>Primary Button</SkuButton>

          <SkuButton btnType={'danger'}>Danger Button</SkuButton>

          <SkuButton btnType={'link'} href="www.bilibili.com">Link Button</SkuButton>

          <SkuButton btnType={'link'} href="www.bilibili.com" disabled>Link Button disabled</SkuButton>
        </div>
        <br></br>
        <div>
          <SkuAlert title='test Alert'></SkuAlert>

          <SkuAlert title='test Alert' description='test des' onColse={() => alert('close')}></SkuAlert>

          <SkuAlert title='test Alert' type={'suc'}></SkuAlert>

          <SkuAlert title='test Alert' type={'dan'} closeble={false}></SkuAlert>

          <SkuAlert title='test Alert' type={'warn'}></SkuAlert>
        </div>

        <div></div>
      </header>
    </div>
  );
}

export default App;
