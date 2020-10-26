# Creating build configuration for App Center

This action cloning build configuration for App Center CI.

## Inputs

### `appcenter-token`

**Required** Value of your App Center token. https://docs.microsoft.com/en-us/appcenter/api-docs/#creating-an-app-center-app-api-token.

### `project-id`

**Required** Value of your App Center project id. (org_name/project_name) ex: meercodeio/hello.ios

### `source-branch`

**Required** Name of your source branch name. (cloneFromBranch) (https://openapi.appcenter.ms/#/build/branchConfigurations_create).

### `target-branch`

**Required** Name of your target branch name. ex: feature/hello-world

## Example usage

```
uses: actions/app-center-create-configuration@v1
with:
  appcenter-token: '${{ secrets.APP_CENTER_TOKEN }}'
  source-branch: 'develop'
  target-branch: 'feature/hello-world'
  project-id: 'meercodeio/hello.ios'
```