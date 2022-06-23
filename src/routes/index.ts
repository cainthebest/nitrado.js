// <--  Global Start  -->
// Global - Health Check for API | https://doc.nitrado.net/#api-Global-DoPing
import { HealthCheck } from './global/health_check';

// Global - Maintenance status | https://doc.nitrado.net/#api-Global-GetMaintenance
import { Maintenance } from './global/maintenance';

// Global - Request current API version | https://doc.nitrado.net/#api-Global-GetVersion
import { Version } from './global/version';

type Global = HealthCheck & Maintenance & Version;
// <--  Global End  -->

export type URLs = Global;
