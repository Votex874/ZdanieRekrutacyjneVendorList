export const createElementHelper = (element: string): HTMLElement =>
  document.createElement(element)

export const addClassToElementHelper = (className: string, element: HTMLElement): void =>
  element.classList.add(className)

export const addAttributeToElementHelper = (attrName: string, attrValue: string, element: HTMLElement): void =>
  element.setAttribute(attrName, attrValue)

export const addTextToElementHelper = (text: string, element: HTMLElement) =>
  element.innerText = text;

export const checkIfClassExistHelper = (className: string, element: HTMLElement) => 
  element.classList.contains(className);

export const removeClassHelper = (className: string, element: HTMLElement) =>
  element.classList.remove(className);
