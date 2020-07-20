const env = 'local';
let DbName = 'connectiv_gc';
let domainName = 'http://gcadmin.connectivitysoftwaresolutions.com';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'connectiv_gc';
  domainName = 'appoint.a1abilities.co.nz'
} else {  
  DbName = 'godconsciousness'
  domainName = 'localhost:5001'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };