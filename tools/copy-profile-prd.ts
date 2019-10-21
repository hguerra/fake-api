import * as shell from 'shelljs';

shell.rm(['.env', 'dist/.env']);
shell.cp('-f', 'environments/environment.prd.properties', 'dist/.env');
shell.cp('-f', 'environments/environment.prd.properties', '.env');
