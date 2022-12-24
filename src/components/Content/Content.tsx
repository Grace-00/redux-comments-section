import React from 'react'
import './content.css'

interface ContentProps {
    readonly content: string
    readonly replyingTo?: string
}

const Content = (props: ContentProps) => {
    return (
        <>{props.replyingTo ?
            <p style={{ paddingTop: 16 }}>
                <span style={{ color: 'hsl(238, 40%, 52%)', fontWeight: 500 }}>@{props.replyingTo} </span>
                {props.content}
            </p>
            : <p style={{ paddingTop: 16 }}>{props.content}</p>}

        </>

    )
}

export default Content