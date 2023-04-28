// const axios = require('axios')

// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data) //axios tiene una propiedad data que en esa propiedad tiene la respuesta de la API
//     .then(data => {
//         let character = {
//         image: data.image,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         status: data.status,
//         origin: data.origin.name
//        }
//        res
//        .writeHead(200, {"Content-Type":"application/json"})
//        .end(JSON.stringify(character))
//     })
//     .catch(err => 
//         res
//         .writeHead(500, {"content-Type":"text/plain"})
//         .end(`El personaje con id:${id} no fue encontrado`)
//     )
// }

// module.exports = getCharDetail