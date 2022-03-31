import {Advert} from "./advert.model";

export interface Garage {
  id: number;
  name: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  zipCode: string;
  city: string;
  createdAt: Date;
  owner: string;
  adverts: Advert[];
}
