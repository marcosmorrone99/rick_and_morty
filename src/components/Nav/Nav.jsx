import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
        <Link to="/">LOG OUT</Link>
        <button>
        <Link to='/about'>About</Link>
        </button>
        <button>
         <Link to='/home' >Home</Link>
        </button>
        <button>
         <Link to='/favorites' >Favorites</Link>
        </button>
        </nav>
      )
  }

export default Nav
