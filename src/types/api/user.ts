import { User as _User } from '../../interface/api/user/user';
import { Countries } from '../../interface/api/user/countries';
import { AccountOverview } from '../../interface/api/user/account';
import { Token } from '../../interface/api/user/token';
import { Language } from '../../interface/api/user/language';
import { Verify } from '../../interface/api/user/verify';
import { Redeem } from '../../interface/api/user/redeem';

export type User = _User &
    Countries &
    AccountOverview &
    Token &
    Language &
    Verify &
    Redeem;
