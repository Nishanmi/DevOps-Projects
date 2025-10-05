# Ansible Multi-Node Setup Project

## Objective
- Setup Ansible cluster with 3 nodes (1 master, 2 slaves)
- Installed Java on slave1
- Installed MySQL server on slave2
- Used separate playbooks for modular automation

## Inventory
- File: `inventory.ini`
- Defines master and slave nodes

## Playbooks
1. `install_java_playbook.yml` → Installs Java on slave1
2. `install_mysql_playbook.yml` → Installs MySQL on slave2

## Commands to Run
```bash
ansible-playbook -i inventory.ini install_java_playbook.yml
ansible-playbook -i inventory.ini install_mysql_playbook.yml
```
## Screenshots are added in Drive link below
--> 
