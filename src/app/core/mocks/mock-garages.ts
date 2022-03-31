import {Garage} from "../models/garage.model";

export const GARAGES: Garage[] = [
  {
    id: 0,
    name: 'Garage Du Chato',
    phoneNumber: '0526412512',
    addressLine1: '54 rue de la Cathédrale',
    addressLine2: '',
    addressLine3: '',
    zipCode: '67000',
    city: 'Strasbourg',
    createdAt: new Date(),
    owner: '0',
    adverts: [],
  },
    {
    id: 1,
    name: 'Garage Depré',
    phoneNumber: '0514236526',
    addressLine1: '22 avenue des Vaches',
    addressLine2: 'CEDEX 7500',
    addressLine3: '',
    zipCode: '67100',
    city: 'Strasbourg',
    createdAt: new Date(),
    owner: '0',
    adverts: [],
  },
      {
    id: 2,
    name: 'Garage Dubonvoyage',
    phoneNumber: '+33128521326',
    addressLine1: '59 Impasse de la Vie',
    addressLine2: 'BP 85000',
    addressLine3: 'CEDEX 251',
    zipCode: '67200',
    city: 'Strasbourg',
    createdAt: new Date(),
    owner: '1',
    adverts: [],
  }
]
