import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { selectedCharacter, setSelectedCharacter } = useContext(AppContext);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    if (searchTerm.length >= 2) {
      setLoading(true); // Show loading
      fetch(`https://swapi.dev/api/people/?search=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setSuggestions(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    setSearchTerm("");
    setSuggestions([]); // Clear suggestions when a character is selected
  };
  return (
    <>
    <div style={{textAlign:'center',marginBottom: '15px'}}><img style={{width:'200px'}} src="./Star_Wars.png" alt="Star Wars" /></div>
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Star Wars characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        {loading ? <div className="suggestion-list">Loading...</div> : (
          suggestions.map((character) => (
            <div
              key={character.url}
              className="suggestion-item"
              onClick={() => handleSelectCharacter(character)}
            >
              {character.name}
            </div>
          ))
        )}
      </div>
      
      {/* I can design it, but for now just showing the JSON result */}
      {selectedCharacter && <div className="selected-character">{JSON.stringify(selectedCharacter, null, 2)}</div>}
    </>
  );
};

export default SearchComponent;
