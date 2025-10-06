# TerraformLifecycle – DevOps Lifecycle Project

## Project Architecture

<img width="1176" height="751" alt="Screenshot 2025-10-06 144146" src="https://github.com/user-attachments/assets/2bbb22f5-895e-4c07-98f8-efc5505d1377" />

<img width="803" height="667" alt="Screenshot 2025-10-06 144205" src="https://github.com/user-attachments/assets/c43fb828-e88b-4616-83ce-6c4dcbeb0b36" />

## Project Objective
The objective of this project is to implement a **complete DevOps lifecycle**, automating the deployment, scaling, and management of containerized applications. Key goals include:

- Automating infrastructure provisioning on AWS using Terraform.
- Containerizing the application with Docker and deploying it on Kubernetes.
- Implementing CI/CD automation using Jenkins.
- Ensuring scalable, reliable, and production-ready deployments.

---

## Implementation Overview

### 1. Git Workflow

- **Branching Strategy:** All commits are made to the `master` branch.
- **Release Cycle:** Production releases occur on the **25th of every month**.
- Ensures controlled and predictable production deployment.

---

### 2. Docker Containerization

- **Dockerfile:** Custom image created from application code.
- Built automatically on every GitHub push and pushed to Docker Hub.

3. Infrastructure Provisioning

Tool Used: Terraform

Workers Setup:

Worker1: Jenkins, Java

Worker2: Docker, Kubernetes

Worker3: Java, Docker, Kubernetes

Worker4: Docker, Kubernetes

Terraform scripts automate creation of EC2 instances, networking, and security groups.

4. Configuration Management

-Tool Used: Ansible

-Automates software installation and configuration on all worker nodes.

Files:

inventory.ini – Defines servers

book.yml – Automates software installation

master.sh – Executed on master server

slaves.sh - Executed on slaves server

5. Kubernetes Deployment

Replicas: 2

Service Type: NodePort

Port: 30008

Deploys Docker image from Docker Hub without modifying testing containers.

files - deployment.yml, service.yml 

6. Jenkins CI/CD

Jenkinsfile: Automates build, test, and deployment process.

Triggered on commit to master branch.

Ensures continuous delivery to production environment.

jenkins pipeline script -  Jenkinsfile

7. Screenshots of the Projects are Uploaded In this Drive.

   ---> 
