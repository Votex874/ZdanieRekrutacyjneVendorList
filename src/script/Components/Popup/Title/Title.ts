import {
  createElementHelper,
  addClassToElementHelper,
  addTextToElementHelper,
} from '../../../helpers/dom/index';

export const mainTitle = (): HTMLElement => {
  const titleText = "GDPR consent";
  const title: HTMLElement = createElementHelper('h2');
  addClassToElementHelper('popup__title', title);
  addTextToElementHelper(titleText, title);
  return title;
}