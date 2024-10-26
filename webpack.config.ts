import path from "path";
import ImageminWebpWebpackPlugin from "imagemin-webp-webpack-plugin";
import { Configuration } from "webpack";

const isProduction = process.env.NODE_ENV === "production";

const config: Configuration = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: isProduction ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|jpg)$/, // Gère les formats PNG, JPG et JPEG
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          {
            loader: "webp-loader",
            options: {
              quality: 75,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    ...(isProduction
      ? [
          new ImageminWebpWebpackPlugin({
            config: [
              {
                test: /\.(jpe?g|png|jpg)/,
                options: {
                  quality: 75,
                },
              },
            ],
            overrideExtension: true,
            detailedLogs: true,
            silent: false,
            strict: true,
          }),
        ]
      : []),
  ],
};

export default config;
