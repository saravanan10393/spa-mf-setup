import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import path from "node:path";

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
          name: "host",
          remotes: {
            widgets: "widgets@http://localhost:3001/mf-manifest.json",
            components: "components@http://localhost:3002/mf-manifest.json",
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
