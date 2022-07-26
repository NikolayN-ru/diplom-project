Status of last Deployment:<br>
<img src="https://github.com/NikolayN-ru/diplom-project/.github/workflows/CI-githubActioons/badge.svg?branch=master"><br>

2022

using: docker, docker-compose,
----------------
Docker Engine
v20.10.17
----------------

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
