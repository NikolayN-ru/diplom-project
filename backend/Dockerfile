FROM python:3.7-slim

WORKDIR /app

COPY ./requirements.txt .

RUN apt-get update 
    # && apt-get install netcat -y
RUN apt-get upgrade -y 
    # && apt-get install -y gcc python3-dev musl-dev
RUN pip install --upgrade pip

RUN apt-get install -y vim
RUN pip install -r requirements.txt
# RUN pip install psycopg2-binary==2.8.3

COPY . .

# ENTRYPOINT ["/app/entrypoint.sh"]