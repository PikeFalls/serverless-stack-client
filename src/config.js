export default {
    s3: {
      REGION: "shri-notes-app-upload",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://2mir5cz3wc.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_qJP7muLlL",
      APP_CLIENT_ID: "7j2r01ukr1c1k1f9cu5qn2iih8",
      IDENTITY_POOL_ID: "us-east-2:51807edc-e316-4f6c-9b71-d07f2366efae"
    }
  };