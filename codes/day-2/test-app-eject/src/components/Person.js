import React from 'react'

//person
//x
//
function Person(attributes) {
    console.log(attributes)
    return (
        <div>
            Name: <span>{attributes.person.name}</span>
            <br />
            Age: <span>{attributes.person.age}</span>
            <br />
            X:{attributes.x}
            
        </div>
    );
}
export default Person;

/**
 * {
 *   type:'div',
 *   key:null,
 *   props:{
 *      person:{name:joy, age:20},
 *      x:20,
 *      children:[10]
 *   },
 *   ref:null,
 * .....
 * }
 */