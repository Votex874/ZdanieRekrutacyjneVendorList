import {
    createElementHelper,
    addClassToElementHelper,
  } from '../../helpers/dom/index';
  
  export const backgroundDiv = (): HTMLElement => {
    const backgroundDiv: HTMLElement = createElementHelper('div');
    addClassToElementHelper('background', backgroundDiv);
    return backgroundDiv;
  }