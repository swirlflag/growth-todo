/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
    reactStrictMode: true,
	swcMinify: true,
    webpack(config, { webpack }) {
        const isProd = process.env.NODE_ENV === "production";
        const plugins = [...config.plugins];
        if(isProd) {
            // plugins.push()
        }
        // console.log({isProd});
        return {
            ...config,
            mode: isProd ? "production" : "development",
            devtool: isProd ? "hidden-source-map" : "eval",
            plugins,
            // module: {
            //     ...config.module,
            //     rules: [
            //         ...config.module.rules,
            //         {

            //         }
            //     ]
            // }
        }
    }
});

module.exports = nextConfig;
