dev: 
	@echo "Starting development mode ..."
	docker-compose -f docker-compose_dev.yaml up 

dev-down:
	@echo "Stopping development mode ..."
	docker-compose -f docker-compose_dev.yaml down 

prod:
	@echo "Starting production mode ..."
