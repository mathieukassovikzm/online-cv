import { IContactBox1Model, IContactBox2Model, IContactModel } from 'src/app/models/contact';

const contactBox1: IContactBox1Model = {
  town: 'Rennes',
  postalCode: '35000',
};
const contactBox2: IContactBox2Model = {
  email: 'mathieu.lebellec.pro@gmail.com',
};

export const contactFr: IContactModel = {
  contactBox1: {
    ...contactBox1,
    country: 'France',
  },
  contactBox2: {
    ...contactBox2,
  },
  contactBox3: {
    workStatus: 'En recherche active d\'emploi',
    disponibility: 'Disponible à partir du 1er Avril 2026',
  },
};

export const contactEn: IContactModel = {
  contactBox1: {
    ...contactBox1,
    country: 'France',
  },
  contactBox2: {
    ...contactBox2,
  },
  contactBox3: {
    workStatus: 'Actively looking for a job',
    disponibility: 'Available from April 1, 2026',
  },
};

export const contactEs: IContactModel = {
  contactBox1: {
    ...contactBox1,
    country: 'Francia',
  },
  contactBox2: {
    ...contactBox2,
  },
  contactBox3: {
    workStatus: 'Buscando activamente empleo',
    disponibility: 'Disponible a partir del 1 de abril de 2026',
  },
};