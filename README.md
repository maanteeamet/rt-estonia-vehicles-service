This is a node js service for currently polling data from:
1. http://transport.tallinn.ee/gps.txt

And pushing it to localhost mqtt broker on port 1883 which is described in Dockerfile.

to build and run:

Write new password from mosquitto-server/config/passwd

docker build -t rt/estonia .

docker run -d --network="host" rt/estonia