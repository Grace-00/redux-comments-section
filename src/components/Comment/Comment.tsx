import React from 'react'
import { User } from '../User'
import { Rating } from '../Rating'
import { Reply } from '../Reply'
import { Button } from '../Button'
import { useAppDispatch } from '../../redux/selectors'
import { upvoteComment, downvoteComment, Replies } from '../../redux/slices/commentsSlice'
import './comment.css'


interface CommentProps {
  readonly content: string
  readonly user: User
  readonly createdAt: string
  readonly score: number
  readonly commentId: number
  readonly replies: Replies[]
}


const Comment = (props: CommentProps) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='comment'>
        <>
          <User user={props.user} createdAt={props.createdAt} />
          <p style={{ paddingTop: 16 }}>{props.content}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Rating className='rating-wrapper'>
              <Button scoreIcon={`./icon-plus.svg`} onClick={() => dispatch(upvoteComment(props.commentId))} />
              <h4>{props.score}</h4>
              <Button scoreIcon={`./icon-minus.svg`} onClick={() => dispatch(downvoteComment(props.commentId))} />
            </Rating>
            <Reply />
          </div>
          {props.replies.length > 0 && props.replies?.map((reply) => {
            return (
            <div key={reply.id}>
              <User user={reply.user} createdAt={reply.createdAt} />
              <p style={{ paddingTop: 16 }}>{reply.content}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Rating className='rating-wrapper'>
                  <Button scoreIcon={`./icon-plus.svg`} onClick={() => dispatch(upvoteComment(reply.id))} />
                  <h4>{reply.score}</h4>
                  <Button scoreIcon={`./icon-minus.svg`} onClick={() => dispatch(downvoteComment(reply.id))} />
                </Rating>
                <Reply />
              </div>
            </div>
          )})
          }
        </>
      </div>
    </>
  )
}

export default Comment