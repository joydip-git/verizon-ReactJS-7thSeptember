import React from 'react'
import ClickCounter from '../../components/ClickCounter';
import HoverCounter from '../../components/HoverCounter';

export default function Counter() {

    return (
        <div>
            <HoverCounter value={100} />
            <br />
            <ClickCounter data={200} />
        </div>
    )
}
