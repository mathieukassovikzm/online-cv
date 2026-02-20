export interface IContactModel {
  contactBox1?: IContactBox1Model;
  contactBox2?: IContactBox2Model;
  contactBox3?: IContactBox3Model;
}
export interface IContactBox1Model {
  country?: string;
  town?: string;
  street?: string;
  postalCode?: string;
}
export interface IContactBox2Model {
  email?: string;
  phone?: string;
}
export interface IContactBox3Model {
  workStatus?: string;
  disponibility?: string;
}
