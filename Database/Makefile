all: build run

build:
	docker build -t db_theunbrandedshop:latest .

run:
	docker run -it --rm -p 5984:5984 db_theunbrandedshop:latest