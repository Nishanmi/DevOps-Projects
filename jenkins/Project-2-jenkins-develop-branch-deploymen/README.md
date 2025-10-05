# Jenkins Sequential Deployment Project

## Objective
Automatically deploy code from the `develop` branch to test and production servers using two Jenkins jobs.

## Nodes
| Node | IP | Purpose |
|------|----|--------|
| Test Node | <test-node-ip> | Deploy files from develop branch |
| Prod Node | <prod-node-ip> | Deploy files if Test job succeeds |

## Jobs
### 1. Test Job
- Trigger: Push to `develop` branch
- Action: Copy Git files to test node

### 2. Prod Job
- Trigger: Only if Test job succeeds
- Action: Copy Git files to production node

### Screenshots are uploaded in Drive and the Drive is below.
--> 
