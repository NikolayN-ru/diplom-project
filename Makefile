build:
	docker-compose build
dev:
	docker-compose up --build
	# --build сбилдит образ если он был обновлен
start:
	docker-compose up -d
stop:
	docker-compose down
prod-build:
	docker-compose -f docker-compose.prod.yml up -d --build
prod:
	docker-compose -f docker-compose.prod.yml up
node:
	docker-compose -f docker-compose.yml -f docker-compose.development.yml up --build
