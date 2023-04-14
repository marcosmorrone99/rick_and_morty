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

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'bc6e0621faa2.b54b3eb8981dbfd58148'

const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'hola123';

function App() {

 const navigate = useNavigate();
 const [access, setAccess] = useState(false);

const login = (userData) => {
   if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('/home');
   }
}

  useEffect(() => {
   !access && navigate('/');
  }, [access]);

   const [characters, setCharacters] = useState ([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   } // axios es una libreria que nos deja hacerle peticiones a una API


   const onClose = (id) => {
     const charactersFiltered = characters.filter(character => 
      character.id !== (id))
      setCharacters(charactersFiltered);
   }

   const location = useLocation ();
 
   return (
      <div className='App'>
         <div> 
         {location.pathname !== "/" && <Nav onSearch = {onSearch}/>}
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
