# Jenkins Multi-Node Deployment Project

## Objective
Automate deployment to test and production servers using Jenkins master and two nodes.

## Nodes
| Node | IP | Label | Purpose |
|------|----|-------|--------|
| Jenkins Master | <master-ip> | master | Controls jobs |
| Test Node | <test-ip> | test | Deploys test branch |
| Prod Node | <prod-ip> | prod | Deploys master branch |

## Jenkins Jobs

### 1. Push-to-Test
- **Branch:** test  
- **Node Label:** test  
- **Action:** Clone test branch and deploy to test server.

### 2. Push-to-Prod
- **Branch:** master  
- **Node Label:** prod  
- **Action:** Clone master branch and deploy to production server.

### Screenshots are uploaded in Drive and the link is below.
--> 
