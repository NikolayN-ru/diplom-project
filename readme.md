using: docker, docker-compose,

running project:
#
    - make dev
    - ./bashStart.sh
    - docker-compose up
#
stop command:
#
    - make stop
    - ./bashStop.sh

#
login - admin, pass - admin
#
API - 
#
http://localhost:8000/swagger/ -> попадаем в swagger

http://localhost:8000 =>  (websocket) попадаем на создание комнаты
