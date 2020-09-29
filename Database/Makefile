all: build run

build:
	docker build -t db_theunbrandedshop:latest .

run:
	docker run -it --rm -p 3002:5984 db_theunbrandedshop:latest