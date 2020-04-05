const dev = {
    STRIPE_KEY: "pk_test_ZYxs6zHaZZMdboH0omDF9n51",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-u0wx6lsdzghb"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://q80avwi56c.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_cQNZUML66",
        APP_CLIENT_ID: "7ulgqki0t2qips041mu5npu1jv",
        IDENTITY_POOL_ID: "us-east-1:c9679215-3f08-4f0f-9ece-4d2f6e32805f"
    }
};

const prod = {
    STRIPE_KEY: "pk_test_ZYxs6zHaZZMdboH0omDF9n51",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-1qsjzv97j6mlw"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://4llhfvlc18.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_DZ9t1CDJp",
        APP_CLIENT_ID: "6ss18h4p5cp4stb86v5534fhnd",
        IDENTITY_POOL_ID: "us-east-1:0e16ce64-03ab-4dbb-985f-3d39b786324f"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
