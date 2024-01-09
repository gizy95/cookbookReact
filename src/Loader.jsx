import React from 'react';
import loader from "./assets/loader.svg"

const Loader = () => {
    return (

        <div className="loader" id="loader">

            <img src={loader} alt="Loading..." />

        </div>
    )
}

export default Loader;