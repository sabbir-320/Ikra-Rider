import React from 'react'
import "./searchPage.css"

export default function SearchDestination() {
    return (
        <div className="search-section">
            <div className="row">
                <div className="pick">
                    <form action="">
                        <label htmlFor="pickFrom">Pick From</label>
                        <input type="search" name="pickFrom" id="" />
                        <label htmlFor="pickTo">Pick To</label>
                        <input type="search" name="pickTo" id="" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className="map">

                </div>
            </div>
            
        </div>
    )
}
