// Index follows the same format as the official Nitrado documentation.
// The routes can be found in file via the import.

// <--  Global Start  -->
import { HealthCheck } from './global/health_check';
import { Maintenance } from './global/maintenance';
import { Version } from './global/version';

type Global = HealthCheck & Maintenance & Version;
// <--  Global End  -->

// <--  OAuth Start  -->
import { SubToken } from './tokens/sub';
import { LongLife } from './tokens/create_long_life';
import { DelLongLife } from './tokens/del_long_life';

type OAuth = SubToken & LongLife & DelLongLife;
// <--  OAuth End  -->

// <--  Gameservers Start  -->
import { Details } from './services/game_servers/details';
import { Restart } from './services/game_servers/restart';
import { Stop } from './services/game_servers/stop';
import { ListBackups } from './services/game_servers/backup/list_backups';
import { Command } from './services/game_servers/app_server/command';
import { Ping } from './services/game_servers/app_server/ping';
import { RestoreDatabase } from './services/game_servers/backup/restore_database';
import { RestoreGameserver } from './services/game_servers/backup/restore_game_server';
import { ChangeFTPPassword } from './services/game_servers/ftp/change_password';
import { Bookmarks } from './services/game_servers/files/bookmarks';
import { Copy } from './services/game_servers/files/copy';
import { CreateDir } from './services/game_servers/files/create_dir';
import { Delete } from './services/game_servers/files/delete';
import { Download } from './services/game_servers/files/download';
import { ListFiles } from './services/game_servers/files/list';
import { Move } from './services/game_servers/files/move';
import { Seek } from './services/game_servers/files/seek';
import { Size } from './services/game_servers/files/size';
import { Stats } from './services/game_servers/files/stat';
import { Upload } from './services/game_servers/files/upload';
import { ListAllGames } from './services/game_servers/games/list_all';
import { InstallGame } from './services/game_servers/games/install';
import { ListAvailable } from './services/game_servers/games/list_available';
import { Start } from './services/game_servers/games/start';
import { Uninstall } from './services/game_servers/games/uninstall';
import { ChangeDBPassword } from './services/game_servers/mysql/change_password';
import { ResetDatabase } from './services/game_servers/mysql/reset_database';
import { InstallPackage } from './services/game_servers/package/install';
import { ListPackages } from './services/game_servers/package/list';
import { PackageReinstall } from './services/game_servers/package/reinstall';
import { PackageUninstall } from './services/game_servers/package/uninstall';
import { ResourceUsage } from './services/game_servers/resource_usage';
import { Sets } from './services/game_servers/settings/sets';
import { RestoreSet } from './services/game_servers/settings/restore_sets';
import { RestoreSettings } from './services/game_servers/settings/settings_default';
import { Settings } from './services/game_servers/settings/settings';

type Gameservers = Details &
    Restart &
    Stop &
    ListBackups &
    Command &
    Ping &
    RestoreDatabase &
    RestoreGameserver &
    ChangeFTPPassword &
    Bookmarks &
    Copy &
    CreateDir &
    Delete &
    Download &
    ListFiles &
    Move &
    Seek &
    Size &
    Stats &
    Upload &
    ListAllGames &
    InstallGame &
    ListAvailable &
    Start &
    Uninstall &
    ChangeDBPassword &
    ResetDatabase &
    InstallPackage &
    ListPackages &
    PackageReinstall &
    PackageUninstall &
    ResourceUsage &
    Sets &
    RestoreSet &
    RestoreSettings &
    Settings;
// <--  Gameservers End  -->

export type URLs = Global & OAuth & Gameservers;
