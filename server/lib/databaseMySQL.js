const env = 'local';

let DbName = 'godconsciousness';
let domainName = 'localhost:6000';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'godconsciousness';
  domainName = '';
} else {  
  DbName = 'godconsciousness'
  domainName = 'localhost:6000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };