// Здесь находятся конфигурация проекта и параметры плагина.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-pug',
      options: {
          pug: { /* Options for `pug-plain-loader` */ },
          pugLoader: { /* Options for `pug-loader` */ }
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: '@/path/to/resources.scss',

        // or array of paths
        resources: ['@/path/to/first-resources.sass', '@/path/to/second-resources.scss'],

        // or from the npm package
        resources: ['my-package/sass/resources.scss']
      }
    }
  ]
}
