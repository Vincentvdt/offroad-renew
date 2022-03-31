import {Garage} from "./garage.model";
import {Model} from "./model.model";

export interface Advert {
  id: number;
  subtitle: string;
  description: string;
  km: number;
  price: number;
  color: string;
  doors: number;
  releasedIn: number;
  createdAt: Date;
  isPublished: boolean;
  garage: Garage;
  car: Model;
  fuelType: string;
  photos: []
}
