const env = 'local';
let DbName = 'a1abiliti_newgc';
let domainName = 'localhost:5001';

console.log('env...', env);

if (env === 'prod') {
  DbName = 'a1abiliti_newgc';
  domainName = 'appoint.a1abilities.co.nz'
} else {  
  DbName = 'godconsciousness'
  domainName = 'localhost:5001'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };