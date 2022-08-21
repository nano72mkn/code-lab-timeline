module.exports = {
  images: {
    domains: ['www.google.com'],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.code-lab.xyz',
        permanent: false,
      },
    ];
  },
};
