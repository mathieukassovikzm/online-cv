export interface IHomeModel {
  lstRecap: IRecapModel[];
  lstRecommendations: IRecommendationModel[];
  lstLogos: IEnterpriseModel[];
}

export interface IRecapModel {
  libelle: string;
  value: number;
}

export interface IRecommendationModel {
  id?: number;
  nom: string;
  enterprise: string;
  email?: string;
  phone?: string;
  text: string;
  photo?: string;
}

export interface IEnterpriseModel {
  name: string;
  logo: string;
  alt: string;
}
