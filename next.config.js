/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.ctfassets.net"],
  },
};

const webpack=(config)=>{
  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  });

  return config;
}

module.exports = nextConfig,webpack;
