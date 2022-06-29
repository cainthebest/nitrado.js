export type GameserverStatusCodes =
    | 'started'
    | 'stopped'
    | 'stopping'
    | 'restarting'
    | 'suspended'
    | 'guardian_locked'
    | 'gs_installation'
    | 'backup_restore'
    | 'backup_creation'
    | 'chunkfix'
    | 'overviewmap_render';

export type GameserverType =
    | 'Gameserver'
    | 'Gameserver_Basic'
    | 'Gameserver_EPS';

export type GameserverMemoryType =
    | 'Standard'
    | 'Advanced'
    | 'Professional'
    | 'Ultimate';
