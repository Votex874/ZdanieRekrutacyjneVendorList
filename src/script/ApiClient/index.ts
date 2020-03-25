export default class ApiClient {
  private static vendorsUrl: string = "https://api.optad360.com/vendorlist";

  private static async get<T>(url: string): Promise<T> {
    try {
      const fetchedData = await fetch(url);
      const dataJson: T = await fetchedData.json();
      return dataJson;
    } catch(e) {
      console.log(e, 'error');
    }
  }

  public static async getVendors(): Promise<any> {
    return await this.get(this.vendorsUrl);
  }
}