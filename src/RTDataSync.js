const mqtt = require('mqtt');
const tallinn_poll = require('./tallinn_poll.js');
const mqtt_publisher = require('./mqtt_publisher.js');

class RTDataSync {
  constructor(mqttClient, otpUrl) {
    this.clientUrl = mqttClient.url;
    let opts = {
      username: mqttClient.username,
      password: mqttClient.password
    };
    this.otpUrl = otpUrl;
    this.mqttClient = mqtt.connect(this.clientUrl, opts);
  }

  syncTallinn() {
    console.log('Syncing Tallinn RT data to mqtt client ' + this.clientUrl);
    new tallinn_poll.TallinnPollClient(this.handle_event, {mqttClient: this.mqttClient}, this.otpUrl).connect();
  };

  handle_event(path, msg, args) {
    let topic = mqtt_publisher.to_mqtt_topic(msg);
    let message = mqtt_publisher.to_mqtt_payload(msg);
    args.mqttClient.publish(topic, JSON.stringify(message), function (err) {
      if (err) {
        console.log('Error happened when publishing: ' + err);
      }
    });
  };
}

module.exports.RTDataSync = RTDataSync;


