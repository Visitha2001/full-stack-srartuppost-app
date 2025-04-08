import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://43cd15544884472b8aec9a447a935d52@o4509116231188481.ingest.us.sentry.io/4509116291416064",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});