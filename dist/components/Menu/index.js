import { SkuMenu } from './menu';
import { SkuMenuItem } from './menuItem';
import { SkuSubMenu } from './subMenu';
var TransMenu = SkuMenu;
TransMenu.Item = SkuMenuItem;
TransMenu.SubMenu = SkuSubMenu;
export default TransMenu;
