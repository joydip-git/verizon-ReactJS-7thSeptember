import React, { memo } from 'react'

function AnotherChild(props) {
    console.log('another child rendered')
    return (
        <div>
            Another Child:&nbsp;{props.data}
        </div>
    )
}

// let AnotherChildWithMemo = memo(AnotherChild)
// export default AnotherChildWithMemo;
export default memo(AnotherChild);
