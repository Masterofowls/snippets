// Build.js Advanced Cheatsheet

// Environment Detection
const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// File System Operations
const handleFileOperations = async (path) => {
  try {
    const stats = await fs.stat(path);
    const files = await fs.readdir(path);
    return { stats, files };
  } catch (err) {
    console.error('File operation error:', err);
    throw err;
  }
};

// Build Configuration
const buildConfig = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  }
};

// Asset Processing
const processAssets = {
  images: {
    test: /\.(png|jpg|gif|svg)$/,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024 // 8kb
      }
    }
  },
  fonts: {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    type: 'asset/resource'
  }
};

// Development Server Configuration
const devServerConfig = {
  port: 3000,
  hot: true,
  compress: true,
  historyApiFallback: true,
  client: {
    overlay: true,
    progress: true
  }
};

// Build Pipeline Hooks
const buildHooks = {
  beforeBuild: () => {
    console.log('Starting build process...');
    // Clean dist directory
  },
  afterBuild: () => {
    console.log('Build completed successfully');
    // Generate build report
  },
  onError: (error) => {
    console.error('Build failed:', error);
    process.exit(1);
  }
};

// Performance Optimization
const optimizePerformance = {
  caching: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  moduleIds: 'deterministic',
  runtimeChunk: 'single'
};

// Environment-specific Configurations
const getEnvConfig = () => ({
  development: {
    devtool: 'eval-source-map',
    ...devServerConfig
  },
  production: {
    devtool: 'source-map',
    optimization: optimizePerformance
  }
}[process.env.NODE_ENV]);

// Plugin Configuration
const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: isProduction
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env)
  })
];

// Error Handling Utilities
const errorHandler = {
  logError: (err) => {
    console.error('Build Error:', err);
    if (isDevelopment) {
      console.debug('Stack:', err.stack);
    }
  },
  throwFatal: (message) => {
    throw new Error(`Fatal Build Error: ${message}`);
  }
};

// Export Build Configuration
module.exports = {
  ...buildConfig,
  mode: process.env.NODE_ENV,
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      ...Object.values(processAssets)
    ]
  },
  ...getEnvConfig()
};

// Best Practices:
// 1. Use environment variables for configuration
// 2. Implement proper error handling
// 3. Optimize build performance
// 4. Configure source maps appropriately
// 5. Implement caching strategies
// 6. Handle different asset types
// 7. Use code splitting
// 8. Implement progressive enhancement
