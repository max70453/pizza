// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.loadSource(({ addCollection }) => {
//     // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
//   })

//   api.createPages(({ createPage }) => {
//     // Use the Pages API here: https://gridsome.org/docs/pages-api/
//   })
// }

const axios = require('axios');

// module.exports = function (api) {
//   api.loadSource(async actions => {
//     const { data } = await axios.get("http://192.168.0.100/api/home")
//     const collection = actions.addCollection({
//       typeName: 'PizzaHome'
//     })
    
//     for (const item of data) {
//       collection.addNode({
//         alias: item.alias,
//         title: item.title,
//         subtitle: item.subtitle
//       })
//     }
//     console.log(data);
//   })
// }