import {
  createElementHelper,
  addClassToElementHelper,
} from '../../../helpers/dom/index';
import { Vendor }   from '../../../Repositories/Vendors'
import { vendorListItem } from './ListItem/ListItem';

  
export const vendorList = (vendorList: Vendor[], callBackItem: (name: string) => void): HTMLElement => {
  const list: HTMLElement = createElementHelper('ul');
  addClassToElementHelper('popup__list', list);
  vendorList.map(vendorItem => {
    const item = vendorListItem(vendorItem.name, vendorItem.policyUrl, callBackItem);
    list.appendChild(item);
  })
  return list;
}