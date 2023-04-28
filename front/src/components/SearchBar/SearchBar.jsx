import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
   
   const[id, setId] = useState('') 

const handleChange = (event) => {
    setId(event.target.value);
   
}
   return (
      <div className={style.Bar}>
         <input type='search' className={style.searchInput} onChange={handleChange} value={id}/>
         <button onClick={() => props.onSearch(id)} className={style.searchButton} >Agregar</button>
      </div>
   );
}
// onClick={() => props.onSearch(id)} --- Si no pusieramos esa callback la funcion se ejecutaria al instante ya que la estamos llamando a onSearch.