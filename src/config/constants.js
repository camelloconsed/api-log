export default () => {
  const CONSTS = {
    ENV: {
      PROD: 'production',
      DEV: 'development',
    },
    HTTP: {
      CODES: {
        OK: 200,
        INTERNAL_SERVER_ERROR: 500,
      },
    },
    RESPONSES: {
      LOGS: {
        SHOW: {
          SUCCESS: 'Log obtained successfully.',
          ERROR: 'Error obtaining the log.',
        },
        LIST: {
          SUCCESS: 'Logs listed successfully.',
          ERROR: 'Error listing logs.',
        },
        STORE: {
          SUCCESS: 'Log stored successfully.',
          ERROR: 'Error storing log.',
        },
      },
    },
  };

  return CONSTS;
};
