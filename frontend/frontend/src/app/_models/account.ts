import { Role } from './role';

export class Account {
    id?: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    role?: Role;
    password?: string;
    jwtToken?: string;
    status?: string;
}