import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
function Profile() {
    //el useNavigate me permite poder ir a alguna de las paginas que ya había creado anteriormente desde el otro componente
    let navigate = useNavigate();
    //useParams, se usa en el router y en este caso me indica el valor que variara dependiendo de la situación, es especialemnte util para ids de clientes por ejemplos 
    let {username} = useParams();
  return (
    <div>this is the Profile component for {username} <button onClick={() => navigate('/about')}>Change to about component</button></div>
  )
}

export default Profile;