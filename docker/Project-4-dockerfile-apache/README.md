# Dockerfile Apache Project

## Objective
- Created a Dockerfile that sets up an Ubuntu container with Apache2
- Apache2 should start automatically when the container runs

## Dockerfile Specs
- Base image: Ubuntu
- Install Apache2
- Expose port 80
- Start Apache2 automatically when container starts

## Dockerfile Content

dockerfile
# Used Ubuntu base image
FROM ubuntu:latest

# Instaled Apache2
RUN apt update && apt install -y apache2

# Exposed port 80
EXPOSE 80

# Started Apache2 automatically
CMD ["apache2ctl", "-D", "FOREGROUND"]

##Screenshots Added in the Drive, Link below
--> 


