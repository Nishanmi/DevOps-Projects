# Ansible Multi-Node Roles Project: Test & Prod Nodes

## Objective
- Deploy an Ansible cluster of 4 nodes.
- Label 2 nodes as `test` and 2 nodes as `prod`.
- Install **Java (OpenJDK 11)** on test nodes using a role (`java-role`).
- Install **MySQL server** on prod nodes using another role (`mysql-role`).
- Demonstrate role-based modular automation with host groups.

## Inventory
- File: `inventory.ini`
- Groups:
  - `[test]` → test nodes
    ```
    172.31.81.201
    172.31.92.78
    ```
  - `[prod]` → prod nodes
    ```
    172.31.95.197
    172.31.81.114
    ```
- SSH user: `ubuntu`  
- Key: `/home/ubuntu/newkey.pem`

## Roles
1. `java-role/` → Installs OpenJDK 11 on test nodes  
   - Tasks: `roles/java-role/tasks/main.yml`

2. `mysql-role/` → Installs and starts MySQL on prod nodes  
   - Tasks: `roles/mysql-role/tasks/main.yml`

---

## Main Playbook
- File: `a5.yml` applies roles to respective host groups:

```yaml
---
- name: Install Java on test nodes
  hosts: test
  become: yes
  roles:
    - java-role

- name: Install MySQL on prod nodes
  hosts: prod
  become: yes
  roles:
    - mysql-role
```
## Screenshot of the Project is added in Drive link below.
--> 
