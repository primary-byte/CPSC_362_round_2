import { BlogEntry } from "src/blog/model/blog-entry.interface";

export interface User {
    id?: number;
    title?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    profileImage?: string;
    blogEntries?: BlogEntry[];
}

export enum UserRole {
    ADMIN = 'admin',
    CHIEFEDITOR = 'chiefeditor',    
    EDITOR = 'editor',
    USER = 'user'
}