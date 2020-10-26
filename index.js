const core = require('@actions/core');

try {
    const appCenterToken = core.getInput('appcenter-token');
    const sourceBranch = core.getInput('source-branch');
    const projectId = core.getInput('project-id');
    const targetBranch = core.getInput('target-branch');

    const url = `https://api.appcenter.ms/v0.1/apps/${projectId}/branches/${targetBranch}/config`;

    const config = {
        url,
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "x-api-token": appCenterToken
        },
        data: {
            cloneFromBranch: sourceBranch
        }
    };

    const response = await axios(config);

    console.log(response);
} catch (error) {
    core.setFailed(error.message);
}