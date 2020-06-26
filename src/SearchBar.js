import React from 'react'
import './SearchBar.css';

function SearchBar() {
  return (
    <div >


      <form >
        <input className="input" type="search" placeholder="Search.." name="search" />
        <button type="submit" className="searchButton" ><img className="searchButton" src="https://img.icons8.com/ios-glyphs/50/000000/google-web-search.png"/></button>
      </form>




    </div>
  )
}
export default SearchBar
