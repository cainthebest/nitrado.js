import { HealthCheck } from '../../interface/api/global/health_check';
import { Maintenance } from '../../interface/api/global/maintenance';
import { Version } from '../../interface/api/global/version';

export type Global = HealthCheck & Maintenance & Version;
