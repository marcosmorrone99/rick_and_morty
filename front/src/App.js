import  './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState, useEffect } from 'react';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import About from  './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
// const API_KEY = 'bc6e0621faa2.b54b3eb8981dbfd58148'

const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'hola123';
const URL = 'http://localhost:3001/rickandmorty/login';

function App() {

 const location = useLocation ();
 const navigate = useNavigate();
 const [characters, setCharacters] = useState ([]);
 const [access, setAccess] = useState(false);


 const login = async (userData) => {
   try {
      const { email, password } = userData;
      const {data} = await axios(URL + `?email=${email}&password=${password}`) //aca agarramos data de la respuesta que nos da axios
      const { access } = data; //desestructuramos data y nos quedamos con acces
      setAccess(access);
      access && navigate('/home');
      
   } catch (error) {
      console.log(error.message);
   }
}

  useEffect(() => {
   !access && navigate('/');
  }, [access]);


   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            }
      }  catch (error) {
         alert('¡No hay personajes con este ID!');
      }
   }


   const onClose = (id) => {
     const charactersFiltered = characters.filter(character => character.id !== id)
      setCharacters(charactersFiltered);
   }

 
   return (
      <div className='App'>
         <div> 
         {location.pathname !== "/" && <Nav onSearch = {onSearch} setAccess={setAccess}/>}
         </div>
         
         <Routes> 
            <Route path= '/' element={<Form login = {login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> } />
            <Route path= '/about' element= {<About />}/>
            <Route path= '/detail/:id' element= {<Detail />}/>
            <Route path= '/favorites' element={<Favorites />} />
         </Routes>
         
      </div>
   );
}

export default App;
