import { Global } from './api/global';
import { Oauth2 } from './api/oauth2';
import { Registration } from './api/registration';

export type URLs = Global & Oauth2 & Registration;
