import { Services } from '../../interface/api/service/services';
import { Cancel } from '../../interface/api/service/cancel';
import { AutoExtend } from '../../interface/api/service/auto_extend';
import { SubDomain } from '../../interface/api/service/sub_domain';
import { KnowledgeBase } from '../../interface/api/service/knowledge_base';
import { SalePrice } from '../../interface/api/service/sale_price';
import { Logs } from '../../interface/api/service/logs';
import { Notifications } from '../../interface/api/service/notifications';

export type Service = Services &
    Cancel &
    AutoExtend &
    SubDomain &
    KnowledgeBase &
    SalePrice &
    Logs &
    Notifications;
