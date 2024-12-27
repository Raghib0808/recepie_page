import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query,setQuery]=useState('');
  const navigate=useNavigate();
  const handleSearch=()=>{
    navigate(`/search?q=${query}`);
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Search</h1>
      <div style={{ marginBottom: '20px' }}>
        <input className='in'
          type="text"
          placeholder="Search by recipe name or ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#6f6ab1',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      
    </div>
  );
};

export default Search;