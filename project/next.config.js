/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

    sassOptions: {
        // includePaths: [path.join(__dirname, './')],
        // prependData: `@import "./src/styles/variables.scss";`,
        includePaths: [path.join(__dirname, './')],
        prependData: `@import "./styles/variables.scss";`
    },

	webpack(config, { webpack }) {
        config.resolve.modules.push(__dirname);

		const isProd = process.env.NODE_ENV === "production";
		const plugins = [...config.plugins];

        const alias = {
            '@': path.resolve(__dirname, 'src'),
            // '@services': path.resolve(__dirname, 'src/services'),
            // '@utils': path.resolve(__dirname, 'src/utils'),
            // '@hooks': path.resolve(__dirname, 'src/hooks'),
            // '@components': path.resolve(__dirname, 'src/components')
        }

		if (isProd) {
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
		};
	},
};

module.exports = withBundleAnalyzer(nextConfig);
