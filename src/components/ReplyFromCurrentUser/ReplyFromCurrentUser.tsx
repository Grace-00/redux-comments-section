import React from 'react'
import './replyFromCurrentUser.css'

interface ReplyFromCurrentUser {
    readonly children: React.ReactNode
}

const ReplyFromCurrentUser = (props: ReplyFromCurrentUser) => {
  return (
    <div>{props.children}</div>
  )
}

export default ReplyFromCurrentUser