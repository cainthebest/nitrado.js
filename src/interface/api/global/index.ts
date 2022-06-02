import { HealthCheck } from './health_check';
import { Maintenance } from './maintenance';
import { Version } from './version';

export type Global = HealthCheck & Maintenance & Version;
