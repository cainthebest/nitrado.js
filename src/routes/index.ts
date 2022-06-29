// <--  Global Start  -->
import { HealthCheck } from './global/health_check';
import { Maintenance } from './global/maintenance';
import { Version } from './global/version';
type Global = HealthCheck & Maintenance & Version;
// <--  Global End  -->

// <--  Gameservers Start  -->
import { Details } from './services/game_servers/details';
import { Restart } from './services/game_servers/restart';
import { Stop } from './services/game_servers/stop';
import { ListBackups } from './services/game_servers/backup/list_backups';
import { Command } from './services/game_servers/app-server/command';
import { Ping } from './services/game_servers/app-server/ping';
import { RestoreDatabase } from './services/game_servers/backup/restore_database';
import { RestoreGameserver } from './services/game_servers/backup/restore_game_server';
import { ChangePassword } from './services/game_servers/ftp/change_password';

type Gameservers = Details &
    Restart &
    Stop &
    ListBackups &
    Command &
    Ping &
    RestoreDatabase &
    RestoreGameserver &
    ChangePassword;
// <--  Gameservers End  -->

export type URLs = Global & Gameservers;
