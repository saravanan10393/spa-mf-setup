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
          name: "components",
          exposes: {
            "./carosal": "./src/carosal.jsx",
          },
          remotes: {
            widgets: "widgets@http://localhost:3001/mf-manifest.json",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      ],
    },
  },
});
