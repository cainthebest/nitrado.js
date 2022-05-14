import { Global } from './api/global';
import { OAuth2 } from './api/oauth2';
import { Registration } from './api/registration';
import { User } from './api/user';
import { Service } from './api/service';
import { Bouncer } from './api/bouncer';
import { Cloud_Server } from './api/cloud_server';
import { Cloud_Server_Apps } from './api/cloud_server_apps';
import { Company } from './api/company';
import { Domain } from './api/domain';

import { Game_Server } from './api/game_server';

export type URLs = Global &
    OAuth2 &
    Registration &
    User &
    Service &
    Bouncer &
    Cloud_Server &
    Cloud_Server_Apps &
    Company &
    Domain &
    Game_Server;
