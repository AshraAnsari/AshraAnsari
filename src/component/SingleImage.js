import React from 'react'

export default function SingleImage(props) {
    return (
        <div>
            <img src={props.location.url.small} />
        </div>
    )
}
