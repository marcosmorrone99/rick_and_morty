import { useState } from "react";
import validation from "../../validation"; 


const Form = ({login}) => {
    
    const [userData, setUserData] = useState ({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState ({})

    const handleChange = (event) => {
      setUserData ({
        ...userData,
        [event.target.name] : event.target.value
      })
      setErrors (validation({
        ...userData,
        [event.target.name] : event.target.value
      }))
    }
    //Con bracket notation nosotros accedemos a una propiedad la cual no sabemos cual es el nombre (puede ser el email o la password)
    
   

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
        
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor = 'email' >Email:</label>
            <input type="email" name= 'email' value= {userData.email} autoComplete="off" onChange={handleChange}/>
            {errors.email && <p style= {{color: 'red'}}> {errors.email} </p>}

            <label htmlFor = 'password' >Password:</label>
            <input type="text" name= 'password' value= {userData.password} autoComplete="off" onChange={handleChange} />
            {errors.password && <p style= {{color: 'red'}}> {errors.password} </p>}
            
            <button type= "submit" >Sumbit</button>
        </form>
      </div>
    );
}

export default Form