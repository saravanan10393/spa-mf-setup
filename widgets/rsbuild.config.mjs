import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    assetPrefix: true,
    writeToDisk: true,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: "widgets",
          // library: {
          //   type: "module",
          // },
          exposes: {
            "./button": "./src/button.jsx",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
          // experiments: {
          //   federationRuntime: "hoisted",
          // },
        }),
      ],
    },
  },
});
