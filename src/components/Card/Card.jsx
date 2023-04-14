import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from 'react-redux'
import { useState, useEffect } from "react";

function Card({name, status, species, gender, origin, image, onClose, id, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }
      else {
      setIsFav(true)  
      addFav({name, status, species, gender, origin, image, id})     
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   //agarra a myFavorites y lo recorre con el forEach

   return (
      <div className={style.container}>
         <button onClick = {() => onClose(id)} className={style.closeButton} >X</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`} >
          <h2>{name}</h2>
         </Link>
         <h2> Status: {status} </h2>
         <h2> Species: {species} </h2>
         <h2> Gender: {gender} </h2>
         <h2> Origin: {origin} </h2>
         {
          isFav ? (
          <button onClick={handleFavorite}>❤️</button>
          ) : (
           <button onClick={handleFavorite}>🤍</button>
          )
          }
      </div>
   );
} //chequear en una clase esta parte que pego el codigo de los corazones

const mapStateToProps = (state) => {
  return {
     myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character)) },
      removeFav: (id) => {dispatch(removeFav(id)) }
   } //
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)