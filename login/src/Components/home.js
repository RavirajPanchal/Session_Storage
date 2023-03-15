import React from "react";


function Home(){
    const handleClick=()=>{
        sessionStorage.clear();
        window.location.reload();
        

    }

    return (
        <>
        <h1> welcome to home page </h1>
        <button onClick={handleClick} > logout </button>

        </>
    )
}

export default Home;