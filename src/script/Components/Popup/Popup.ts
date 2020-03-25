import {
  createElementHelper,
  addClassToElementHelper,
  removeClassHelper,
} from '../../helpers/dom/index';
import { mainTitle } from './Title/Title';
import { backgroundDiv } from '../Background/Background';
import VendorRepository, { Vendor } from '../../Repositories/Vendors/index';
import { vendorList } from './List/List';
import { buttonsContainer } from './ButtonContainer/ButtonContainer';
import { createCookie, readCookie } from '../../helpers/cookie/index';

export class InitPopUp {
  private acceptedVendors: string[] = [];
  private vendors: Vendor[] = [];
  private cookieName: string = 'vendorList';
  private requiredProtocol: string = 'https:';

  private createPopup = (): HTMLElement => {
    const popup: HTMLElement = createElementHelper('div');
    addClassToElementHelper('popup', popup);
    return popup;
  }

  private acceptVendorCallback = (name: string): void => {
    const vendorName: string = name.split(" ").join("");
    const isVendorAlreadyAccepted: boolean = !!this.acceptedVendors.find(vendor => vendor.includes(vendorName));

    if (!isVendorAlreadyAccepted) {
      this.acceptedVendors.push(`${vendorName}`);
    } else {
      this.acceptedVendors = this.acceptedVendors.filter(vendor => {
        return !vendor.includes(vendorName)
      })
    }
  }

  private acceptCallback = (): void => {
    const body = document.querySelector('body');
    removeClassHelper('body-overflow-hidden', body);
    const concatenateVendors: string = this.acceptedVendors.toString();
    createCookie(this.cookieName, concatenateVendors);
  }

  private rejectCallback = (): void => {
    window.location.replace('https://www.google.com/')
  }

  private addElementsToPopup = async (): Promise<HTMLElement> => {
    const popup: HTMLElement = this.createPopup();
    const title: HTMLElement = mainTitle();
    const list: HTMLElement = vendorList(this.vendors, this.acceptVendorCallback);
    const buttons: HTMLElement = buttonsContainer(this.acceptCallback, this.rejectCallback);

    popup.appendChild(title);
    popup.appendChild(list);
    popup.appendChild(buttons);

    return popup;
  }

  private async fetchVendors(): Promise<Vendor[]> {
    const vendors = await VendorRepository.vendors();
    return vendors;
  }

  public initialization = async (): Promise<void> => {
    const documentProtocol: string = document.location.protocol;
    if (documentProtocol === this.requiredProtocol) {
      if (!readCookie(this.cookieName)) {
        this.vendors = await this.fetchVendors();
        const body: HTMLElement = document.querySelector('body');
        const popup: HTMLElement = await this.addElementsToPopup();
        addClassToElementHelper('body-overflow-hidden', body);
        body.appendChild(backgroundDiv());
        body.appendChild(popup);
      }
    }
  }
}
