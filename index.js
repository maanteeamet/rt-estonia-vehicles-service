const rt = require('./src/RTDataSync.js');

let port = process.argv.splice(2)[0] || 1883;

let sync = new rt.RTDataSync(port);
sync.syncTallinn();


