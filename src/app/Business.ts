export interface IBusiness {
  _id: string,
  name: string,
  entrepreneur_id: string,
  menu_ids: [],
  city: string,
  zip: string,
  street: string
}

export class Business implements IBusiness {
  _id: string;
  city: string;
  entrepreneur_id: string;
  menu_ids: [];
  name: string;
  street: string;
  zip: string;

  constructor(_id: string, city: string, entrepreneur_id: string, menu_ids: [], name: string, street: string, zip: string) {
    this._id = _id;
    this.city = city;
    this.entrepreneur_id = entrepreneur_id;
    this.menu_ids = menu_ids;
    this.name = name;
    this.street = street;
    this.zip = zip;
  }

}
