/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.spoonacular.com',
			},
		],
	},
};

module.exports = nextConfig;
