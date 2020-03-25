import {
    createElementHelper,
    addClassToElementHelper,
  } from '../../../helpers/dom/index';
  import { button } from '../Button/Button';
  
  export const buttonsContainer = (acceptCallback: () => void, rejectCallback: () => void): HTMLElement => {
    const acceptButton: HTMLElement = button('accept', acceptCallback);
    const rejectButton: HTMLElement = button('reject', rejectCallback);
    const buttonsContainer: HTMLElement = createElementHelper('div');
    addClassToElementHelper('popup__buttons-container', buttonsContainer);
    buttonsContainer.appendChild(acceptButton);
    buttonsContainer.appendChild(rejectButton);

    return buttonsContainer;
  }