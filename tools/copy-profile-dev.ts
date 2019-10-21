import * as shell from 'shelljs';

shell.rm(['.env', 'dist/.env']);
shell.cp('-f', 'environments/environment.dev.properties', 'dist/.env');
shell.cp('-f', 'environments/environment.dev.properties', '.env');
