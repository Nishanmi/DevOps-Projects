#  DevOps Lifecycle Project

## Project Objective

The goal of this project was to implement a complete **DevOps lifecycle** forsweb application. The primary objectives were:

1. Automate the installation of necessary software on target servers.
2. Establish a CI/CD process for building, testing, and deploying the application.
3. Containerize the application using Docker for consistent deployments.
4. Ensure the application is deployed to production automatically upon stable releases.

---

## Implementation Overview

### 1. Configuration Management

- **Tool Used:** Ansible
- **Purpose:** Install required software (Java, Docker) on target servers.
- **Key Files:**
  - `inventory.ini`: Defines the target servers and connection details.
  - `playbook.yml`: Automates software installation.
  - `slaves.sh`: Script executed on servers to install packages.

2. Containerization

-Tool Used: Docker

-Purpose: Containerize the web application for consistent and portable deployment.

-Key Files:

-Dockerfile: Defines the container image and sets up Apache with application code in /var/www/html.

3. CI/CD Automation

-Tool Used: Jenkins

-Purpose: Automate the build, test, and deployment process.

Workflow:

1.On code commit to develop branch: Build and run tests.

2.On code commit to master branch: Build, test, and deploy to production.

-The CI/CD process ensures faster, error-free deployments and reliable software delivery.

4. Screenshots / Results

Screenshots of the project can be viewed here
--->  https://docs.google.com/document/d/1C-1YyIh9BkICvoFLEsCW4sraSMVqXDLH/edit?usp=sharing&ouid=103624519870238324874&rtpof=true&sd=true

