const rt = require('./src/RTDataSync.js');
const args = process.argv.splice(2);
let mqttClientUrl = args[0] || 'mqtt://localhost:1883';
let mqttClientUser = args[1] || 'publisher';
let mqttClientPassword = args[2];
let otpurl = args[3];
let mqttClient =
  {
    url: mqttClientUrl,
    username: mqttClientUser,
    password: mqttClientPassword
  };

let sync = new rt.RTDataSync(mqttClient, otpurl);
sync.syncTallinn();


