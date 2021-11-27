import React from 'react'
import { createPortal } from 'react-dom'
import { FaSearch } from 'react-icons/fa'

function ToggleSearch({toggleSearch}) {
    if(!toggleSearch) return null
    return createPortal(
        <div className="toggle-search">
            <div>
                <FaSearch/>
                <input type="text" placeholder="Search"/>
            </div>
        </div>,document.getElementById('portal'))
}

export default ToggleSearch
