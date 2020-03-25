import {
  createElementHelper,
  addClassToElementHelper,
  addTextToElementHelper,
  addAttributeToElementHelper,
  checkIfClassExistHelper,
  removeClassHelper,
  } from '../../../../helpers/dom/index';
  
export const vendorListItem = (
    name: string,
    policyUrl: string,
    callBack: (name: string) => void
  ): HTMLElement => {

  const listItem: HTMLElement = createElementHelper('li');
  addClassToElementHelper('popup__item', listItem);

  const nameItem: HTMLElement = createElementHelper('h3');
  addClassToElementHelper('popup__item-name', nameItem);
  addTextToElementHelper(name, nameItem);

  const linkItem: HTMLElement = createElementHelper('a');
  addClassToElementHelper('popup__item-link', linkItem);
  addTextToElementHelper('privacy-policy', linkItem);
  addAttributeToElementHelper('href', policyUrl, linkItem);
  addAttributeToElementHelper('target', "_blank", linkItem);

  const acceptItem: HTMLElement = createElementHelper('button');
  addClassToElementHelper('popup__item-button', acceptItem);
  addTextToElementHelper('Agree', acceptItem);
  acceptItem.addEventListener('click', function() {
    const activeClassButton: string = 'popup__item-button--active';
    if (!checkIfClassExistHelper(activeClassButton, this)) {
      addClassToElementHelper(activeClassButton, this);
    } else {
      removeClassHelper(activeClassButton, this);
    }
    callBack(name)
  });

  listItem.appendChild(nameItem);
  listItem.appendChild(linkItem);
  listItem.appendChild(acceptItem);

  return listItem;
}