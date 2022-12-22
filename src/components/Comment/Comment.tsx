import React from 'react'
import { User } from '../User'
import { Vote } from '../Vote'
import './comment.css'


interface CommentProps {
  readonly content: string
  readonly user: User
  readonly createdAt: string
}


const Comment = (props: CommentProps) => {
  return (
    <>
      <div className='comment'>
        <User user={props.user} createdAt={props.createdAt} />
        <p style={{paddingTop: 16}}>{props.content}</p>
        <Vote />
      </div>
    </>
  )
}

export default Comment