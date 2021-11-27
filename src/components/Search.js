import React from 'react'
import { createPortal } from 'react-dom'
import { FaSearch } from 'react-icons/fa'

function Search({open,setOpen}) {
    if(!open) return null
    return createPortal(
        <div className="search-full-width">
            <div className="container">
                <FaSearch/>
                <input type="text" name="search" placeholder="Search"/>
            </div>
            <span onClick={()=> setOpen(false)}>X</span>
        </div>,document.getElementById('portal'))
}

export default Search
