import {Advert} from "../models/advert.model";
import {GARAGES} from "./mock-garages";
import {MODELS} from "./mock-models";

export const ADVERTS: Advert[] = [
  {
    id: 0,
    subtitle: "Chocolate dessert tart chocolate bar lollipop oat cake croissant.",
    description: "Biscuit sweet roll lollipop icing cookie danish toffee. Cheesecake oat cake cheesecake bear claw halvah. Dessert bear claw dragée sesame snaps gummi bears croissant tart sweet roll. Dragée dragée gummi bears bear claw sugar plum toffee. Lemon drops dessert toffee chocolate bar apple pie pie marzipan pastry. Gummi bears apple pie macaroon icing gummies. Tiramisu liquorice cupcake caramels icing.",
    km: 8560,
    price: 300000,
    color: "Black",
    doors: 4,
    releasedIn: 2001,
    createdAt: new Date(),
    isPublished: true,
    garage: GARAGES[0],
    car: MODELS[1],
    fuelType: 'Essence',
    photos: []
  },
  {
    id: 0,
    subtitle: "Chocolate dessert tart chocolate bar lollipop oat cake croissant.",
    description: "Biscuit sweet roll lollipop icing cookie danish toffee. Cheesecake oat cake cheesecake bear claw halvah. Dessert bear claw dragée sesame snaps gummi bears croissant tart sweet roll. Dragée dragée gummi bears bear claw sugar plum toffee. Lemon drops dessert toffee chocolate bar apple pie pie marzipan pastry. Gummi bears apple pie macaroon icing gummies. Tiramisu liquorice cupcake caramels icing.",
    km: 1542,
    price: 954480,
    color: "Green",
    doors: 5,
    releasedIn: 2015,
    createdAt: new Date(),
    isPublished: true,
    garage: GARAGES[2],
    car: MODELS[3],
    fuelType: 'Gazole',
    photos: []
  },
  {
    id: 0,
    subtitle: "Cookie pie cheesecake macaroon gummies. ",
    description: "Macaroon dragée tiramisu soufflé caramels cookie shortbread gummies. Wafer chocolate oat cake sweet roll sweet roll. Biscuit gingerbread dragée soufflé gingerbread fruitcake. Jelly-o cheesecake biscuit gummi bears cotton candy marshmallow.",
    km: 15265,
    price: 256000,
    color: "Red",
    doors: 3,
    releasedIn: 2009,
    createdAt: new Date(),
    isPublished: true,
    garage: GARAGES[1],
    car: MODELS[5],
    fuelType: 'Ethanol',
    photos: []
  },

]
