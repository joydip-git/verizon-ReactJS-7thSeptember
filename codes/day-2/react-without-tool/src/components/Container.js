// import React from 'react'
// //import Welcome from './Welcome';
// // import { Welcome } from './Welcome'

// function loadDesign(design) {

//     return import('./Welcome').then(
//         Welcome => {
//             design =
//                 (<div id='d1'>
//                     <Welcome />
//                     <input type='text' />
//                 </div>
//                 )
//         }
//     );
// }
// function Container() {
//     let design = null;
//     return <div>{design ? design : 'not loaded yet...'}</div>;

// }

// export default Container;

import React, { Suspense } from 'react'
const WelcomeComponent = React.lazy(() => import('./Welcome'));

function Container() {
    let show = true;
    //if(show)
    let design = (
        <div id='d1'>
            {show &&
                (<Suspense fallback={<div>Loading...</div>}>
                    <WelcomeComponent />
                </Suspense>)
            }

            <input type='text' />
        </div>);
    return design;

}

export default Container;