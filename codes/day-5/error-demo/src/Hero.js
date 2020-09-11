import React, { useState } from 'react'

function Hero({ heroName }) {
    //DO NOT USE STATE HERE AND TRY TO RESET THE STATE IN CATCH BLOCK AS IT WILL CAUSE RE-RENDER AND LEAD TO AN INFINITE
    //const [errorState, setErrorState] = useState(false);
    let design = null;
    let hasError = false;
    try {
        if (heroName === 'Joker') {
            throw new Error('not a hero...');
        }
    }
    catch (error) {
        console.log(error)
        hasError = true;
        // setErrorState(ps => {
        //     return !ps;
        // });
        // setErrorState(ps => {
        //     return {
        //         hasError: !ps.hasError
        //     };
        // });
        design = <div>someting went wrong</div>;
    }

    if (!hasError) {
        // if (!errorState.hasError) {
        // if (!errorState) {
        design = <div> Hero:&nbsp;{heroName} </div>;
    }

    return design;
}

export default Hero
