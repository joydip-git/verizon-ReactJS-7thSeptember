import React, { useState } from 'react'

export function TestComp() {
    return 'abcd';
}
function NewHero({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error('not a hero...');
    }

    return <div> Hero:&nbsp;{heroName} </div>;
}

export default NewHero
