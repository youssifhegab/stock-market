// Define the overall config type
interface Config {
  apiKey: string;
  apiUrl: string;
}

/**
 * Initializes and returns the environment variables object for the application.
 *
 * This function reads environment variables and provides them as an object
 * Defaults are provided where environment variables are not set.
 *
 * @returns  The environment variables object.
 * @returns  environment variables.
 */
const initializeConfig = (): Config => {
  const config: Config = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY!,
    apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  };

  return config;
};

const config = initializeConfig();

export default config;
