import {Garage} from "./garage.model";

export interface User {
  id: number;
  email: string;
  roles: [string];
  password: string;
  name: string;
  firstName: string;
  phoneNumber: string;
  siret: string;
  createdAt: Date;
  garages: Garage[];
  token?: string;
}
