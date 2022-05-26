/*
 * @Author: zxy
 * @Date: 2022-05-23 15:21:51
 * @LastEditTime: 2022-05-24 19:54:50
 * @FilePath: /sku-react-d/src/components/AutoComplete/autoComplete.stories.tsx
 */
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkuAutoComplete } from './autoComplete'

export default {
  title: 'FORM/AutoComplete',
  component: SkuAutoComplete,
} as ComponentMeta<typeof SkuAutoComplete>;

const Template: ComponentStory<typeof SkuAutoComplete> = (args) => {
  const handleFetch = async (query: string) => {
    const res = await fetch(`https://api.github.com/search/users?q=${query}`);
    const { items } = await res.json();
    return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));
  }
  
  return (
    <SkuAutoComplete 
    fetchSuggestions={handleFetch}></SkuAutoComplete>
  )
};

export const Primary = Template.bind({});
Primary.args = {
}