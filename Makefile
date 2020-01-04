installdep:
	@echo "Installing dependencies ..."
	cd App && yarn install
	cd AppAdmin && yarn install

dev: installdep
	@echo "Starting development mode ..."
	docker-compose -f docker-compose_dev.yaml up 

dev-down:
	@echo "Stopping development mode ..."
	docker-compose -f docker-compose_dev.yaml down 

prod:
	@echo "Starting production mode ..."

clean: dev-down
	docker rm -f $(docker ps -a -q)