/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
    images:{
        domains:["i.ibb.co"]
    }
}

module.exports = nextConfig
