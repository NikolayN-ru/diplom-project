FROM python:3.7-slim

WORKDIR /app

COPY requirements.txt .

RUN apt-get update && pip install --upgrade pip
RUN apt-get install -y vim
RUN pip install -r requirements.txt
# RUN pip install psycopg2-binary==2.8.3

COPY . .