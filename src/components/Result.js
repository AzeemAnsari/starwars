import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Result = () => {
  const { selectedCharacter} = useContext(AppContext);
  const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = selectedCharacter;
  return (
    <>
      <ul className="result selected-character">
        <li><span><strong>Name:</strong></span><span>{name}</span></li>
        <li><span><strong>Height:</strong></span><span>{height}</span></li>
        <li><span><strong>Mass:</strong></span><span>{mass}</span></li>
        <li><span><strong>Hair Color:</strong></span><span>{hair_color}</span></li>
        <li><span><strong>Skin Color:</strong></span><span>{skin_color}</span></li>
        <li><span><strong>Eye Color:</strong></span><span>{eye_color}</span></li>
        <li><span><strong>Birth Year:</strong></span><span>{birth_year}</span></li>
        <li><span><strong>Gender:</strong></span><span>{gender}</span></li>
      </ul>
    </>
  )
}

export default Result