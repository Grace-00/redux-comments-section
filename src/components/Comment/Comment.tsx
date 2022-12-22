import React from 'react'
import { User } from '../User'
import { Rating } from '../Vote'
import { Reply } from '../Reply'
import { Button } from '../Button'
import { useAppDispatch, useAppSelector } from '../../redux/selectors'
import { upvoteComment, downvoteComment } from '../../redux/slices/commentsSlice'
import './comment.css'


interface CommentProps {
  readonly content: string
  readonly user: User
  readonly createdAt: string
  readonly score: number
}


const Comment = (props: CommentProps) => {
  const dispatch = useAppDispatch()
  const score = useAppSelector(state => state.data?.comments.map(comment => comment.score))
  console.log(props.score, 'score 2',score)
  return (
    <>
      <div className='comment'>
        <User user={props.user} createdAt={props.createdAt} />
        <p style={{ paddingTop: 16 }}>{props.content}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Rating className='rating-wrapper'>
            <Button scoreIcon={`./icon-plus.svg`} onClick={() => dispatch(upvoteComment())}/>
            <h4>{score}</h4>
            <Button scoreIcon={`./icon-minus.svg`} onClick={() => dispatch(downvoteComment())}/>
          </Rating>
          <Reply />
        </div>
      </div>
    </>
  )
}

export default Comment