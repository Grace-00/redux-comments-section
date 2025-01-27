import React, { useState } from 'react'
import { User } from '../User'
import { Rating } from '../Rating'
import { Button } from '../Button'
import { Content } from '../Content'
import { Reply } from '../Reply'
import { useAppDispatch, useAppSelector } from '../../redux/selectors'
import { Replies, reply, addReply, upvote, downvote } from '../../redux/slices/commentsSlice'
import { ReplyFromCurrentUser } from '../ReplyFromCurrentUser'
import { EditableContent } from '../EditableContent'
import './comment.css'


interface CommentProps {
  readonly content: string
  readonly user: User
  readonly createdAt: string
  readonly score: number
  readonly commentId: number
  readonly replies: Replies[]
  readonly hasReplied?: boolean
}

const Comment = (props: CommentProps) => {
  const dispatch = useAppDispatch()  
  const getCurrentUsername = useAppSelector(state => state.comments.data?.currentUser.username)
  const [newContent, setNewContent] = useState(`@${props.user.username},`)
  return (

    <>
      <div className='comment'>
        <User user={props.user} createdAt={props.createdAt} />
        <Content content={props.content} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Rating className='rating-wrapper'>
            <Button className='icon-button' icon={`./icon-plus.svg`} onClick={() => dispatch(upvote({commentId: props.commentId, parentComment: false}))} />
            <h4>{props.score}</h4>
            <Button className='icon-button' icon={`./icon-minus.svg`} onClick={() => dispatch(downvote({commentId: props.commentId, parentComment: false}))} />
          </Rating>
          {/* ADD BUTTON DELETE - EDIT WHEN ON REPLY */}
          <Button className='reply-button' icon={`./icon-reply.svg`} buttonName='Reply' onClick={() => dispatch(reply(props.commentId))} />
        </div>
      </div>

      {props.hasReplied && <ReplyFromCurrentUser>
        <div className='comment'>
          <div className='reply-from-current-user'>
            <img src='./image-juliusomo.png' alt='juliusomo' className='user-img' />
            <EditableContent onChange={(e) => setNewContent(e.target.value)} value={newContent} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div></div>
            <Button className='reply-from-current-user-button' onClick={() =>  dispatch(addReply({commentId: props.commentId, content: newContent, replyingTo: '', username: getCurrentUsername}))} buttonName='REPLY' />
          </div>
        </div>
      </ReplyFromCurrentUser>
      }

      {props.replies.length > 0 && props.replies?.map((reply) => {
        return (
          <div className='comment reply' key={reply.id}>
            <Reply 
              replyId={reply.id}
              user={reply.user}
              content={reply.content}
              createdAt={reply.createdAt}
              score={reply.score}
              isEditable={reply.isEditable}
              replyingTo={reply.replyingTo}
              hasReplied={reply.hasReplied}
            />
          </div>
        )
      })
      }
    </>

  )
}

export default Comment