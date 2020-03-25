import ApiClient from '../../ApiClient/index';

export interface Vendor {
  id: number,
  name: string,
  policyUrl: string,
}

export default class VendorRepository {
  public static async vendors(): Promise<Vendor[]> {
    const vendorData = await ApiClient.getVendors();
    return vendorData.vendors.map(vendor => ({
      id: vendor.id,
      name: vendor.name,
      policyUrl: vendor.policyUrl,
    }));
  }
}