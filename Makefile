build:
	docker-compose build
dev:
	docker-compose up
start:
	docker-compose up -d
stop:
	docker-compose down
prod:
	docker-compose -f docker-compose.prod.yml up -d --build