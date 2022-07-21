/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const myConfig = {
    mode: isProd ? "production" : "development",
    devtool: isProd ? "hidden-source-map" : "eval",

    // reactStrictMode: true, // 초기 세팅에 이미 포함된 내용
    // swcMinify: true, // 코드 경량화 작업에 Terser가 아닌 SWC를 사용
}

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
			...myConfig,
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
