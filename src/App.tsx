/*
 * @Author: zxy
 * @Date: 2022-04-11 14:33:08
 * @LastEditTime: 2022-05-21 20:15:16
 * @FilePath: /sku-react-d/src/App.tsx
 */
import React from 'react';
import {SkuButton} from './components/Button/button';
import {SkuAlert} from './components/Alert/alert';
import {SkuMenu} from './components/Menu/menu';
import {SkuMenuItem} from './components/Menu/menuItem';
import {SkuSubMenu} from './components/Menu/subMenu';

// icon引用
import { SkuIcon } from './components/Icon/Icon';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
// icon引用

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

          <SkuAlert title='test Alert' type={'success'}></SkuAlert>

          <SkuAlert title='test Alert' type={'error'} closeble={false}></SkuAlert>

          <SkuAlert title='test Alert' type={'warning'}></SkuAlert>
        </div>

        <div>
          <SkuMenu defaultIndex={'0'} onSelect={(index) => console.log('click' + index)}>
            <SkuMenuItem> 
              cool link
            </SkuMenuItem>
            
            <SkuMenuItem disabled>  
              cool link 2
            </SkuMenuItem>

            <SkuSubMenu title='dropdown'>
              <SkuMenuItem> 
                dropdown 1 
              </SkuMenuItem>

              <SkuMenuItem> 
                dropdown 2
              </SkuMenuItem>

              <SkuMenuItem> 
                dropdown 3 
              </SkuMenuItem>
            </SkuSubMenu>

            <SkuMenuItem> 
              cool link 3
            </SkuMenuItem>
          </SkuMenu>

          <SkuMenu defaultIndex={'0'} onSelect={(index) => console.log('click' + index)} mode="vertical" defaultOpenSubMenus={['2']}>
            <SkuMenuItem> 
              cool link
            </SkuMenuItem>
            
            <SkuMenuItem disabled>  
              cool link 2
            </SkuMenuItem>

            <SkuSubMenu title='dropdown'>
              <SkuMenuItem> 
                dropdown 1 
              </SkuMenuItem>

              <SkuMenuItem> 
                dropdown 2
              </SkuMenuItem>

              <SkuMenuItem> 
                dropdown 3 
              </SkuMenuItem>
            </SkuSubMenu>

            <SkuMenuItem> 
              cool link 3
            </SkuMenuItem>
          </SkuMenu>

          <SkuIcon icon="coffee" theme='danger' size='10x'></SkuIcon>
        </div>
      </header>
    </div>
  );
}

export default App;
