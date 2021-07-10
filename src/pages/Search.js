import React from 'react'
import "../components/searchCom/searchPage.css"
import SearchDestination from '../components/searchCom/SearchDestination'
import Navbar from '../components/sharedCom/Navbar'

export default function Search() {
    return (
        <div className="search-container container">
            <Navbar></Navbar>
            <SearchDestination></SearchDestination>
        </div>
    )
}
