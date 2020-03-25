import {
    createElementHelper,
    addClassToElementHelper,
    addTextToElementHelper,
  } from '../../../helpers/dom/index';
  
  export const button = (name: string, callback: () => void): HTMLElement => {
    const button: HTMLElement = createElementHelper('button');
    addClassToElementHelper('popup__button', button);
    addTextToElementHelper(name, button);
    button.addEventListener('click', () => callback());
    return button;
  }