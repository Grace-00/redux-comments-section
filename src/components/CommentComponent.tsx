import React from 'react'
import User from './User'
interface CommentComponentProps {
  readonly content: string
  readonly user: User
}


const CommentComponent = (props: CommentComponentProps) => {
  return (
    <>
    <User user={props.user} />
    <p>{props.content}</p>
    </>
  )
}

export default CommentComponent