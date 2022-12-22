import React from 'react'
import { User } from '../User'
import { Vote } from '../Vote'
import { Reply } from '../Reply'
import './comment.css'


interface CommentProps {
  readonly content: string
  readonly user: User
  readonly createdAt: string
  readonly score: number
}


const Comment = (props: CommentProps) => {
  return (
    <>
      <div className='comment'>
        <User user={props.user} createdAt={props.createdAt} />
        <p style={{paddingTop: 16}}>{props.content}</p>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Vote score={props.score} />
        <Reply />
        </div>
      </div>
    </>
  )
}

export default Comment