import React from 'react'

// function original(props, ref) {
//     return (
//         <div>
//             <input type='text' ref={ref} />
//         </div>
//     )
// }
const Input = React.forwardRef((props, ref) => {
    const reference = ref;
    return (
        <div>
            <input type='text' ref={reference} />
        </div>
    )
});
export default Input
