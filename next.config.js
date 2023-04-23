/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.spoonacular.com',
			},
			{
				protocol: 'https',
				hostname: 'www.soyhenry.com',
			},
		],
	},
};

module.exports = nextConfig;
