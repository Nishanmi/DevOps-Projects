# Kubernetes Project 3: Apache ↔ NGINX Deployment with ClusterIP and Ingress

## Objective
To deploy two web applications (Apache and NGINX) on a Kubernetes cluster using ClusterIP services and an Ingress resource to route traffic between them.

---

## Tasks Performed
1. Created a **new NGINX Deployment** with 3 replicas.
2. Created an **Apache Deployment** with 3 replicas.
3. Exposed both deployments using **ClusterIP** services.
4. Configured an **Ingress** to route:
   - `/nginx` → NGINX service  
   - `/apache` → Apache service
5. Verified Ingress routes in a browser.

---

## Deployment YAML Files

- [`nginx-deployment.yml`](nginx-deployment.yml)
- [`apache-deployment.yml`](apache-deployment.yml)
- [`nginx-clusterIp.yml`](nginx-clusterIp.yml)
- [`apache-clusterIp.yml`](apache-clusterIp.yml)
- [`ingress.yml`](ingress.yml)

---

## Screenshots (Google Drive Links)
-->

## Notes
- The cluster was deleted after completion.  
- Screenshots provide proof of the deployment.
