docker network create --driver bridge mongo_nw
docker run --name ERQR-mongo --network mongo_nw -d mongo
#docker network connect mongo_nw ERQR-mongo
docker run --name ERQR-webportal -p 2022:2022 --network mongo_nw -d erqr/webportal
#docker network connect mongo_nw ERQR-webportal