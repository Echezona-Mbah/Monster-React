import React from "react";

import './search-box.style.css';



export const SearchBox = ({placeholder,headleCharge}) => (
    <input
    className="search"
    type='search'
    placeholder={placeholder}
    onChange={headleCharge}
    //jj3455edsfwefsffff
  />
)