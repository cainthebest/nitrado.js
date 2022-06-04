import { Global } from './api/global';
import { OAuth2 } from './api/oauth2';
import { Registration } from './api/registration';
import { User } from './api/user';
import { Service } from './api/service';

export type URLs = Global & OAuth2 & Registration & User & Service;
