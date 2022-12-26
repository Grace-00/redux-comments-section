/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react'
import { User } from '../User'
import { Rating } from '../Rating'
import { Button } from '../Button'
import { Content } from '../Content'
import { EditableContent } from '../EditableContent'
import { useAppDispatch, useAppSelector } from '../../redux/selectors'
import { Replies, upvoteComment, downvoteComment, deleteComment, editComment, updateComment } from '../../redux/slices/commentsSlice'
import './comment.css'
import { isCurrentUser } from '../../utils'


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
  const getCurrentUser = useAppSelector(state => state.data?.currentUser.username)
  const [text, setText] = useState('')

  return (

    <>
      <div className='comment'>
        <User user={props.user} createdAt={props.createdAt} />
        <Content content={props.content} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Rating className='rating-wrapper'>
            <Button className='icon-button' icon={`./icon-plus.svg`} onClick={() => dispatch(upvoteComment(props.commentId))} />
            <h4>{props.score}</h4>
            <Button className='icon-button' icon={`./icon-minus.svg`} onClick={() => dispatch(downvoteComment(props.commentId))} />
          </Rating>
          <Button className='reply-button' icon={`./icon-reply.svg`} buttonName='Reply' onClick={() => { }} />
        </div>
      </div>

      {props.replies.length > 0 && props.replies?.map((reply) => {
        return (
          <div className='comment reply' key={reply.id}>
            <User user={reply.user} createdAt={reply.createdAt} />
            <>
              {reply.isEditable ?
              <EditableContent value={text} onChange={(e)=>setText(e.target.value)} /> :
              <Content content={reply.content} replyingTo={reply.replyingTo} />
            }
            </>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Rating className='rating-wrapper'>
                <Button className='icon-button' icon={`./icon-plus.svg`} onClick={() => dispatch(upvoteComment(reply.id))} />
                <h4>{reply.score}</h4>
                <Button className='icon-button' icon={`./icon-minus.svg`} onClick={() => dispatch(downvoteComment(reply.id))} />
              </Rating>
              {isCurrentUser(getCurrentUser, reply.user.username) ?
              <>
                {reply.isEditable ?
                <Button className='update-button' buttonName='UPDATE' onClick={() => {dispatch(updateComment({replyId: reply.id, content: text, isEditable: false}))}} /> :
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button className='delete-button' icon={`./icon-delete.svg`} buttonName='Delete' onClick={() => dispatch(deleteComment(reply.id))} />
                  <Button className='edit-button' icon={`./icon-edit.svg`} buttonName='Edit' onClick={() =>  dispatch(editComment({replyId: reply.id, isEditable: true}))} />
                </div> }
              </>
                :
                <Button className='reply-button' icon={`./icon-reply.svg`} buttonName='Reply' onClick={() => { }} />
              }
            </div>
          </div>
        )
      })
      }
    </>

  )
}

export default Comment