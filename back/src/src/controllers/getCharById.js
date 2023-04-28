const URL = 'https://rickandmortyapi.com/api/character';
const axios = require('axios');

const getCharById = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)
        
         if(!data.name) throw new Error(`Faltan datos del personaje de ID: ${id}`)
        
                const character = {
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                    status: data.status
                }
                return res.status(200).json(character)
            // return res.status(404).send('Not found');
        
    } catch (error) {
     return  error.message.includes('ID')
     ? res.status(404).send(error.message)  //el 404 es un error del usuario por lo que nos manda el error de la linea 10
     : res.status(500).send(error.response.data.error)  //este es el mensaje de error que me manda axios (esta dentro del objeto que devuelve axios)
    }

}



module.exports = {
    getCharById
};