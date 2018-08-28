module.exports = {
  siteMetadata: {
    title: 'Travis McCormick',
    description: 'A portfolio website built from scratch by Travis McCormick.',
    keywords: 'ios developer, ios portfolio, ios, swift developer, programmer, react developer, utah developer, salt lake city ios developer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'csmpx2ut868h',
        accessToken: '483ac743da675775344f2710dfb1da7e96691556fa5cf0aec6111cad06f347bd'
      }
    }
  ],
}
