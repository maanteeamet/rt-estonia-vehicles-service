const rt = require('./src/RTDataSync.js');
const args = process.argv.splice(2);
let mqttClientUrl = args[0] || 'mqtt://localhost:1883';
let mqttClientUser = args[1] || 'publisher';
let mqttClientPassword = args[2] || 'Th1s1sThePassw0rd!';

let mqttClient =
  {
    url: mqttClientUrl,
    username: mqttClientUser,
    password: mqttClientPassword
  };

let sync = new rt.RTDataSync(mqttClient);
sync.syncTallinn();


