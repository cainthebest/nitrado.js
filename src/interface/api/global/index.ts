import { Health_Check } from './health_check';
import { Maintenance } from './maintenance';
import { Version } from './version';

export type Global = Health_Check & Maintenance & Version;
