import { User as _User } from './user';
import { Countries } from './countries';
import { AccountOverview } from './account';
import { Token } from './token';
import { Language } from './language';
import { Verify } from './verify';
import { Redeem } from './redeem';

export type User = _User &
    Countries &
    AccountOverview &
    Token &
    Language &
    Verify &
    Redeem;
