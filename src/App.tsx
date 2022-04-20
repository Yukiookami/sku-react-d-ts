/*
 * @Author: zxy
 * @Date: 2022-04-11 14:33:08
 * @LastEditTime: 2022-04-20 17:39:26
 * @FilePath: /sku-react-d/src/App.tsx
 */
import React from 'react';
import SkuButton from './components/Button/button';
import SkuAlert from './components/Alert/alert';
import SkuMenu from './components/Menu/menu';
import SkuMenuItem from './components/Menu/menuItem';

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

        <div>
          <SkuMenu defaultIndex={0} onSelect={(index) => alert(index)}>
            <SkuMenuItem index={0}> 
              cool link
            </SkuMenuItem>
            
            <SkuMenuItem index={1} disabled>  
              cool link 2
            </SkuMenuItem>

            <SkuMenuItem index={2}> 
              cool link 3
            </SkuMenuItem>
          </SkuMenu>
        </div>
      </header>
    </div>
  );
}

export default App;
