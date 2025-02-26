// Configuration Best Practices

// Environment Variables
const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
    pool: {
      min: parseInt(process.env.DB_POOL_MIN, 10) || 2,
      max: parseInt(process.env.DB_POOL_MAX, 10) || 10
    }
  }
};

// Configuration Object Pattern
const settings = {
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3
  },
  cache: {
    ttl: 3600,
    checkPeriod: 600
  },
  features: {
    newFeature: process.env.ENABLE_NEW_FEATURE === 'true'
  }
};

// Frozen Configuration
Object.freeze(settings);

// Configuration Validation
const validateConfig = (config) => {
  const required = ['database.url', 'api.baseUrl'];
  const missing = required.filter(key => {
    return !key.split('.').reduce((obj, key) => obj?.[key], config);
  });
  if (missing.length) {
    throw new Error(`Missing required config: ${missing.join(', ')}`);
  }
};

// Configuration Merging
const mergeConfigs = (...configs) => {
  return configs.reduce((acc, curr) => {
    return {
      ...acc,
      ...curr,
      database: { ...acc.database, ...curr.database },
      api: { ...acc.api, ...curr.api }
    };
  }, {});
};

// Environment-specific Config
const envConfigs = {
  development: {
    debug: true,
    logLevel: 'debug'
  },
  production: {
    debug: false,
    logLevel: 'error'
  }
};

// Feature Flags
const featureFlags = {
  isFeatureEnabled: (feature) => {
    return settings.features[feature] || false;
  },
  setFeature: (feature, enabled) => {
    if (Object.isFrozen(settings.features)) {
      throw new Error('Cannot modify frozen features');
    }
    settings.features[feature] = enabled;
  }
};

// Secrets Management
const getSecret = (key) => {
  // Implement secure secret retrieval
  return process.env[key];
};

// Configuration Watcher
const watchConfig = (path, callback) => {
  require('fs').watch(path, (eventType) => {
    if (eventType === 'change') {
      callback();
    }
  });
};

// Export configurations
module.exports = {
  config,
  settings,
  validateConfig,
  mergeConfigs,
  envConfigs,
  featureFlags,
  getSecret,
  watchConfig
};
