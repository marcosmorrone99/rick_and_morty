import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';
import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    
    return async (dispatch) => { //tengo dos funciones pero esta es la asincronica porque esta (la del return) es la que hace el llamado a axios
        try {
        const {data} = await  axios.post(endpoint, character)

        if(!data,length) throw Error ('No hay favoritos')

        return dispatch({
        type: ADD_FAV,
        payload: data,
        });

       } catch (error) {
        console.log(error.message)
       }
    
       
    };
};

export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`

    return async (dispatch) => {
        try {
            const {data} = await axios.delete(endpoint)

            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        } catch (error) {
            console.log(error.message)
        }
    };
}

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
}