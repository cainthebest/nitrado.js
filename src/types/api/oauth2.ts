import { SubToken } from '../../interface/api/oauth2/sub_token';
import { LongLifeToken } from '../../interface/api/oauth2/long_life_token';

export type OAuth2 = SubToken & LongLifeToken;
