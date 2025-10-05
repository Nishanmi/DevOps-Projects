# Ansible Roles Project

## Objective
- Create 2 Ansible roles:
  1. Install Apache2 on slave1
  2. Install NGINX on slave2
- Implement using role-based automation

## Inventory
- File: `inventory.ini`  
- Defines slave1 and slave2

## Roles
1. `apache-role/` → Installs and configures Apache2
2. `nginx_role/` → Installs and configures NGINX

## Main Playbook
- `main.yml` calls both roles based on target hosts

## Commands to Run
```bash
ansible-playbook -i inventory.ini main.yml
```
## Screenshots added in Drive link below.
--> 
