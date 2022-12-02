/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images:{

      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'randomuser.me',
          pathname: 'api/portraits/**'
        }
      ]
    // domains:['avatars.dicebear.com'],
    // dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}

module.exports = nextConfig
