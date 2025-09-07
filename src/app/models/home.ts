
export interface IHomeModel {
  lstRecap: IRecapModel[];
  lstLogos: IEnterpriseModel[];
}

export interface IRecapModel {
  libelle: string;
  value: number;
}

export interface IEnterpriseModel {
  name: string;
  logo: string;
  alt: string
}
