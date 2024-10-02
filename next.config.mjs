


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Add file-loader for .glb files
    config.module.rules.push({
      test: /\.glb$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/models/',
          publicPath: '/assets/models/',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
