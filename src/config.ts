import * as dotenv from "dotenv";

const { env } = process;

dotenv.config();
console.log("Loading .env file...");

const baseConfig = {
  version: env.npm_package_version as string,
  port: env.PORT || 3000,
  basePath: env.BASE_PATH || "/",
  graphqlEndpoint: env.GRAPHQL_ENDPOINT || "/graphql",
};

export default {
  ...baseConfig,
};
