import {User} from "../models/user.model";

export const USERS: User[] = [
  {
    id: 0,
    email: "user@user.com",
    roles: ['ROLE_USER'],
    password: 'nomdp',
    name: 'User',
    firstName: 'UserName',
    phoneNumber: '0254565232',
    siret: '45236515458956',
    createdAt: new Date(),
    garages: [],
    token: '',
  },
    {
    id: 1,
    email: "user1@user1.com",
    roles: ['ROLE_USER'],
    password: 'nomdp1',
    name: 'User1',
    firstName: 'UserName1',
    phoneNumber: '0545851235',
    siret: '95862532512565',
    createdAt: new Date(),
    garages: [],
    token: '',
  }
]
